// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  if (typeof obj === 'number') {
  	return '' + obj;
  }
  if (typeof obj === 'boolean') {
  	return '' + obj;
  }
  if (typeof obj === 'undefined') {
  	return null;
  }
  if (typeof obj === 'function') {
  	return null;
  }
  if (obj === null) {
  	return 'null';
  }

  if (Array.isArray(obj)) {
  	var stringifyArray = [];
  	for (var i = 0; i < obj.length; i++) {
  		stringifyArray.push(stringifyJSON(obj[i]));
  	}
  	return '[' + stringifyArray.join(',') + ']';
  }

  if (typeof obj === 'object') {
    var stringObj = [];
    for (var key in obj) {
    	var value = stringifyJSON(obj[key]);
    	if (value !== null)
      stringObj.push(stringifyJSON(key) + ':' + value);
    }
    return '{' + stringObj.join(',') + '}';
  }

};
