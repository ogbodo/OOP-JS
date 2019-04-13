const adminUser = require("./Admin");
var admin;
test("create new admin user", function() {
  admin = new adminUser("Ogbodo", "solomon@gmail.com", "solomon");
  expect(admin.name).toMatch("Ogbodo");
});
test("Persist user profile detail into db.json file", function() {
  var oldLength = admin.getListOfUsers().length;
  var newAdmin = new adminUser("Ogbodo", "solomon@gmail.com", "solomon");

  expect(newAdmin.getListOfUsers().length).toBe(oldLength + 1);
});

// test("Admin read a single user by id", function() {
//     var user = new adminUser("Ogbodo", "solomon@gmail.com", "solomon");
//     expect(user.name).toMatch("Ogbodo");
//   });
