var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.count = 0;
//  storage.oldest = 0;


  //_.extend(storage, stackMethods);
  return storage;

};

var stackMethods = {};

	stackMethods.push = function (value) {
		this.count++;
	    stackMethods[this.count] = value;
	};

	stackMethods.pop = function () {
	  var temp = stackMethods[this.count];
	  delete stackMethods[this.count];
	  if (this.count > 0) {
	    this.count--; 

   	  }
//   	  this.oldest++;
   	  return temp;
	};

	stackMethods.size = function () {
		return this.count; 
	};


