const DB = require("../../database");

function Order(userId, items) {
  this.id = 0;
  this.items = items;
  this.userId = userId;
  var dateOfOrder = new Date();

  this.getDateOfOrder = function() {
    return dateOfOrder.toLocaleDateString();
  };

  this.getTimeOfOrder = function() {
    return dateOfOrder.toLocaleTimeString();
  };
  this.createNewOrder();
}

Order.prototype.createNewOrder = function() {
  var listOfAllUsersOrder = retrieveAllOrders();
  this.id =
    listOfAllUsersOrder.length > 0
      ? listOfAllUsersOrder[listOfAllUsersOrder.length - 1].id + 1
      : 1;
  var order = {
    id: this.id,
    items: this.items,
    orderTime: this.getTimeOfOrder(),
    orderDate: this.getDateOfOrder(),
    userId: this.userId
  };
  saveOrders(order);
};

Order.prototype.getUserOrders = function(userId) {
  var orders = retrieveAllOrders();
  var foundUserOrders = [];
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].userId === userId) {
      foundUserOrders.push(orders[i]);
    }
  }
  return foundUserOrders;
};

Order.prototype.getAllOrders = function() {
  return retrieveAllOrders();
};

Order.prototype.getOrderById = function(orderId) {
  var orders = retrieveAllOrders();
  var foundOrder = false;
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].id == orderId) {
      foundOrder = orders[i];
      break;
    }
  }
  return foundOrder;
};

Order.prototype.updateOrder = function(orderId, items) {
  var orders = retrieveAllOrders();
  var foundOrder = false;
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].id == orderId) {
      orders[i].items = items;
      foundOrder = orders[i];
      //saveOrders(orders);
      break;
    }
  }
  return foundOrder;
};

Order.prototype.deleteOrderById = function(orderId) {
  var orders = retrieveAllOrders();
  var foundOrder = false;
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].id == orderId) {
      orders.splice(i, 1);
      orders = retrieveAllOrders();
      foundOrder = true;
    }
  }
  return foundOrder !== false ? orders : foundOrder;
};

Order.prototype.deleteAllOrders = function() {
  var orders = retrieveAllOrders();
  orders.splice(0, orders.length);
  return retrieveAllOrders();
};

function retrieveAllOrders() {
  return DB["Order"];
}

function saveOrders(orderObject) {
  DB["Order"].push(orderObject);
}

module.exports = Order;
