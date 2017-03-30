
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(queueMethods);
  // var storage = Object.create(stackMethods);
	stack.count = 0;
	stack.oldest = 0;
  
  
  return stack;
};



 var queueMethods = {};

	
	queueMethods.enqueue = function(value){
		queueMethods[this.count] = value;
		this.count++;
		
	}

	queueMethods.dequeue = function() {
		var temp =	queueMethods[this.oldest];
		delete	queueMethods[this.oldest];
		this.oldest++;
		return temp;
	}

	queueMethods.size = function () {
	if(this.oldest > this.count){
      return 0;
    }
		return this.count - this.oldest;
	}




