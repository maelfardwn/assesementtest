// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  // Your Code Here
  let result = 0;
  //looping input based on input length
  for(i=0;i<input.length;i++){
    result = result + input[i]
  }
  return result
}

console.log(result(input));