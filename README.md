# <span style="color:gold">E-Commerce Back End</span>
 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
[![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)
[![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/docs/v6/)
[![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)](https://www.npmjs.com/package/dotenv)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)
  
## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Description 

Modifed the starter code to create an application called E Commerce. Given the starter code of a working Express.js API, code was configured to use Sequelize to interact with a MySQL database.

Code syncs Sequelize models to a MySQL database on the server start, includes column definitions for all four models and model associations, and provides the following GET, POST, PUT, and DELETE routes:

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
  
## Installation 
* Check if you have Node.js installed by typing `node -v` in your command line. If node is not installed, visit the [Node.js](https://nodejs.org/en) website to install. 
* Next, clone this project repository to your computer. 
* Use the command `npm i` to install dependencies. 
* Create a file in the root directory titled `.env` and include database name and personal MySQL login information:
```
DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PASSWORD='YOUR PASSWORD'
```
* Open MySQL with command `mysql -u root -p` and enter your personal MySQL password. 
* Create databse with command `source schema.sql`. Log out of MySQL with command `\q` or `quit`.
* Seed database with command `npm run seed`.

## Usage 

Watch a [video](https://drive.google.com/file/d/120F8fu2B9Fg24jrFHmOWmCVwO7jvTJwb/view) demonstration of the basic functionality:
  
* Start server with command `npm start`.
* Access API routes with Insomnia using the following endpoints:

|                                   | CATEGORY                                 | TAG                                | PRODUCT                                |
|-----------------------------------|------------------------------------------|------------------------------------|----------------------------------------|
| GET (ALL), POST(CREATE)           | http://localhost:3001/api/categories/    | http://localhost:3001/api/tags/    | http://localhost:3001/api/products/    |
| GET (BY ID), PUT(UPDATE),  DELETE | http://localhost:3001/api/categories/:id | http://localhost:3001/api/tags/:id | http://localhost:3001/api/products/:id |


* Make POST and PUT requests with the following JSON body formats:

 **CATEGORY**
  ```
  { 
  "categoryName": "STRING INPUT" 
  }
  ```
 **TAG**
  ```
  { 
  "tagName": "STRING INPUT" 
  }
  ```
  **PRODUCT**
  ```
  { 
  "product_name": "STRING INPUT",   
  "price": DECIMAL INPUT,   
  "stock": INTEGER INPUT,   
  "tagIds": INTEGER INPUT
  }
  ```


## License
This project is covered under the MIT licence.  
To learn more click on the following *[link](https://opensource.org/licenses/MIT)*

## How to Contribute 
Please follow Contributor Covenant Guidelines by clicking on the following link: 
*[Contributor Covenant](https://www.contributor-covenant.org/)*

## Tests
Use Insomnia for testing routes

## Questions
If you have any questions about this projects, please *email me: gubiscom@yahoo.com* directly.  
Please visit my [GitHub Page](https://github.com/Esztergb/e-commerce-back-end.git) to view this project.
[Heroku Page](https://radiant-shore-40784.herokuapp.com/)

##  Credits
Thank you for tips and sugestions from Bootcamp instructors and classmates. I have used https://www.w3schools.com/ and https://www.stackoverflow.com to research information. Codes were based on mini project and some other modules from bootcamp. 

I received help from tutor Dru Sanchez as well. 

Tables in README created using [table-magic](https://github.com/stevecat/table-magic) by Steve GunTrip ([stevecat](https://github.com/stevecat)).

