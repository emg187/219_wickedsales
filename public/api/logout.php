<?php
require_once("mysqlconnect.php");
require_once("functions.php");
require_once("config.php");

set_exception_handler("handleError");

$output = [
    "success"=>false
];

if (empty($_SESSION["user_data"])){
    $output["success"] = true;
    $output["message"] = "You weren't logged in";
    print(json_encode($output));
    exit;
}

$token = $_SESSION["user_data"]["token"];
$delete_user_connection_query = "DELETE FROM `user_connections` WHERE `token`='$token'";
$delete_connection_result = mysqli_query($conn, $delete_user_connection_query);

if (!$delete_connection_result){
    throw new Exception (mysqli_error($conn));
}
if (mysqli_affected_rows($conn)!==1){
    throw new Exception("logout unsuccessful");
}

unset($_SESSION["user_data"]);
$output["success"] = true;

print(json_encode($output));
?>