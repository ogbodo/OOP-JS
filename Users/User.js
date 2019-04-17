const fileSystem = require("fs");
const orderObject = require("../Orders/Order.js");

function User(name, email, password, role) {
  this.role = role || "user";
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = 0;
  this.listOfUserOrders = [];

  this.saveUsers = function(listOfUsers) {
    fileSystem.writeFileSync(
      "../db.json",
      JSON.stringify(listOfUsers, null, 2),
      null
    );
  };

  this.createNewUser = function() {
    var listOfUsers = [];
    listOfUsers.push.apply(listOfUsers, getListOfUsers());

    this.id =
      listOfUsers.length > 0 ? listOfUsers[listOfUsers.length - 1].id + 1 : 1;

    var obj = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password
    };

    listOfUsers.push(obj);

    this.saveUsers(listOfUsers);
  };

  this.createNewUser();

  this.updateUserDetails = function(userId, name, email, password) {
    var users = getListOfUsers();
    var foundUser = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].id == userId) {
        users[i].name = name;
        users[i].email = email;
        users[i].password = password;
        foundUser = users[i];
        this.saveUsers(users);
        break;
      }
    }
    return foundUser;
  };

  this.getUserByName = function(name) {
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

  this.getUserById = function(userId) {
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

  this.addToCart = function(item) {
    this.listOfUserOrders.push(item);
  };

  this.checkOut = function() {
    return new orderObject(this.id, this.listOfUserOrders);
  };

  this.getAUserOders = function() {
    return this.getAUserOrders(this.id);
  };
}

function getListOfUsers() {
  return readJsonFile("../db.json");
}

function readJsonFile(filePath) {
  const jsonString = fileSystem.readFileSync(filePath);
  return JSON.parse(jsonString);
}

User.prototype = orderObject.prototype;

module.exports = User;
