const adminUser = require("../Users/Admin");
const normalUser = require("../Users/User");
var admin, user, order;

test("An Admin can create new Order", function() {
  admin = new adminUser("King Solomon", "solomon@gmail.com", "solomon");
  var previousOrderCount = admin.getAUserOders().length;

  admin.addToCart({ itemName: "milk", qty: 30 });
  expect(admin.listOfUserOrders).toEqual([{ itemName: "milk", qty: 30 }]);
  admin.addToCart({ itemName: "Milo", qty: 40 });
  admin.addToCart({ itemName: "conflask", qty: 5 });

  admin.checkOut();
  expect(admin.getAUserOders().length).toBe(previousOrderCount + 1);
});

test("A Normal User can create new Order", function() {
  user = new normalUser("Treasure Izu", "solomon@gmail.com", "solomon");
  // var previousOrderCount = user.getAUserOders().length;
  user.addToCart({ itemName: "egg", qty: 500 });
  user.addToCart({ itemName: "malt", qty: 44 });
  user.addToCart({ itemName: "Indomi", qty: 50 });
  user.addToCart({ itemName: "Spagetti", qty: 102 });
  var order = user.checkOut();
  expect(order).toBe(order);
});

test("Admin can read all orders", function() {
  expect(admin.getAllOrders()).toBeTruthy();
});
test("User cannot read all orders", function() {
  expect(user.getAllOrders()).toBeFalsy();
});

test("Admin can read one order by its id", function() {
  admin.addToCart({ itemName: "Bournvita", qty: 21 });
  admin.addToCart({ itemName: "Malt", qty: 99 });
  admin.addToCart({ itemName: "Butter", qty: 75 });
  order = admin.checkOut();
  expect(admin.getOrderById(order.id)).toBeTruthy();
});
test("User cannot read one order by its id", function() {
  user.addToCart({ itemName: "Bournvita", qty: 21 });
  user.addToCart({ itemName: "Malt", qty: 99 });
  user.addToCart({ itemName: "Butter", qty: 75 });
  order = user.checkOut();
  expect(user.getOrderById(order.id)).toBeFalsy();
});

test("The case of none existing order Id", function() {
  expect(admin.getOrderById(100)).toBeFalsy();
});

test("Admin can update order details", function() {
  var itemUpdate = [
    { itemName: "Bournvita", qty: 12 },
    { itemName: "Butter", qty: 75 }
  ];
  expect(admin.updateOrder(order.id, itemUpdate)).toBeTruthy();
});
test("User cannot update order details", function() {
  var itemUpdate = [
    { itemName: "Bournvita", qty: 12 },
    { itemName: "Butter", qty: 75 }
  ];
  expect(user.updateOrder(order.id, itemUpdate)).toBeFalsy();
});

test("Admin can delete an order", function() {
  var oldLength = admin.getAllOrders().length;
  admin.addToCart({ itemName: "Yoghurt", qty: 65 });
  admin.addToCart({ itemName: "Soya Milk", qty: 99 });
  var orderToDelete = admin.checkOut();
  expect(admin.deleteOrderById(orderToDelete.id).length).toBe(oldLength);
});

test("User cannot delete an order", function() {
  user.addToCart({ itemName: "Yoghurt", qty: 65 });
  user.addToCart({ itemName: "Soya Milk", qty: 99 });
  var orderToDelete = user.checkOut();
  expect(user.deleteOrderById(orderToDelete.id)).toBeFalsy();
});

test("Admin want to delete a none existing order", function() {
  expect(admin.deleteOrderById(100)).toBeFalsy();
});

test("Admin can delete all orders", function() {
  expect(admin.deleteAllOrders().length).toBe(0);
});
test("User cannot delete all orders", function() {
  expect(user.deleteAllOrders()).toBeFalsy();
});
