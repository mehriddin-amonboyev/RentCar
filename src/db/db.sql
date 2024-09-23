CREATE DATABASE rentalcar;
CREATE TABLE car(
    id SERIAL PRIMARY KEY ,
    brand VARCHAR(255)NOT NULL,
    model VARCHAR(255)NOT NULL,
    year INTEGER NOT NULL,
    rentalPrice NUMERIC,
    available BOOLEAN default true,
);
INSERT INTO movie(name, year,rating)
VALUES
('Shrek', 1986, 9.9),
('Hulk', 1984, 4.9);