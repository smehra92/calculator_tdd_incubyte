const assert = require('assert');
const {addition} = require('./calculator')

// assert.strictEqual(addition(""), 0, "Result is Empty String")
// assert.strictEqual(addition("1,2,3"), 6, "Result is 6")
// assert.strictEqual(addition("1\n2,3,4\n5\n6"), 21, "Result is 6")
assert.strictEqual(addition("//;\n1;-24"), 3, "Result")


console.log("Test Passed")