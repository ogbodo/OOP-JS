const normalUser = require("./NormalUser");
const adminUser = require("./Admin");

test("create new admin user", function() {
  var user = new adminUser("Ogbodo", "solomon@gmail.com", "solomon");
  expect(user.name).toMatch("Ogbodo");
});
test("Persist user profile detail", function() {
  var user = new adminUser("Ogbodo", "solomon@gmail.com", "solomon");
  expect(user.name).toMatch("Ogbodo");
});

// test("Admin read a single user by id", function() {
//     var user = new adminUser("Ogbodo", "solomon@gmail.com", "solomon");
//     expect(user.name).toMatch("Ogbodo");
//   });
