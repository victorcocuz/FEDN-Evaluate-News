# FEDN-Evaluate-News-Articles

## Overview
This is the fourth project part of the Front End Developer nanodegree Udacity. The aims of this project are to practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## How to run the project
Fork and clone the repo. Then run:
`npm install` - installs the nodes
`npm run build-dev` - to start a development server
`npm run build-prod` - to start a production server
`npm run test` - to run the jest tests
`npm start` - to start the node server

The development server will automatically open on `localhost:8080`.
Once the node server is started, it will run on `localhost:8082`.

Paste a valid news article url in the input field to test the app. The Aylien API will be called in the background and text analysis will be returned and populated into the html file.

NOTE: You must register with Aylien and get a valid API_ID and API_KEY to use the app. These must be added to `server/index.js`.

## Requirements
CRITERIA
MEETS SPECIFICATIONS
Architecture

Project should have a structure like the one in the lessons. All files shown must be present and the app must successfully render a home page when started via an npm command like ‘npm run start’

Other requirements:

the Readme file should have non-default text in it that is specific to this project. Doesn’t have to be thorough but should have some basic info. Bonus if correct markdown is used

the git ignore file must contain both the node_modules and dist folders at minimum. Other files can be included.

Configs

Both webpack config files must be present and should be set up similar to the course for development and production.

A build script must run successfully with no errors and generate a dist folder. Bonus if they customized their npm build scripts.

Students should also have a working dev mode, check that webpack dev server is set up and that they have an npm script that starts the server

Content

Only one html file is required, but it must be at src/views/ or src/html. Must contain valid semantic html

There will be a minimum of 2 javascript files in the src/js folder. All files in the js folder must be found by webpack.

There must be a styles or scss folder. The project provides a base file, but the header, footer, form, and main files should be added to by the student, similar to the course.

Functionality

CRITERIA
MEETS SPECIFICATIONS
API

The app should make a successful call to the api on form submission. If this is successful, the api keys and response handling were done correctly. You can check that the api keys are found in server.js or a similar node file. It is not acceptable for an api key to be set in a client facing file (like index.js)

Information from the api response must show up in the view. It is not enough for the response to be logged to the console or saved in js, etc..

Offline Functionality

The project must have set up service workers in webpack.

Testing

Check that the project has Jest installed, that there is an npm script to run Jest, and that the tests all pass. Every src/js file should have at least one test.

Interactions

The page built can be very simple, but should include:

A single field form that uses the correct html tags and structure. There should be some attempt to validate the form input. Bonus points if you use regex to correctly check for a URL and give back helpful error messages.