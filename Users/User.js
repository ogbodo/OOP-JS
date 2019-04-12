var users = require("../db.json");

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = 0;
}
User.prototype.getUserById = function(userId) {};

User.prototype.getuserByName = function(userName) {};
User.prototype.updateUserDetails = function(name, email, password) {};
User.prototype.updateUserEmail = function(email) {};
User.prototype.updateUserPassword = function(password) {};
// User.prototype.getUserObject = function() {
//   return this;
// };

module.exports = User;
