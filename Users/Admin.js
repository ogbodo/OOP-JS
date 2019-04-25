const DB = require("../../database");
const orderObject = require("../Orders/Order.js");
const User = require("./User");
const InheritProperty = require("./interface");

function AdminUser(userName, email, password) {
  User.call(this, userName, email, password);
}

InheritProperty(AdminUser, User);

AdminUser.prototype.deleteUserById = function(userId) {
  var users = this.getListOfUsers();
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      users.splice(i, 1);
      users = this.getListOfUsers();
    }
  }

  return users;
};

AdminUser.prototype.deleteAllUsers = function() {
  var users = this.getListOfUsers();
  users.splice(0, users.length);
  return this.getListOfUsers();
};

AdminUser.prototype.getListOfUsers = function() {
  return DB["Users"];
};

AdminUser.prototype.getAllOrders = function() {
  return orderObject.prototype.getAllOrders();
};

AdminUser.prototype.getOrderById = function(userId) {
  return orderObject.prototype.getOrderById(userId);
};

AdminUser.prototype.updateOrder = function(orderId, items) {
  return orderObject.prototype.updateOrder(orderId, items);
};

AdminUser.prototype.deleteOrderById = function(orderId) {
  return orderObject.prototype.deleteOrderById(orderId);
};

AdminUser.prototype.deleteAllOrders = function() {
  return orderObject.prototype.deleteAllOrders();
};

module.exports = AdminUser;
