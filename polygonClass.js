// function perimeter(sides){
//     console.log(sides);

//     var sum = 0;
//     for(var i=0; i<sides.length; i++){
//         sum = sum + sides[i];
//     }
//     return sum;

// }
// console.log(perimeter([3,4,5]))


class Polygon {
    constructor(sides) 
    {
        var sum = 0;
        for (var i=0; i<sides.length; i++)
            {
                sum = sum + sides[i];
            }
        
        this.peri = sum;
    }
     perimeter() 
    {
        return this.peri;
    }  
}
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());