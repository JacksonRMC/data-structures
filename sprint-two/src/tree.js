var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {
  this.value = value;
	this.children.push(treeNode(value));
};

treeMethods.contains = function(target) {
var result = false;
var find = function(nodeForSearch){
if (nodeForSearch.value === target) {
  	result = true;
 	} 
if (result === false && nodeForSearch.children.length > 0) {
	nodeForSearch.children.forEach(function(child){
		find(child);
	  })
	}

	return;
}
	find(this);
	return result;
};


var treeNode = function(value) {
  var newNode = {};
  newNode.value = value;
  newNode.children = [];
  _.extend(newNode, treeMethods);
  return newNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
