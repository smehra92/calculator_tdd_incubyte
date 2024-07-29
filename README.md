**Calculator Project**

**Setup**

1. Initialize a new Node.js project by running `npm init -y` in your terminal.
2. Create two new files: `calculator.js` and `testcalculator.js`.
3. Run `node testcalculator.js` to test the calculator functionality.

**Phases of Calculator Functionality**

### Phase 1: Handling Empty Input

```javascript
if(!numbers) return 0;
```

### Phase 2: Basic Calculator Functionality

```javascript
let num = numbers.split(",")

/*
//Returns just 1st digit.
let intnum = parseInt(num);
console.log(intnum);
*/

/*
//Undefined
let intnum = num.forEach((val) => {
  let a = parseInt(val);
  return a;
});
console.log(intnum);
*/

let numint = num.map((val) => {
  return parseInt(val)
})
let total = numint.reduce((val, acc) => {
  return val + acc
})
return total;
```

### Phase 3: Handling Newline Characters

```javascript
//numbers = numbers.replace("\n", ",") //Replaces first occurance
numbers = numbers.replaceAll("\n", ",")
```

### Phase 4: Custom Delimiter Support

// Delimiter Part

### Phase 5: Error Handling for Negative Integers

// Throw Exception for Negative integers.

**Example Usage**

* Run `node testcalculator.js` to test the calculator functionality.