// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  let oddNumber=[]
  let sortedOddNumber = []
  let evenNumber=[]
  let sortedEvenNumber = []
  let result=[]
  
  for(i=0;i<arr2.length;i++){
    if(arr2[i] %2 ==0 ){
      evenNumber.push(arr2[i])
    }else{
      oddNumber.push(arr2[i])
    }
  }
  for(i=oddNumber.length-1;i>=0;i--){
    sortedOddNumber.push(oddNumber[i])
  }
  
  for(i=evenNumber.length-1;i>=0;i--){
    sortedEvenNumber.push(evenNumber[i])
  }
console.log(sortedOddNumber, sortedEvenNumber)
}

console.log(result(arr1, arr2));