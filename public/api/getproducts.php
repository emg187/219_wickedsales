<?php
require_once('mysqlconnect.php');
require_once("config.php");
require_once('functions.php');

set_exception_handler("handleError");

$query = 'SELECT p.id, p.name, p.price, i.url AS `images` 
FROM `products` AS p JOIN `images` AS i 
ON p.`id` = i.`products_id`
ORDER  BY p.`id`';

$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception("Invalid query: " .mysqli_error($conn));
}

$data = [];
$images = [];

while($row = mysqli_fetch_assoc($result)){
    $currentID = $row["id"];
    $image = $row["images"];
    if (isset($data[$currentID])){

        $data[$currentID]["images"][] = $image;
    } else {
        unset($row["images"]);
        $row["images"] = [$image];
        $row["price"] = intval($row["price"]);

        $data[$currentID] = $row;
    }
}

$pureData = [];
foreach($data as $value){
    $pureData[] = $value;
}

$output = [
    "success"=>true,
    "products"=>$pureData
];

$json_output = json_encode($output);
print($json_output);

?>