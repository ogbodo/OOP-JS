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

test("User can search for a user by id", function() {
  expect(user.getUserById(admin.id).id).toBe(admin.id);
});

test("The case of none existing Id", function() {
  expect(user.getUserById(100).id).toBeUndefined();
});

test("User cannot read all users", function() {
  expect(user.getListOfUsers).toBeFalsy();
});

test("Admin can update the details of a user", function() {
  expect(
    admin.updateUserDetails(user.id, "Treasure", "tres@gmail.com", "tressy").id
  ).toBe(user.id);
});

test("User can update his/her details", function() {
  user = user.updateUserDetails(
    user.id,
    "Ogbonna Treasure",
    "tres@gmail.com",
    "tressy"
  );
  expect(user.id).toBe(user.id);
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

test("User cannot delete a user", function() {
  expect("deleteUserById" in user).toBeFalsy();
});

test("Admin can search for a user by name", function() {
  expect(admin.getUserByName(user.name)).toBeTruthy();
});

test("Should return false if no user by the name", function() {
  expect(admin.getUserByName("Noname")).toBeFalsy();
});

test("User can search for a user by name", function() {
  user = new normalUser("Seun", "seun@gmail.com", "Adesina");
  expect(user.getUserByName(user.name)).toBeTruthy();
});

test("Admin can delete all users", function() {
  expect(admin.deleteAllUsers().length).toBe(0);
});
test("User cannot delete all users", function() {
  expect("deleteAllUsers" in user).toBeFalsy();
});

test("In the case of Admin deleting when db is empty", function() {
  expect(admin.deleteUserById(user.id).length).toBeUndefined();
});
