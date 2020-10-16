function getCount(objects){
    console.log(objects);

    var count = 0;

    for(var i=0; i<objects.length; i++){
        if(objects[i].x == objects[i].y){
            count = count + 1;
        }
    }
    return count;

}
console.log(getCount([{x:1, y:1},{x:3, y:3},{x:3, y:3},{x:3, y:4},{x:4, y:5}]))