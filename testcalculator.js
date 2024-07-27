const assert = require('assert');
const {addition} = require('./calculator')

assert.strictEqual(addition(""), "", "Result is Empty String")
console.log("Test Passed")