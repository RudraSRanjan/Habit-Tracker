# Habit-Tracker
## Description 
  A habit tracker project is a web application that allows users to sign in and sign out. It allows users to perform CRD operations (Create, Read, Delete) on their habits, such as adding new habits, viewing their existing habits, and deleting habits. The project is built using a tech stack consisting of Node.js for the server-side scripting, Express for handling HTTP requests and routing, MongoDB for storing and managing the data, and EJS for rendering the views and templates.
  
## Tech stack
  Node , Express, Mongodb , EJS , javaScript , html, css
  
## How to setup the project on local system
  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory by : Using
  ```
  cd Habit-tracker
  
  ```
  
  After reaching to the this preoject directory yo have to run this following command :
  ```
  $ npm install
  $ nodemon server.js or npm start
  ```

 
  ## Features
- **Add Habit**: User can create a habit by providing the name and description.
- **Delete Habit**: User can delete habit with the help of habitID 
- **week View**: User can monitor the habit they added for a week
- **Update Status**: User can update the status to done,not-done,unmarked of habit on daily basis

 

  ## Folder Structure
```bash

Habit Tracker
    |
    |               
    |--->config---->|--->mongoose.js
    |               
    |
    |                 
    |--->controllers-->|-->details.controller.js
    |                  
    |
    |               
    |--->models---->|-->details.repository.js
    |               
    |
    |              
    |              
    |--->routes---->|-->details.routes.js
    |               
    |
    |              
    |--->schema---->|--->habit.schema.js
    |             
    |
    |
    |              |--->home.ejs
    |--->views---->|--->layout.ejs
    |              |--->weekview.ejs              
    |
    |-->.gitignore
    |-->package.json
    |
```  
