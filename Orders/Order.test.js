const adminUser = require("../Users/Admin");
const normalUser = require("../Users/NormalUser");
const orderObject = require("../Orders/Order.js");

var admin, user;

test("An Admin can create new Order", function() {
  admin = new adminUser("King Solomon", "solomon@gmail.com", "solomon");
  var previousOrderCount = admin.getAUserOders().length;

  admin.addToCart({ itemName: "milk", qty: 30 });
  admin.addToCart({ itemName: "Milo", qty: 40 });
  admin.addToCart({ itemName: "conflask", qty: 5 });
  admin.checkOut();
  var count = admin.getAUserOders().length;
  console.log("Admin: ", count);
  expect(count).toBe(previousOrderCount + 1);
});
test("A Normal User can create new Order", function() {
  user = new normalUser("Treasure Izu", "solomon@gmail.com", "solomon");
  var previousOrderCount = user.getAUserOders().length;

  user.addToCart({ itemName: "egg", qty: 500 });
  user.addToCart({ itemName: "malt", qty: 44 });
  user.addToCart({ itemName: "Indomi", qty: 50 });
  user.addToCart({ itemName: "Spagetti", qty: 102 });
  user.checkOut();
  var count = user.getAUserOders().length;
  console.log("User: ", count);

  expect(count).toBe(previousOrderCount + 1);
});
