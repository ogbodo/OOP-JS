const adminUser = require("../Users/Admin");
const normalUser = require("../Users/NormalUser");
const orderObject = require("../Orders/Order.js");

var admin, user;

test("An Admin can create new Order", function() {
  admin = new adminUser("Admin1", "solomon@gmail.com", "solomon");
  var previousOrderCount = admin.getAUserOders().length;

  admin.addToCart({ itemName: "milk", qty: 30 });
  admin.addToCart({ itemName: "Milo", qty: 40 });
  admin.addToCart({ itemName: "conflask", qty: 5 });
  admin.checkOut();

  expect(admin.getAUserOders().length).toBe(previousOrderCount + 1);
});
