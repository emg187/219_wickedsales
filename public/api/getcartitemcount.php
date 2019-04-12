<?php
require_once("mysqlconnect.php");
require_once("functions.php");
require_once("config.php");

set_exception_handler("handleError");

$output = [
    "success"=>false
];

if (empty($_SESSION["cart_id"])){
    $output["success"] = true;
    $output["itemCount"] = 0;
} else {
    $cartId = $_SESSION["cart_id"];
    
    $count_query = "SELECT `item_count` FROM `carts` WHERE `id`=$cartId";
    $count_result = mysqli_query($conn, $count_query);

    if (!$count_result){
        throw new Exception(mysqli_error($conn));
    }
    if (mysqli_num_rows($count_result)===0){
        throw new Exception("invalid cart id");
    }

    $row = mysqli_fetch_assoc($count_result);
    $output["success"] = true;
    $output["itemCount"] = (int)$row["item_count"];

    print(json_encode($output));
}
?>