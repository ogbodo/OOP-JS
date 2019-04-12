function InheritProperty(childObject, sourceObject) {
  var clonedObject = Object.create(sourceObject.prototype);
  clonedObject.constructor = childObject;
  childObject.prototype = clonedObject;
}

module.exports = InheritProperty;
