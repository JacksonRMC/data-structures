var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

   var stack = {};
  // stack.a = 0;
  // stack.b = 1;

  	stack.count = 0;


    _.extend(stack, funcMethods);

    return stack;
	
};

	var funcMethods = {};


	funcMethods.push = function(value) {
	  this.count++;
	  funcMethods[this.count] = value;
	}

	funcMethods.pop = function() {
		var temp = funcMethods[this.count];
		 	delete funcMethods[this.count];
			if (this.count > 0) {
		    this.count--; 
	   	}
	   	return temp;
	}

	funcMethods.size = function() {
	  return this.count;
	}
//var stack = {};


