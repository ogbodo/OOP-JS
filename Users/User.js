const fileSystem = require("fs");

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = 0;

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

  this.getListOfUsers = function() {
    return getListOfUsers();
  };

  this.updateUserDetails = function(userId, name, email, password) {
    var users = this.getListOfUsers();
    for (var i = 0; i < users.length; i++) {
      if (users[i].id == userId) {
        users[i].name = name;
        users[i].email = email;
        users[i].password = password;
        break;
      }
    }
    this.saveUsers(users);
    return this.getUserById(userId);
  };

  this.getUserByName = function(name) {
    var users = this.getListOfUsers();
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
}

function getListOfUsers() {
  return readJsonFile("../db.json");
}

function readJsonFile(filePath) {
  const jsonString = fileSystem.readFileSync(filePath);
  return JSON.parse(jsonString);
}

module.exports = User;
