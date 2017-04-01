var HashTable = function() {
  this.limit = 8;
  this.hTable = new LimitedArray(this.limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this.limit); 
  var bucket = this.hTable.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var oldValue = tuple[1];
      tuple[1] = v;
      return oldValue;
    }
  }

  bucket.push([k, v]); 
  this.hTable.set(index, bucket);
  return undefined;

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit); 
  var bucket = this.hTable.get(index) || [];
  
  if(bucket.length === 0){
  	return undefined;
  } else {
	  for (var i = 0; i < bucket.length; i++) {
  	var tuple = bucket[i];
			if (tuple[0] === k) {
	    	return tuple[1];
	    }
	  }
	}
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  var bucket = this.hTable.get(index) || [];

  for(var i = 0 ; i < bucket.length; i++){
	  if(bucket[i][0] === k) {
	    bucket.splice(i, 1); 
	  }
	}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// MAKE THE TUPLE
// PUSH ONTO BUCKET: OBJECT{ FIRSTNAME: k}