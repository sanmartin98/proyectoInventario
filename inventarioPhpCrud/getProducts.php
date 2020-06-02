<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require 'connect.php';
error_reporting(E_ERROR);
$products = [];
$sql = "SELECT * FROM `productos`";

if($result = mysqli_query($con, $sql)){
    print_r($result);
    $cr = 0;
    while($row = mysqli_fetch_assoc($result)){
        $products[$cr]['id'] = $row['id'];
        $products[$cr]['nombre'] = $row['nombre'];
        $products[$cr]['precio'] = $row['precio'];
        $products[$cr]['peso'] = $row['peso'];
        $products[$cr]['categoria'] = $row['categoria'];
        $products[$cr]['stock'] = $row['stock'];
        $products[$cr]['fecha_creacion'] = $row['fecha_creacion'];
        $products[$cr]['fecha_ult_venta'] = $row['fecha_ult_venta'];
        $cr++;
    }
    print_r($products);
    echo json_encode($products);
}else{
    http_response_code(404);
}