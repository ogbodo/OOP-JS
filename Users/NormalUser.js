const User = require("./User");
const InheritProperty = require("./interface");

function NormalUser(username, email, password) {
  User.call(this, username, email, password);
}

InheritProperty(NormalUser, User);

module.exports = NormalUser;
