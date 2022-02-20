<?php

class Movie
{
    private $conn;
    private $db_table = "MovieTable";
    public $movieID;
    public $nameM;
    public $years;
    public $des;
    public $urlM;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $sqlQuery = "INSERT INTO
                     " . $this->db_table . "
                 SET
                    nameM = :nameM,
                    years = :years,
                    des = :des,
                    urlM = :urlM";

        $stmt = $this->conn->prepare($sqlQuery);

        $this->nameM = htmlspecialchars(strip_tags($this->nameM));
        $this->years = htmlspecialchars(strip_tags($this->years));
        $this->des = htmlspecialchars(strip_tags($this->des));
        $this->urlM = htmlspecialchars(strip_tags($this->urlM));

        $stmt->bindParam(":nameM", $this->nameM);
        $stmt->bindParam(":years", $this->years);
        $stmt->bindParam(":des", $this->des);
        $stmt->bindParam(":urlM", $this->urlM);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }


    public function update()
    {
            $sqlQuery = "UPDATE " . $this->db_table . " SET nameM = :nameM,
                      years = :years,
                     des = :des,
                     urlM = :urlM WHERE movieID = :movieID
                 ";




        $stmt = $this->conn->prepare($sqlQuery);

        $this->nameM = htmlspecialchars(strip_tags($this->nameM));
        $this->years = htmlspecialchars(strip_tags($this->years));
        $this->des = htmlspecialchars(strip_tags($this->des));
        $this->urlM = htmlspecialchars(strip_tags($this->urlM));
        $this-> movieID = htmlspecialchars(strip_tags($this->movieID));
        $stmt->bindParam(":nameM", $this->nameM);
        $stmt->bindParam(":years", $this->years);
        $stmt->bindParam(":des", $this->des);
        $stmt->bindParam(":urlM", $this->urlM);
        $stmt->bindParam(":movieID", $this->movieID);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    function delete()
    {
        $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE movieID = ?";
        $stmt = $this->conn->prepare($sqlQuery);

        $this->movieID = htmlspecialchars(strip_tags($this->movieID));

        $stmt->bindParam(1, $this->movieID);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function getMovies()
    {
        $sqlQuery = "SELECT movieID, nameM ,years, des, urlM FROM " . $this->db_table . "";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    public function getSingleMovie()
    {
        $sqlQuery = 'SELECT
                     *
                     FROM ' . $this->db_table . '
                 WHERE movieID = ?
                 ';

        $stmt = $this->conn->prepare($sqlQuery);

        $stmt->bindParam(1, $this->movieID);

        $stmt->execute();

        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->nameM = $dataRow['nameM'];
        $this->years = $dataRow['years'];
        $this->des = $dataRow['des'];
        $this->urlM = $dataRow['urlM'];
    }

    public function getSerachResult()
    {
        $sqlQuery = "SELECT
                    movieID,
                    nameM,
                     years,
                    des,
                    urlM
                    FROM " . $this->db_table . "
                    WHERE  years = :input or nameM = :input  " ;

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam( ":input", $this->years);
        $stmt->bindParam(":input", $this->nameM);
        $stmt->execute();
        return $stmt;
    }
}
