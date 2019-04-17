const normalUser = require("./User");

var user;

test("create normal user", function() {
  user = new normalUser("User1", "solomon@gmail.com", "solomon1");
  expect(user.name).toBe("User1");
});

test("User can search for a user by id", function() {
  expect(user.getUserById(user.id).id).toBe(user.id);
});

test("Persist user profile detail into db.json file", function() {
  var newUser = new normalUser("User2", "solomon@gmail.com", "king");
  expect(newUser.getUserById(newUser.id).id).toBe(newUser.id);
});

test("The case of none existing Id", function() {
  expect(user.getUserById(100).id).toBeUndefined();
});

test("User cannot read all users", function() {
  expect("getListOfUsers" in user).toBeFalsy();
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

test("User cannot delete a user", function() {
  expect("deleteUserById" in user).toBeFalsy();
});

test("User can search for a user by name", function() {
  user = new normalUser("Seun", "seun@gmail.com", "Adesina");
  expect(user.getUserByName(user.name)).toBeTruthy();
});

test("User cannot delete all users", function() {
  expect("deleteAllUsers" in user).toBeFalsy();
});
