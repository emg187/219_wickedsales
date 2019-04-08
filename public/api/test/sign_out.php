<?php

session_start();
session_destroy();

print(json_encode(["success"=>true]));

?>