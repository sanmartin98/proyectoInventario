<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require 'connect.php';

$data = file_get_contents("php://input");
$request = json_decode($data);



if(isset($data) && !empty(trim($data))){
    $request = json_decode($data);
    
    $nombre = $request->nombre;
    $ref = $request->ref;
    $precio = $request->precio;
    $peso = $request->peso;
    $categoria = $request->categoria;
    $stock = $request->stock;
    $fechaCreacion = $request->fechaCreacion;
    $fechaVenta = $request->fechaVenta;

    $sql = "INSERT INTO `productos`(`nombre`, `precio`, `peso`, `categoria`, `stock`, `fecha_creacion`, `fecha_ult_venta`) VALUES ('{$nombre}', '{$precio}', '{$peso}', '{$categoria}', '{$stock}', '{$fechaCreacion}', '{$fechaVenta}')";

    if(mysqli_query($con, $sql)){
        http_response_code(201);
    }else{
        http_response_code(422);
    }
} 