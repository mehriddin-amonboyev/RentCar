CREATE DATABASE rentcar;
CREATE TABLE car(
    id SERIAL PRIMARY KEY ,
    brand VARCHAR(255)NOT NULL,
    model VARCHAR(255)NOT NULL,
    year INTEGER NOT NULL,
    rentalPrice NUMERIC,
    available BOOLEAN default true
);
INSERT INTO car(brand, model,year, rentalPrice, available)
VALUES
('Chevrolet','Ravon', 2019,300,true),
('Chevrolet','gentra', 2020,400,true),
('Chevrolet','Captiva', 2015,500,false),
('Chevrolet','matiz', 2019,150,true),
('Kia','K5', 2023,1000,true);