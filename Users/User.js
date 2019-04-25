const DB = require("../../database");
const orderObject = require("../Orders/Order.js");

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = 0;
  this.listOfUserOrders = [];
  this.createNewUser();
}

User.prototype.saveUsers = function(userObject) {
  DB["Users"].push(userObject);
};

User.prototype.createNewUser = function() {
  var listOfUsers = getListOfUsers();

  this.id =
    listOfUsers.length > 0 ? listOfUsers[listOfUsers.length - 1].id + 1 : 1;

  var obj = {
    id: this.id,
    name: this.name,
    email: this.email,
    password: this.password
  };

  this.saveUsers(obj);
  console.log("list: ", getListOfUsers());
};

User.prototype.updateUserDetails = function(userId, name, email, password) {
  var users = getListOfUsers();
  var foundUser = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      users[i].name = name;
      users[i].email = email;
      users[i].password = password;
      foundUser = users[i];
      break;
    }
  }
  return foundUser;
};

User.prototype.getUserByName = function(name) {
  var users = getListOfUsers();
  var foundUser = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].name == name) {
      foundUser = users[i];
      break;
    }
  }
  return foundUser;
};

User.prototype.getUserById = function(userId) {
  var users = getListOfUsers();
  var foundUser = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      foundUser = users[i];
      break;
    }
  }
  return foundUser;
};

User.prototype.addToCart = function(item) {
  this.listOfUserOrders.push(item);
};

User.prototype.checkOut = function() {
  return new orderObject(this.id, this.listOfUserOrders);
};

User.prototype.getAUserOders = function() {
  return orderObject.prototype.getUserOrders(this.id);
};

function getListOfUsers() {
  return DB["Users"];
}

module.exports = User;
