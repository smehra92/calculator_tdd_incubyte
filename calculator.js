function addition (numbers) {
    // console.log(numbers)
    if(!numbers) return 0;

    let num = numbers.split(",")

    // let intnum = parseInt(num);
    // console.log(intnum);

    // let intnum = num.forEach((val) => {
    //   let a = parseInt(val);
    //   return a;
    // });
    // console.log(intnum);

    let numint = num.map((val) => {
        return parseInt(val)
    })
    let total = numint.reduce((val, acc) => {
            return val + acc
    })

    return total;
}
module.exports = {addition};