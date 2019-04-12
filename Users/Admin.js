var users = require("../db.json");

const User = require("./User");

const InheritProperty = require("./interface");

function AdminUser(userName, email, password) {
  User.call(this, userName, email, password);
  this.listOfUser = [];

  console.log("Created an admin: " + this.name);
}

InheritProperty(AdminUser, User);

AdminUser.prototype.getAllUsers = function() {};
AdminUser.prototype.deleteAllUsers = function() {};
AdminUser.prototype.deleteUserById = function(userId) {};
AdminUser.prototype.createNewUser = function(userName, email, password) {};
AdminUser.prototype.updateUserName = function(name) {};
AdminUser.prototype.getListOfUsers = function() {
  return this.listOfUser;
};

module.exports = AdminUser;
