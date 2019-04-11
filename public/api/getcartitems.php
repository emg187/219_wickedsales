<?php

require_once("functions.php");
set_exception_handler("handleError");
require_once("config.php");
require_once("mysqlconnect.php");

$user_id = 1;
$cartItems = [];
$cartMetaData;
$cartCreated;
$cartTotal = 0;

if (empty($_SESSION["cart_id"])){
    throw new Exception("No cart available");
} 

    $cart_id = $_SESSION["cart_id"];
    $cart_items_query = "SELECT * FROM `cart_items` WHERE `carts_id`=$cart_id";
    $cart_items_result = mysqli_query($conn, $cart_items_query);

    while ($row = mysqli_fetch_assoc($cart_items_result)){
        $cart_item_id = $row["products_id"];
        $cart_item_quantity = $row["quantity"];

        $products_query = "SELECT `name`, `price` FROM `products` WHERE `id`=$cart_item_id";
        $products_query_result = mysqli_query($conn, $products_query);

        $productsRow = mysqli_fetch_assoc($products_query_result);
        $cart_item_name = $productsRow["name"];
        $cart_item_price = $productsRow["price"];
        $cartTotal = ($cart_item_price*$cart_item_quantity) + $cartTotal;

        $images_query = "SELECT `url` FROM `images` WHERE `products_id`=$cart_item_id";
        $images_query_result = mysqli_query($conn, $images_query);

        $imagesRow = mysqli_fetch_assoc($images_query_result);
        $image = $imagesRow["url"];
        $cart_item_images = $image;

        $cartItem["name"] = $cart_item_name;
        $cartItem["price"] = (int)$cart_item_price;
        $cartItem["image"] = $cart_item_images;
        $cartItem["quantity"] = (int)$cart_item_quantity;
        $cartItem["id"] = (int)$cart_item_id;
        $cartItems[] = $cartItem;
    }

    $cart_created_query = "SELECT `created` FROM `carts` WHERE `id`=$cart_id";
    $cart_created_result = mysqli_query($conn, $cart_created_query);

    $createdRow = mysqli_fetch_assoc($cart_created_result);
    $cart_created = $createdRow["created"];

    $cartMetaData["created"] = date("M jS Y", strtotime($cart_created));
    $cartMetaData["total"] = $cartTotal;

$output = [
    "success"=>true,
    "cartItems"=>$cartItems,
    "cartMetaData"=>$cartMetaData
];

print(json_encode($output));

?>

