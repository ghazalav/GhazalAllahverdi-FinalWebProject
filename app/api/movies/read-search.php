<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


include_once $_SERVER['DOCUMENT_ROOT'] . '/database/db.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/main/movie.php';

$database = new Database();
$db = $database->getConnection();

$items = new Movie($db);

$items->years = isset($_GET['input']) ? $_GET['input'] : die();
$items->nameM = isset($_GET['input']) ? $_GET['input'] : die();

$stmt = $items->getSerachResult();
$itemCount = $stmt->rowCount();

if ($itemCount > 0) {

    $moviesArr = array();
    $moviesArr["body"] = array();
    $moviesArr["itemCount"] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $m = array(
            "movieID" => $movieID,
            "nameM" => $nameM,
            "years" => $years,
            "des" => $des,
            "urlM" => $urlM
        );

        array_push($moviesArr["body"], $m);
    }
    echo json_encode($moviesArr);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "Not Found.")
    );
}
