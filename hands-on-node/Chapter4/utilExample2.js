var util = require('util');
var a = {1: true, 2: false};
console.log(util.inspect(a));	//=> { '1': true, '2': false }

/*
 * util.inspect accepts more arguments, which are
 *    util.inspect(object, showHidden, depth = 2, showColors);
 *
 *  showHidden: should be turned on if you wish inspect to show you
 *		nonenumerable properties, these are properties that
 *		belong to the object prototype chain, not the object
 *		itself
 *
 *  depth:  the default depth on the object graph it should show, this
 *	    is useful for inspecting large objects, to recure indefinitely
 *	    pass a null value
 */
