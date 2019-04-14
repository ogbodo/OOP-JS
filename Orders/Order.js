const fileSystem = require("fs");

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

  this.createNewOrder = function() {
    var listOfAllUsersOrder = [];
    listOfAllUsersOrder.push.apply(listOfAllUsersOrder, retrieveAllOrders());

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

    listOfAllUsersOrder.push(order);

    saveOrders(listOfAllUsersOrder);
  };

  this.createNewOrder();
  this.getAllOrders = function() {
    return retrieveAllOrders();
  };
  this.getOrderById = function(orderId) {
    return retrieveOrderById(orderId);
  };
  this.updateOrder = function(orderId, items) {
    return updateOrder(orderId, items);
  };
}
Order.prototype.getAUserOrders = function() {
  return retrieveAUserOrders(this.id);
};

function retrieveAllOrders() {
  return readJsonFile("../orders.json");
}

function retrieveAUserOrders(userId) {
  var orders = retrieveAllOrders();
  var foundUserOrders = [];
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].userId == userId) {
      foundUserOrders.push(orders[i]);
    }
  }
  return foundUserOrders;
}

// function retrieveAUserOrder(userId, orderId) {}

function retrieveOrderById(orderId) {
  var orders = retrieveAllOrders();
  var foundOrder = false;
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].id == orderId) {
      foundOrder = orders[i];
      break;
    }
  }
  return foundOrder;
}
function readJsonFile(filePath) {
  const jsonString = fileSystem.readFileSync(filePath);
  return JSON.parse(jsonString);
}

function updateOrder(orderId, items) {
  var orders = retrieveAllOrders();
  var foundOrder = false;
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].id == orderId) {
      orders[i].items = items;
      foundOrder = orders[i];
      saveOrders(orders);
      break;
    }
  }

  return foundOrder;
}
function saveOrders(orders) {
  fileSystem.writeFileSync(
    "../orders.json",
    JSON.stringify(orders, null, 2),
    null
  );
}
module.exports = Order;
