// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var results = [];

  var search = function(node) {
  	if (typeof node.classList !== 'undefined') {
  		if (node.classList.contains(className)) {
  			results.push(node);
  		}
  	}

  	if (document.body.hasChildNodes()) {
  		for (var element in node.childNodes) {
  			search(node.childNodes[element]);
  		}
  	}
  };

  search(document.body);
  return results;

};


