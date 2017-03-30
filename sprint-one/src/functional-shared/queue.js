var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
	count = 0;
	oldest = 0;
  _.extend(stack, queueMethods);
  
  return stack;
};



 var queueMethods = {};

	
	queueMethods.enqueue = function(value){
		queueMethods[count] = value;
		count++;
		
	}

	queueMethods.dequeue = function() {
		var temp =	queueMethods[oldest];
		delete	queueMethods[oldest];
		oldest++;
		return temp;
	}

	queueMethods.size = function () {
	if(oldest > count){
      return 0;
    }
		return count - oldest;
	}
 
