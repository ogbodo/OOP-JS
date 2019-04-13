const fileSystem = require("fs");
const User = require("./User");

const InheritProperty = require("./interface");

function AdminUser(userName, email, password) {
  User.call(this, userName, email, password);

  this.deleteUserById = function(userId) {
    var users = this.getListOfUsers();
    for (var i = 0; i < users.length; i++) {
      if (users[i].id == userId) {
        users.splice(i, 1);
        break;
      }
    }
    this.saveUsers(users);
    return this.getListOfUsers();
  };
}

InheritProperty(AdminUser, User);

AdminUser.prototype.deleteAllUsers = function() {};

module.exports = AdminUser;
