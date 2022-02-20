<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once $_SERVER['DOCUMENT_ROOT'] . '/database/db.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/main/movie.php';

$database = new Database();
$db = $database->getConnection();

$item = new Movie($db);

$item->movieID = isset($_GET['movieID']) ? $_GET['movieID'] : die();

$item->getSingleMovie();

if ($item->nameM != null) {
    // create array
    $moviesArr = array(
        "movieID" =>  $item->movieID,
        "nameM" => $item->nameM,
        "years" => $item->years,
        "des" => $item->des,
        "urlM" => $item->urlM
    );

    http_response_code(200);
    echo json_encode($moviesArr);
} else {
    http_response_code(404);
    echo json_encode("Not Found.");
}
