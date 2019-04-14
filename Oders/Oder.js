function Order(userId, items) {
  this.id = 0;
  this.items = items;
  this.userId = userId;

  var dateOfOrder = new Date();

  this.getDateOfOrder = function() {
    return dateOfOrder.toLocaleDateString();
  };
  this.getTimeOfOrder = function() {
    return dateOfOrder.toLocaleTimeString();
  };
}
