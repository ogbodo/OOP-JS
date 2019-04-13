const fileSystem = require("fs");

// const db = require("../db.json");

const User = require("./User");

const InheritProperty = require("./interface");

function AdminUser(userName, email, password) {
  User.call(this, userName, email, password);

  this.getListOfUsers = function() {
    return readJsonFile("../db.json");
  };

  this.createNewUser = function() {
    var listOfUsers = [];
    listOfUsers.push.apply(listOfUsers, this.getListOfUsers());

    this.id =
      listOfUsers.length > 0
        ? listOfUsers[listOfUsers.length - 1].id + 1
        : this.id;

    var obj = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password
    };

    listOfUsers.push(obj);

    fileSystem.writeFileSync(
      "../db.json",
      JSON.stringify(listOfUsers, null, 2),
      null
    );
  };

  this.createNewUser();
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
