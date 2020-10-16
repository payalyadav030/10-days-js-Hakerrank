// second highest number

// function highest(input){
//     console.log(input);

//    var max = input.reduce(function(a,b){
//        return Math.max(a,b)
//    })
//    console.log(max);

// //    for(var i=0; i<input.length; i++){
// //        if(max == input[i]){
// //        }
// //   }





// }
// console.log(highest([3,5,7]))

 function secondMax(arr){ 
    //var arr = [20, 120, 111, 215, 54, 78];
    var max = Math.max.apply(null, arr);
    //console.log(max);


    arr.splice(arr.indexOf(max), 1); 
    if(max == Math.max.apply(null, arr)){
        arr.splice(arr.indexOf(max),1);
    }
    return Math.max.apply(null, arr); 
}
console.log(secondMax([2,3,6,5]))