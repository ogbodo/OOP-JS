# Objetc Oriented Programming (OOP) In Javascript
## This projetc creates a simple user object that can perform the following operations:

- Create a new user<br>
- Read a single user by his ID<br>
- Read all users (*)<br>
- Update the details of a user<br>
- Delete a user (*)<br>
- Delete all users (*)<br>
- Search for a user by his name and return false if the user is not found but returns the user object if the user is found.

## Then simulates a simple e-commerce platform where a user can make an order, and then have an order object that has the methods to carry out the following operations:

- Create a new order<br>
- Read all the orders(*)<br>
- Read one order by its ID(*)<br>
- Update order details(*)<br>
- Delete one order(*)<br>
- Delete all orders(*)<br>


## User object contains the following properties<br>
- Name<br>
- Email<br>
- Password<br>
- Id (Auto increment)<br>

## Order object contains the following properties<br>
- user_id<br>
- timeOfOrder<br>
- dateOfOrder<br>
- Id (Auto increment)<br>
- Products in the order<br>

 ### *NOTE: All methods marked asterisk(\*) can be carried out by an ADMIN user alone, and Jest was used for testing.*<br>

### To setup and run the project
```
Clone the Project
Install the jest framework for testing
npm init
npm install --save-dev jest

// change the value of test in scripts to jest in your package.json

{
  "scripts": {
    "test": "jest"
  }
}
To run all test cases: npm test
