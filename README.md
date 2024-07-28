npm init -y
calculator.js and testcalculator.js
node testcalculator.js

Phase 1 : 
    if(!numbers) return 0;

Phase 2 :
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


Phase 3 :
    //numbers = numbers.replace("\n", ",") //Replaces first occurance
    numbers = numbers.replaceAll("\n", ",")

Phase 4 :




