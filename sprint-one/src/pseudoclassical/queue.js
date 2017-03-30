var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.oldest = 0;
};

var queueMethods = new Queue();

Queue.prototype.enqueue = function (value) {
	queueMethods[this.count] = value;
	this.count++;
}

Queue.prototype.dequeue = function() {
	var temp = queueMethods[this.oldest];
	delete queueMethods[this.oldest];
	this.oldest++;
	return temp;
}

Queue.prototype.size = function() {
	if (this.count < this.oldest) {
		return 0;
	}
	return this.count - this.oldest;
}
