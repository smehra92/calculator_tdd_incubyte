function addition(numbers) {
    // console.log(numbers)
    //1st part
    if (!numbers) return 0;
    
    //4th part
    let val = numbers.split("")
    let start = val[0] + val[1]
    let delimiter = val[2]
  
    if(start == "//"){
      let initialarray = numbers.split("")
      let slicearray = initialarray.slice(4).join('').split("")
      let filterarray = slicearray.filter((e) => {
        return Number.isInteger(parseInt(e)) || e === delimiter
      });
      let newstring = filterarray.join("")
      let stringarray = newstring.split(delimiter)
      let intarray = stringarray.map((e) => {
        return parseInt(e)
      })
      const total = intarray.reduce((e, acc) => { return e + acc })
      console.log(total)
      return total;
    } else {
      //3rd part
      numbers = numbers.replaceAll("\n", ",")
      // console.log(numbers)
  
      //2nd part
      let stringarray = numbers.split(",");
  
      let intarray = stringarray.map((val) => {
        return parseInt(val);
      });
      let total = intarray.reduce((val, acc) => {
        return val + acc;
      });
      console.log(total)
      return total;
    }
  }
  module.exports = { addition };
  