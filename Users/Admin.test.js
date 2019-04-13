const adminUser = require("./Admin");
const normalUser = require("./NormalUser");

var admin;

test("create new admin user", function() {
  admin = new adminUser("Ogbodo", "solomon@gmail.com", "solomon");
  expect(admin.name).toBe("Ogbodo");
});
test("Admin can read all users", function() {
  expect(admin.getListOfUsers()).toBeTruthy();
});

test("Persist user profile detail into db.json file", function() {
  var oldLength = admin.getListOfUsers().length;
  var newAdmin = new adminUser("Solomon", "solomon@gmail.com", "king");
  expect(newAdmin.getListOfUsers().length).toBe(oldLength + 1);
});

test("Admin can create normal user", function() {
  var user = new normalUser("Ogbodo1", "solomon@gmail.com", "solomon1");
  expect(user.name).toBe("Ogbodo1");
});
