# Facebook-scraper-nodejs
This is a tool that can be used to scrape data from Facebook without the use of api

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0


# Getting started
- Clone the repository
```
git clone repo
```
- Install dependencies
```
cd <project_name>
npm install
create a credentials.txt file with the first line your email and second line your password
```
- Build and run the scraper
```
node creadteDb.js
```
- Build and run the sever
```
node index.js
```
  Navigate to `http://localhost:3001`

- API Document endpoints
```
 `http://localhost:3001/api/group/:id -------------------------------- GET-- Specfic group request`
```

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **src/index.js**         | Scraper starter for the given groups and pages 
| **src/core-scraper**     | Controllers define functions to serve various express routes. 
| **src/lib**              | Common libraries to be used across your app.  
| **src/middlewares**      | middlewares that inhance functionallity
| **src/routes**           | Contain all express routes, separated by module/area of application                       
| **src/models**           | Models define schemas that will be used in storing and retrieving data   |
| **src/db**               | Contains all the get query info from db |
| **src/index.js**         | Entry point to the express server |
| package.json             | Contains npm dependencies as well as [build scripts]



