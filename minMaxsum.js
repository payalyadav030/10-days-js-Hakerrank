function miniMaxSum(arr){
  //console.log(arr);
  var sum1 =0;
  var sum2=0;
  var value =[];
  var array = arr.sort();
  //console.log(array)
  
  for(var i=1; i< array.length ; i++){
    
          sum1 = sum1 + array[i]  
  }
  
  for(var i=0; i< array.length-1; i++){
      sum2 = sum2 + array[i]
  }
  value.push(sum2);
  value.push(sum1);

  return value;

  ////////////////////////////////////
  var data = arr;
    data = data.sort();
  

let maxSet = data.slice(1);
let minSet = data.slice(0, -1);


const sum = data.reduce((a, total) => a + total, 0);
console.log(sum - data[data.length - 1], sum - data[0]);
  
}
console.log(miniMaxSum([1,2,3,4,5]))