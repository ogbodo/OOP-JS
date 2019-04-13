const fileSystem = require("fs");

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = 0;
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

    fileSystem.writeFileSync(
      "../db.json",
      JSON.stringify(listOfUsers, null, 2),
      null
    );
  };

  this.createNewUser();

  this.getListOfUsers = function() {
    return getListOfUsers();
  };
}

User.prototype.getUserById = function(userId) {
  var users = this.getListOfUsers();
  var foundUser = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      foundUser = users[i];
      break;
    }
  }
  return foundUser;
};
function getListOfUsers() {
  return readJsonFile("../db.json");
}
function readJsonFile(filePath) {
  const jsonString = fileSystem.readFileSync(filePath);
  return JSON.parse(jsonString);
}
User.prototype.getuserByName = function(userName) {};
User.prototype.updateUserDetails = function(name, email, password) {};
User.prototype.updateUserEmail = function(email) {};
User.prototype.updateUserPassword = function(password) {};

module.exports = User;
