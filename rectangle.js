function Rectangle(a,b){
    console.log(a,b);
    var value = []

    var perimeter = 2*(a+b);
    var area = a * b;

    //console.log(perimeter, area)
    value.push(perimeter);
    value.push(area)

    return value;

}
console.log(Rectangle(4,5));


////////////////////////////
function Rectangle(a, b) {
    this.length = a;
  this.width = b;
  this.area = a * b;
  this.perimeter = 2 * (a + b);
    
}
