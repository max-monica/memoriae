# Changelog

## Client

- stub file structure
- add initial dependencies
  - lite-server
  - concurrently
  - watchify
- add favicon
- render new post form at `/`
- render post at `/#id`
- impliment new post sumbission with form
- fix field casing in createFormHTML helpers function
- add frontend styling
- add 404 page for unfound posts

## Server

- stub file structure
- add initial dependencies
  - express
  - morgan
  - cors
  - nodemon
  - uuid
  - pg
- create basic express server
- added init.js into dbconfig
- create db example case
- added the db seed part to package.json
- Model created
- app router function created
- fix post constructor and create sql query
- add id validtation to `GET /posts/:id`
- add default author of "Anonymous" to post model create method

## Database

- Stub setup file
- Filled setup file

## Misc

- Add Readme Sections and content where possible
- Populate docker-compose file
- Docker composer now execute 'npm run seedDev'
- Docker compose now includes the client
- Added the Start/Teardown scripts and include them in the readme
- Added Stop script and his part on the readme

## Stretch Goals

- Deploy to Heroku
- Testing
- Edit posts
- Delete posts
- User friendly route names on client
