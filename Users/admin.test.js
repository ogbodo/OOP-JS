const adminUser = require("./Admin");
const normalUser = require("./User");

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

test("create normal user", function() {
  user = new normalUser("User1", "solomon@gmail.com", "solomon1");
  expect(user.name).toBe("User1");
});

test("Admin can search for a user by id", function() {
  expect(admin.getUserById(user.id).id).toBe(user.id);
});

test("The case of none existing Id", function() {
  expect(user.getUserById(201).id).toBeUndefined();
});

test("Admin can update the details of a user", function() {
  user = admin.updateUserDetails(
    user.id,
    "Treasure",
    "tres@gmail.com",
    "tressy"
  );
  expect(user.name).toBe("Treasure");
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

test("Admin can search for a user by name", function() {
  expect(admin.getUserByName(user.name).name).toBe("Treasure");
});

test("Should return false if no user by the name", function() {
  expect(admin.getUserByName("Noname")).toBeFalsy();
});

test("Admin can delete all users", function() {
  expect(admin.deleteAllUsers().length).toBe(0);
});

test("In the case of Admin deleting when db is empty", function() {
  expect(admin.deleteUserById(user.id).length).toBeUndefined();
});
