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

/**TODO 1*/
// test("User cannot read all users", function() {
//   expect(user.getListOfUsers()).toBe("Truthy()");
// });
test("Admin can update the details of a user", function() {
  expect(
    admin.updateUserDetails(user.id, "Treasure", "tres@gmail.com", "tressy").id
  ).toBe(user.id);
});

test("User can update his/her details", function() {
  expect(
    user.updateUserDetails(
      user.id,
      "Ogbonna Treasure",
      "tres@gmail.com",
      "tressy"
    ).id
  ).toBe(user.id);
});

test("Admin can delete a user", function() {
  var oldLength = admin.getListOfUsers().length;
  var userToDelete = new normalUser(
    "nameToDelete",
    "solomon@gmail.com",
    "king"
  );
  expect(admin.deleteUserById(userToDelete.id).length).toBe(oldLength);
});
