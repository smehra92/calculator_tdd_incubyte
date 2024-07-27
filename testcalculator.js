const assert = require('assert');
const {addition} = require('./calculator')

assert.strictEqual(addition(""), 0, "Result is Empty String")

console.log("Test Passed")