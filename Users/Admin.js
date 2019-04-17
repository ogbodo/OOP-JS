const fileSystem = require("fs");
const User = require("./User");
const InheritProperty = require("./interface");

function AdminUser(userName, email, password) {
  User.call(this, userName, email, password, "admin");

  this.deleteUserById = function(userId) {
    var users = this.getListOfUsers();
    var foundUser = false;

    for (var i = 0; i < users.length; i++) {
      if (users[i].id == userId) {
        users.splice(i, 1);
        this.saveUsers(users);
        users = this.getListOfUsers();
        foundUser = true;
      }
    }

    return foundUser !== false ? users : foundUser;
  };

  this.deleteAllUsers = function() {
    var users = this.getListOfUsers();
    users.splice(0, users.length);
    this.saveUsers(users);
    return this.getListOfUsers();
  };
}

InheritProperty(AdminUser, User);

AdminUser.prototype.getListOfUsers = function() {
  return readJsonFile("../db.json");
};

function readJsonFile(filePath) {
  const jsonString = fileSystem.readFileSync(filePath);
  return JSON.parse(jsonString);
}

module.exports = AdminUser;
