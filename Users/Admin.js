const fileSystem = require("fs");
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

module.exports = AdminUser;
