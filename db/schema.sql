-- Create database burgers and use it
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers
CREATE TABLE burgers
(
    id INTEGER
    AUTO_INCREMENT NOT NULL,
 burger_name VARCHAR
    (20) NOT NULL,
 devoured BOOLEAN DEFAULT false,
 PRIMARY KEY
    (id)
);