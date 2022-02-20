CREATE DATABASE movie;
USE movie;
CREATE TABLE MovieTable(
    movieID INTEGER AUTO_INCREMENT,
    nameM VARCHAR (50),
    years INTEGER,
    des VARCHAR(1000),
    urlM VARCHAR(1000)
);

INSERT INTO  MovieTable( movieID, nameM ,years,des , urlM)
VALUES (132, "Hanger Game" , 2015 ,"I love this movie" , "https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_.jpg");