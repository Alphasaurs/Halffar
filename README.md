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
 User should use same Schemma.
 ### Approach
 1. Design database and table shemma.
 2. Create table in postgresql.
 3. Init npm and install required dependency.
 4. Connect postgresql to npm.
 5. Code all enpoints as per the postgresql query.
 
 ### Features
  1. Asynchronous.
  2. Scalable.
  3. Sorting / priority basis.
  4. Searching.
  5. Management
 
[back to top](#table-of-contents)
## Database
 ### Setting up
  `$ psql -U postgres` enter your password\
   `$ CREATE DATABASE halffar;` create db\
   `$ \c halffar;` connect to db\
    Create table on the basis of below schemma.

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
 <table>
    <thead>
        <th>Method</th>
        <th colspan =2>Endpoint</th>
        <th colspan =2>Function</th> 
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td colspan =2>/halffar</td>
            <td colspan =2>Showing your all task</td>
        </tr>
         <tr>
            <td>POST</td>
            <td colspan =2>/halffar</td>
            <td colspan =2>Creating your new task</td>
        </tr>
         <tr>
            <td>GET</td>
            <td colspan =2>/halffar/:id</td>
            <td colspan =2>Showing your task No : details</td>
        </tr>
         <tr>
            <td>PUT</td>
            <td colspan =2>/halffar/title/:id</td>
            <td colspan =2>Updating title of task No : </td>
        </tr>
         <tr>
            <td>PUT</td>
            <td colspan =2>/halffar/deadline/:id</td>
            <td colspan =2>Updating deadline of task No :</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td colspan =2>/halffar/status/:id</td>
            <td colspan =2>Updating status of your task No :</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td colspan =2>/halffar/:id</td>
            <td colspan =2>Deleting your task No : </td>
        </tr><tr>
            <td>GET</td>
            <td colspan =2>/halffar/priority/status</td>
            <td colspan =2>Tasks priority on the basis of status.</td>
        </tr><tr><
            <td>GET</td>
            <td colspan =2>/halffar/priority/deadline</td>
            <td colspan =2>Tasks priority on the basis of deadlines.</td>
        </tr><tr>
            <td>GET</td>
            <td colspan =2>/halffar/search/:title</td>
            <td colspan =2>Showing your searched task </td>
        </tr>
         </tr><tr>
            <td>GET</td>
            <td colspan =2>/halffar/search/:status</td>
            <td colspan =2>Showing your searched task </td>
        </tr>
         </tr><tr>
            <td>GET</td>
            <td colspan =2>/halffar/search/:deadline</td>
            <td colspan =2>Showing your searched task </td>
        </tr>
    </tbody>
    </table>
[back to top](#table-of-contents)
