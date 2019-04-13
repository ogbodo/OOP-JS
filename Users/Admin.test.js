const adminUser = require("./Admin");
const normalUser = require("./NormalUser");

var admin, user;

test("create new admin user", function() {
  admin = new adminUser("Admin1", "solomon@gmail.com", "solomon");
  expect(admin.name).toBe("Admin1");
});
test("Admin can read all users", function() {
  expect(admin.getListOfUsers()).toBeTruthy();
});

test("Persist user profile detail into db.json file", function() {
  var oldLength = admin.getListOfUsers().length;
  var newAdmin = new adminUser("Admin2", "solomon@gmail.com", "king");
  expect(newAdmin.getListOfUsers().length).toBe(oldLength + 1);
});

test("Admin can create normal user", function() {
  user = new normalUser("User1", "solomon@gmail.com", "solomon1");
  expect(user.name).toBe("User1");
});
test("Admin can search for a user by id", function() {
  expect(admin.getUserById(user.id).id).toBe(user.id);
});

test("User can search for a user by id", function() {
  expect(user.getUserById(admin.id).id).toBe(admin.id);
});
