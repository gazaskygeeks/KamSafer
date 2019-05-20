# KamSafer

KamSafer is a web app that enables you to log your trip's information. The purpose, total kilometers travelled by your vehicle, and notes to include your destination.

# Breif summary of key requierments/features

- Create logs that enables you to log your trip's information using modern technologies:React.js.
- Allows the users used app to download his logs in excel version.

# Features

# Main functionality

- Can log in using the general user and password of the Mercy Corps organization
- Select the car I’ll be using
- Confirm your trips and keep track of my kilometers travelled
- Show the report of all logged trips
- View trips by date
- Download an excel version of my reports
- Leave the account

# Key Technologies

- React.js : https://reactjs.org/docs/getting-started.html
- Sequalize : http://docs.sequelizejs.com/
- Express JS : https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
- Material UI : https://material-ui.com/

# Architecture

# Code structure

- The client folder contains the front end code
- The src folder contains the backend and DB code
- The editor begins at client/components/login/index.js
- config.js contains the dummy data for the app
- The entry point is an app.js file which manages all components, get and send data to the src/app.js file which contains all app endpoints

# User Guide

## Development Setup

### tech

- node 8 & npm>5
- postgres

### Steps

1. run `git clone` of this repo and `cd` into the folder
1. Provision a postgres database (either locally or remotely)
1. In the root directory create a `.env` file
   1. Add the database url as an environment variable, `DB_URL`
   1. A jwt secret variable, named `SECRET`
   1. User log in variables, `DB_USERNAME` and `DB_HASHED`. To generate the hash run `node lib/hasher [plaintext password]` and copy the printed value.
1. commands (from root):
   - `npm i` install server dependencies
   - `npm start` run production server
   - `npm run dev` run dev server using nodemon
   - `cd client && npm i` install react app dependencies
   - `cd client && npm start` run dev-server react app
   - `cd client && npm build` build react app
1. The server will run on `PORT=4000` while the dev react app will run at `PORT=3000`
1. To initialise some cars in your database you need to run the `db_build.js` file in `src/database/config/`
   1. Edit the file to change the `carsArray` data if you want to.
   1. When you are happy with it, run the file using `node [path to file]` **NOTE** This will **wipe the database completely**. Do not attempt to run to edit anything in a production base. The file _should_ abort if `DB_HOST` is not `localhost` anyway but you should not even think about running this file if you have production database credentials in your `.env`.

# Demo

https://kamsafer.herokuapp.com/

# How to use KamSafer website

- you should have a general username and password related to Mercy Core employees to login
- select the car model you want to use
- click add trip button to add trip, then add information about your trip
- click show report button to see all trips related to this car model
- click on Download report to get a excel version
- click logout to leave account

# Team Member

- Sama Amro
- Shaima Ihdoosh
- Orjwan Rajaby
