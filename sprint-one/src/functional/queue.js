var Queue = function() {
  console.log('TOP OF FUNCTION');
  var someInstance = {};
  var oldest = 0;
  var current = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[current] = value;
    current++;
  };

  someInstance.dequeue = function() {
    var temp = storage[oldest];
    delete (storage[oldest]); // NEED TO SAVE THIS FIRST
    oldest++;  
    
    return temp;

  };

  someInstance.size = function() {
    if(oldest > current){
      return 0;
    }
    return current - oldest;

  };

  return someInstance;
};
