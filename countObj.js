function getCount(objects){
    //console.log(objects);
   // console.log(objects[2][1])

   var count =0;
   for(var i=0; i<objects.length; i++){
       //console.log(objects[i]);
    for(var j=0; j<objects[i].length;j++){
        if(objects[i][j] == objects[i][j+1]){
            count = count +1;
        }
    }   
   }
   return count;
}
console.log(getCount([[1,1],[2,2],[3,3],[3,4],[4,5]]))