# Full-Stack Offline Budget Tracker

## About the Project
This project is a full-stack application that helps the user to keep track of their budget. The user can input expense items and can also enter values for any deposits. This app is intended to be particularly useful for people who are travelling and do not have any reliable connection to internet. The app stores locally using No-SQL Index DB. I developed this application during the 9th week of the coding bootcamp experience at Columbia University, NY. Date of publication: 11/24/2020

[Deployed Heroku link to the Offline Budget App](https://full-stack-budget-tracker.herokuapp.com/) <br />
[Watch a video demonstrating the app functionality]()<br />

## Contact Programmer for questions

Jay J. Idrees, MD, MPH<br />
Full-Stack Software Engineer<br />
[JAY-IDREES](https://github.com/Jay-Idrees) ![Github](http://img.shields.io/badge/github-black?style=flat&logo=github)<br />
jidrees@live.com



## Contents

- [User Story](#user-story)
- [Technologies used](#technologies-used)
- [Key files in the repository](#key-files-in-the-repository)
- [Packages used](#packages-used)
- [Applied Programming Skills](#applied-programming-skills)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Credits and Copyright](#credits-and-copyright)


## User Story

As a frequent traveler, I do not always have consistent access to a secure internet connection. While I travel I would like to keep a track of my budget. I would like the app to be working event when I am not connected to the internet. I would like the app to give me options to add various expenses or deposits.




## Technologies used



![Javascript](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript)

![JQUERY](https://img.shields.io/badge/jquery-purple?style=for-the-badge&logo=jquery)

![CSS](https://img.shields.io/badge/css-darkgreen?style=for-the-badge&logo=css3)

![HTML](https://img.shields.io/badge/HTML-informational?style=for-the-badge&logo=html5)

![NPM](http://img.shields.io/badge/npm-yellow?style=for-the-badge&logo=NPM)

![Node](https://img.shields.io/badge/Node-green?style=for-the-badge&logo=Node.js)

![EXPRESS.js](http://img.shields.io/badge/express-JS-yellow?style=for-the-badge&logo=experts-exchange)

![MongoDB](http://img.shields.io/badge/mongo-dB-black?style=for-the-badge&logo=mongodb)

![Index DB](http://img.shields.io/badge/IndexDB-darkred?style=for-the-badge&logo=adobe-indesign)

![Heroku](http://img.shields.io/badge/Heroku-purple?style=for-the-badge&logo=heroku)



## Packages used

Express <br />
Mongoose <br />
Compression <br />
lite-Server <br />
Morgan <br />


## Applied Programming Skills

By completing this project I was able to master application of the following programming skills: 

- Storing a budget transaction as an object into MongoDB consisting of a name of transaction and an amount.

- Putting date stamps on the transaction object using the Date.now as the default value for date property in the transaction object.

- Using Mongoose package to handle connection with MongoDB

- Storing data in the form of objects and then using dot notation for manipulation

- Using robo 3T to visualize the databases created in MongoDB using the Mongose package

- Using Index DB as an alternative to local storage and SQL. This feature allows the app to continue to function even offline. 

- Creating manifest.webmanifest to transform the application into a Progressive Web App (PWA)

- Using service worker to load files into the cache while deleting old files 

- Creating Express.JS server routes for handeling data input/output requests

- Setting up Express.JS server connection using Node.JS

- Enlisting appropriate dependencies

- Deployment of the app to Heroku

- Using Node.JS to create a high quality readme file



## Key files in the repository

server.js <br />
transaction.js <br />
db.js <br />
manifest.webmanifest.js <br />
service-worker.js <br />
api.js


## Installation

For installation of the dependencies, please run the following command in the terminal

```
npm install
```

## Usage

To start the application, please type the following command in the terminal

```
node server
```


## Testing

For running the tests on application, please run the following commad

```
npm test
```


## License 

![License badge](https://img.shields.io/badge/license-MIT-blue.svg)


## Credits and Copyright 
Copytight 2020- Present. Jay Idrees


