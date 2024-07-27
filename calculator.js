function addition(numbers) {
  // console.log(numbers)
  if (!numbers) return 0;

  numbers = numbers.replaceAll("\n", ",")
    // console.log(numbers)
  let num = numbers.split(",");

  let numint = num.map((val) => {
    return parseInt(val);
  });
  let total = numint.reduce((val, acc) => {
    return val + acc;
  });
  console.log(total)
  return total;
}
module.exports = { addition };
