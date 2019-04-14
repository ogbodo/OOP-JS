const adminUser = require("../Users/Admin");
const normalUser = require("../Users/NormalUser");

var admin, user;

test("An Admin can create new Order", function() {
  admin = new adminUser("King Solomon", "solomon@gmail.com", "solomon");
  var previousOrderCount = admin.getAUserOders().length;
  admin.addToCart({ itemName: "milk", qty: 30 });
  admin.addToCart({ itemName: "Milo", qty: 40 });
  admin.addToCart({ itemName: "conflask", qty: 5 });
  admin.checkOut();
  expect(admin.getAUserOders().length).toBe(previousOrderCount + 1);
});

test("A Normal User can create new Order", function() {
  user = new normalUser("Treasure Izu", "solomon@gmail.com", "solomon");
  var previousOrderCount = user.getAUserOders().length;
  user.addToCart({ itemName: "egg", qty: 500 });
  user.addToCart({ itemName: "malt", qty: 44 });
  user.addToCart({ itemName: "Indomi", qty: 50 });
  user.addToCart({ itemName: "Spagetti", qty: 102 });
  user.checkOut();
  expect(user.getAUserOders().length).toBe(previousOrderCount + 1);
});

test("Admin can read all orders", function() {
  expect(admin.getAllOrders()).toBeTruthy();
});
test("Admin can read one order by its id", function() {
  admin.addToCart({ itemName: "Bournvita", qty: 21 });
  admin.addToCart({ itemName: "Malt", qty: 99 });
  admin.addToCart({ itemName: "Butter", qty: 75 });
  var orderId = admin.checkOut().id;
  expect(admin.getOrderById(orderId)).toBeTruthy();
});
