# colleges_sample_api

Built with

    node v8.12.0
    npm v6.4.1
    
Project reads in data from the file system instead of utilizing a database such as MongoDB. 
This decision was made to limit the points of failure related to running the example. Database
functionality will be added if time allows.

## Initialization

   - Install the project packages
      - ``` npm install ```
   - Install MongoDB 
      - https://docs.mongodb.com/manual/installation/
      - https://treehouse.github.io/installation-guides/mac/mongo-mac.html
   - Run the Mongo server
      -  ```mongod```
   - Seed / Bootstrap the Database 
      - ```npm run seed:colleges```
      
    ** NOTE **
    Seeding the database will create a Mongo database called sample-api, and create a collection
    called `colleges`. 
    
    Each time this command is run the database and collection are dropped and rebuilt.

## Running the server

    npm start
    
## Enhancements

 - [X] Refactor routes from index.js to routes directory using Express Router
 - [ ] Postman Test suite
 - [X] Error handling middleware
 - [ ] Stub out CRUD operations on colleges route
 - [X] Convert routes ~~Async / Await~~ Promise Router
 - [X] Bootstrap data into a MongoDB instance
 - [X] Fetch data from MongoDB rather than the file system
  

