var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.count = 0;

};

var stackMethods = new Stack();

  Stack.prototype.push = function (value) {
		this.count++;
	    stackMethods[this.count] = value;
	};

  Stack.prototype.pop = function () {
	  var temp = stackMethods[this.count];
	  delete stackMethods[this.count];
	  if (this.count > 0) {
	    this.count--; 

   	  }

   	  return temp;
	};

  Stack.prototype.size = function () {
    return this.count; 
	};

