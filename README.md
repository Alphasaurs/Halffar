# Halffar
Miles to learn, Miles to forget....\
But first start tracking down what to learn...
## Table of contents
1. [Getting Started](#getting-started)
2. [Solution](#solution)
    1. [Assumptions](#assumptions)
    2. [Approach](#approach)
    3. [Features](#features)
2. [Database](#database)
    1. [Setting up](#setting-up)
    2. [Schemma](#schemma)
4. [Api](#api)
    1. [Installation](#install)
    2. [Run](#run)
    3. [API End points](#endpoints)

## Getting started
A rest api to track down all the tasks as well as markdown the status of tasks.

[back to top](#table-of-contents)

## Solution
 ### Assumptions
 ### Approach
 ### Features
 
[back to top](#table-of-contents)
## Database
 ### Setting up
  `$ psql -U postgres` enter your password\
   `$ CREATE DATABASE halffar;` create db\
   `$ \c halffar;` connect to db

 ### Schemma
 ```console
$ CREATE TABLE tasks(
$ id SERIAL PRIMARY KEY NOT NULL,
$ title STRING NOT NULL,
$ priority INT,
$ start_date DATE,
$ end_date DATE,
$ status INT DEFAULT 0
$ );
 ```
[back to top](#table-of-contents)


## Api
 ### Install
 `git clone https://github.com/Alphasaurs/Halffar.git`\
 `npm install` to install dependencies
 ### Run
 `npm start`
 ### Endpoints
[back to top](#table-of-contents)
