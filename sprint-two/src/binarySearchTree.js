var BinarySearchTree = function(value) {
//debugger;
  var searchResults = Object.create(searchMethods);
  searchResults.value = value;
  searchResults.left = null;
  searchResults.right = null;
  searchResults.visited = false;
  return searchResults;
};

var searchMethods = {};

searchMethods.insert = function(val) {
 //when inserting a branch, we will check the starting node against val
 //if the starting number is larger than val and storage right is null
  
  if (this.value > val) {// O(n) Linear time
  	if(this.left === null){
  		this.left = BinarySearchTree(val);
  	} else {
  		this.left.insert(val);
  	} 
  } else if (this.value < val) {
  	if (this.right === null) {
  		this.right = BinarySearchTree(val);
  	} else {
  		this.right.insert(val);
  	}
  } else {

  }
 	//assign this number to storage right
 //else if number is smaller and storage.left is null we will send it left 
 	//assign val to left side of this
 //dont do anything this number already exists in the tree

};

searchMethods.contains = function(val){
	//of the this current node equals val then return true
	//else if val is < this.right we will use recursion to send it back through the function
	// same with left

	var result = false;
	var test = function(node) {
		if (node.value === val) {
			result = true;
			return result;
		} else if (node.value > val && node.left !== null) {
			return test(node.left);
		} else if (node.value < val && node.right !== null) {
			 return test(node.right);
		}
	}
	test(this);
	return result;

};

searchMethods.depthFirstLog = function(callBack){
	
	var depth = function(node){
		if (node.visited === false) {
			node.visited = true;
			callBack(node.value);
		}

		if (node.left !== null) {
			depth(node.left);
		} else if (node.right !== null) {
			depth(node.right);
		}
	
	}
	
	depth(this);

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
