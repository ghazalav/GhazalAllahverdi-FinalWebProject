<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");




include_once $_SERVER['DOCUMENT_ROOT'] . '/database/db.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/main/movie.php';

$database = new Database();
$db = $database->getConnection();


$item = new Movie($db);

$data = json_decode(file_get_contents("php://input"), true);

$item->nameM = $data["nameM"];
$item->years = $data["years"];
$item->des = $data["des"];
$item->urlM = $data["urlM"];


if ($item->nameM == null || $item->years == null || $item->des == null) {
    $error = json_encode(array("message" => "Properties shouldn't be null!", "status" => 400));
    echo $error;
}
if (!isset($error)) {
    if ($item->create()) {
        echo json_encode(array("message"=>  'Movie created successfully.'));
    } else {
        echo 'Not Found.';
    }
}
