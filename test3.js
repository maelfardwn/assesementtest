// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  let arr1Condition ;
  let arr2Condition ;

  let tmpBiggestArr1=Math.max(...arr1);
  let tmpSmalletArr1=Math.min(...arr1);



  for(i=0;i<arr2.length;i++){
    if(arr2[i] > tmpBiggestArr1){
      arr1Condition = false
    }else{
      arr1Condition = true
    }
  }
  for(j=0;j<arr2.length;j++){
    if(arr2[j] < tmpSmalletArr1){
      arr2Condition = false
    }else{
      arr2Condition = true
    }
  }
  return [arr1Condition, arr2Condition]
}

console.log(result(arr1, arr2));