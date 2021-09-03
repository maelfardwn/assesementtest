// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  let result=0
  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

  let binaryResult = dec2bin(number)

  for(i=0;i<binaryResult.length;i++){
    if(binaryResult[i]==1){
      result = result + parseInt(binaryResult[1])
    }
  }
  return result
}

console.log(result(number));