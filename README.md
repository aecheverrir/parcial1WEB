<img src="http://blog.inkjetwholesale.com.au/wp-content/uploads/2017/09/instagram-challenges.png" title="CarInfo" alt="CarInfo" href="https://carinfo1.herokuapp.com/">

# InstaFight

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Team](#team)
- [Setup](#setup)
- [Visit](#visit)
- [License](#license)

---

## Prerequisites

- NodeJS
- NPM
- MongoDB

## Installation

- clone the repo on your console, instructions [below](#clone)
- use `cd carinfo` to enter the main folder
- use `npm install` to install npm dependencies
- follow [setup](#setup) guide
- use `npm run webpack` to generate the bundle.js file
- use `node bin/www` or `npm run server`  to run the server locally at port you defined or otherwise it's 8000

## Setup
- Create a .env file in your main folder in order to change to configure your cloud/local database account. If running locally you should add something like this to the file: `DB_HOST='mongodb://localhost:27017';` otherwise if using mongolab or some other cloud database you should add something like `DB_HOST=mongodb://<dbuser>:<dbpassword>@ds263403.mlab.com:your_db`

- Define the port you want the app to run at. It's allready set as port 8000, in case you want to change it head over to: bin/www and change `var port = 8000;` replacing 8000 for the port you want to use.

## Clone

- Clone this repo to your local machine using `https://github.com/aecheverrir/parcial1WEB.git`

---

## Visit

Currently deployed with heroku: <a href="https://instafight1.herokuapp.com/" target="_blank">**InstaFight**</a>
 
---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2018 © 
