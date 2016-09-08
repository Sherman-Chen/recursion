// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// var stringifyJSON = function(obj) {
//   // your code goes here
  
//   if (typeof obj === 'string') {
//   	return '"' + obj + '"';
//   }
//   if (typeof obj === 'number') {
//   	return '' + obj;
//   }
//   if (typeof obj === 'boolean') {
//   	return '' + obj;
//   }
//   if (typeof obj === 'undefined') {
//   	return null;
//   }
//   if (typeof obj === 'function') {
//   	return null;
//   }
//   if (obj === null) {
//   	return 'null';
//   }

//   if (Array.isArray(obj)) {
//   	var stringifyArray = [];
//   	for (var i = 0; i < obj.length; i++) {
//   		stringifyArray.push(stringifyJSON(obj[i]));
//   	}
//   	return '[' + stringifyArray.join(',') + ']';
//   }

//   if (typeof obj === 'object') {
//     var stringObj = [];
//     for (var key in obj) {
//     	var value = stringifyJSON(obj[key]);
//     	if (value !== null)
//       stringObj.push(stringifyJSON(key) + ':' + value);
//     }
//     return '{' + stringObj.join(',') + '}';
//   }

// };

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    var results = [];
    for (var i =0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    return '['+results.join(',')+']';
  }
  if (obj && typeof obj === 'object') {
    var results = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      results.push(stringifyJSON(key)+':'+stringifyJSON(obj[key]));
    }
    return '{'+results.join(',')+'}';
  }
  if (typeof obj === 'string') {
    return '"'+obj+'"';
  }
  return ''+obj;
};





