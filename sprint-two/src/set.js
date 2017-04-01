var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  _.extend(storage, setPrototype);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this.count++;
	stackMethods[this.count] = value;
};

setPrototype.contains = function(item) {

};

setPrototype.remove = function(item) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
