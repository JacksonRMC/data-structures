var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(list.head === null){
      list.head = Node(value);
    } 
    list.head.next = Node(value);
    list.tail = Node(value);
  };

  list.removeHead = function() {
    var firstNode = list.head;
    if (firstNode.next === null) {
      list.head = list.tail;
    } else {
       list.head = firstNode.next;
    }
       return firstNode.value;
  };

  list.contains = function(target) {
    var nodeSearch = function(nodeForSearch){
      if(nodeForSearch.next === null){ 
        return false;
      }

      if(nodeForSearch.value === target){  
        return true;
      } else if(nodeForSearch.next.value === target){
        return true;     
      } else {
        return false;
      }

    }
    
    
     return nodeSearch(list.head); 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
