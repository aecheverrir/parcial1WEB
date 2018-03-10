<img src="https://content.audi.co.uk/dam/7_days/CAD/External%20Assets/R8/R8-white/010.png" title="CarInfo" alt="CarInfo" href="https://carinfo1.herokuapp.com/">

# InstaFight

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![Code Climate](http://img.shields.io/codeclimate/github/badges/badgerbadgerbadger.svg?style=flat-square)](https://codeclimate.com/github/badges/badgerbadgerbadger) [![Github Issues](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/issues.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/issues) [![Pending Pull-Requests](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/pulls.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/pulls) [![Gem Version](http://img.shields.io/gem/v/badgerbadgerbadger.svg?style=flat-square)](https://rubygems.org/gems/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Badges](http://img.shields.io/:badges-9/9-ff6799.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger)


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
- Create a .env file in your main folder in order to change to configure your cloud/local database account. If running locally you should add something like this to the file: `DB_HOST='mongodb://localhost:27017';` otherwise if using mongolab or some other cloud database you should add something like `DB_HOST=mongodb://<dbuser>:<dbpassword>@ds263403.mlab.com:your_db

- Define the port you want the app to run at. It's allready set as port 8000, in case you want to change it head over to: bin/www and change `var port = 8000;` replacing 8000 for the port you want to use.

## Clone

- Clone this repo to your local machine using `https://github.com/aecheverrir/parcial1WEB.git`

---

## Team

| <a href="https://github.com/aecheverrir" target="_blank">**Alejandro Echeverri**</a> | <a href="https://github.com/paalvarado10" target="_blank">**Pablo Alvarado**</a> |
| :---: |:---:|
| [![CarInfo](https://avatars3.githubusercontent.com/u/25350194?s=460&v=4)](https://github.com/aecheverrir)    | [![CarInfo](https://avatars0.githubusercontent.com/u/20799498?s=460&v=4)](https://github.com/paalvarado10) |

---

## Visit

Currently deployed with heroku: <a href="https://instafight1.herokuapp.com/" target="_blank">**InstaFight**</a>
 
---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2018 © 
