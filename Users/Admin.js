const fileSystem = require("fs");
const User = require("./User");
const orderObject = require("../Orders/Order.js");
const InheritProperty = require("./interface");

function AdminUser(userName, email, password) {
  User.call(this, userName, email, password);
  var order = new orderObject();

  this.deleteUserById = function(userId) {
    var users = this.getListOfUsers();
    for (var i = 0; i < users.length; i++) {
      if (users[i].id == userId) {
        users.splice(i, 1);
        this.saveUsers(users);
        return this.getListOfUsers();
      }
    }

    return false;
  };

  this.deleteAllUsers = function() {
    var users = this.getListOfUsers();
    users.splice(0, users.length);
    this.saveUsers(users);
    return this.getListOfUsers();
  };

  this.getAllOrders = function() {
    return order.getAllOrders();
  };

  this.getOrderById = function(orderId) {
    return order.getOrderById(orderId);
  };

  this.updateOrder = function(orderId, items) {
    return order.updateOrder(orderId, items);
  };

  this.deleteOrderById = function(orderId) {
    return order.deleteOrderById(orderId);
  };
}

InheritProperty(AdminUser, User);

module.exports = AdminUser;
