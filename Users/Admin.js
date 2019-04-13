const fileSystem = require("fs");

// const db = require("../db.json");

const User = require("./User");

const InheritProperty = require("./interface");

function AdminUser(userName, email, password) {
  User.call(this, userName, email, password);
}

InheritProperty(AdminUser, User);

AdminUser.prototype.getAllUsers = function() {};
AdminUser.prototype.deleteAllUsers = function() {};
AdminUser.prototype.deleteUserById = function(userId) {};
AdminUser.prototype.updateUserName = function(name) {};

function readJsonFile(filePath) {
  const jsonString = fileSystem.readFileSync(filePath);
  return JSON.parse(jsonString);
}

function getlastUser(json) {}
function getUserId(obj) {}

module.exports = AdminUser;
