const assert = require('assert');
const {addition} = require('./calculator')

// assert.strictEqual(addition(""), 0, "Result is Empty String")
// assert.strictEqual(addition("1,2,3"), 6, "Result")
assert.strictEqual(addition("1\n2,-3,4\n5\n6"), 21, "Result")
//assert.strictEqual(addition("//;\n1;2\n3;4"), 28, "Result")
// assert.strictEqual(addition("//;\n1;-2\n3"), 28, "Result")


console.log("Test Passed")