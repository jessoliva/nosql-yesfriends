<h1 align="center">NoSQL Minds</h1>

<p align="center">
A social network API - share your thoughts, make friends, and react to thoughts.
</p>

## 📚&nbsp; Table of Contents

- [💻&nbsp; Technologies](#technologies)
- [✨&nbsp; Description](#description)
- [🌼&nbsp; Features](#features)
- [🛠️&nbsp; Installation](#installation)
- [👩🏽‍💻&nbsp; Usage](#usage)
- [✏️&nbsp; Contribution Guidelines](#contribution-guidelines)
- [👨‍👩‍👧‍👦&nbsp; Credits](#credits)
- [📱&nbsp; Contact](#contact)
- [📰&nbsp; License](#license)

## 💻&nbsp; Technologies
<div align="center">

<a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/mongodb-black?style=flat-square&labelColor=black&logo=mongodb&logoColor=#47A248" /></a>
&ensp;
<a href="https://mongoosejs.com/"><img src="https://img.shields.io/badge/mongoose-730002?style=flat-square&labelColor=730002&logo=m&logoColor=#47A248" /></a>&ensp;
<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/node.js-233056?style=flat-square&labelColor=233056&logo=node.js&logoColor=#339933" /></a>&ensp;
<a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&labelColor=white&logo=npm&logoColor=CB3837" /></a>&ensp;
<a href="https://expressjs.com/"><img src="https://img.shields.io/badge/express-white?style=flat-square&labelColor=black&logo=express&logoColor=#000000" /></a>&ensp;
<a href="https://insomnia.rest/"><img src="https://img.shields.io/badge/insomnia-black?style=flat-square&labelColor=black&logo=insomnia&logoColor=4000BF" /></a>&ensp;

</div>

## ✨&nbsp; Description

An API for a social network web application where users can, share their thoughts, make friends, and react to others thoughts. 

## 🌼&nbsp; Features

- Express.js for routing
- MongoDB for database to handle a large amount of unstructured data
- Mongoose ODM
- Implementation of GET, POST, PUT, DELETE routes to interact with database
- CRUD Functionality
- User can 
    - share their thoughts, and delete their thoughts
    - react to other's thoughts, and delete their reactions
    - make a friends list, and remove friends
- When a user is deleted, the user's associated thoughts are deleted as well

## 🛠️&nbsp; Installation

### Cloning Repository
Go to the main page of the repository and click on '<> Code'. From there, copy your preferred URL to clone the repository onto your computer. My go to is SSH!

Go to your terminal or the VSCode terminal, cd into the directory you want the cloned repository to be located in and enter the following command and replace the placeholder with the URL link you copied:

    git clone <INSERT-COPIED-URL>

### Dependencies and Technologies
Ensure to install Node.js and npm.

Next, open the repository you cloned in Visual Studio Code. In the terminal enter the following command to install the dependencies required for the app:

    npm i

MySQL Process:

    mysql -u <username> -p
- Enter password after entering command above.
- Enter 'SOURCE db/schema.sql' to create database
- Enter 'quit' to exit out of MySQL 

Seed Database Process:

    npm run seed
- Navigate to the roof directory of the project
- Run the above seed command to seed with test data

## 👩🏽‍💻&nbsp; Usage
Test the application using Insomnia. To invoke the application, navigate to the root directory of the project and run the following command:

    npm start

✨ Checkout the [walk-through video](https://drive.google.com/file/d/1-_azyN1IbNZO9dvEtq5hhYy7eYpxo50v/view?usp=sharing) </br>
Also located in: assets/walk-through.mov

## ✏️&nbsp; Contribution Guidelines

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/)

## 👨‍👩‍👧‍👦&nbsp; Credits

- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [W3Schools - event onchange](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [Shields.io](https://shields.io/)

## 📱&nbsp; Contact

If you have any questions related to this project, or you just want to interact, you can reach me via GitHub or E-mail!

> Github: [jess-oliva](https://github.com/jess)

> E-mail: [jessoliva.g@gmail.com](mailto:jess)

## 📰&nbsp; License

    Copyright 2022 Jessica Olivares

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.