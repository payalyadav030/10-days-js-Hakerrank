function main(r) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    // Print the area of the circle:
    var area;
    var perimeter;
   const PI = 3.141592653589793238;

    area = PI * r * r;
    console.log(area)
    perimeter = 2 * PI * r;
    console.log(perimeter);

    function read(){
        const r = readLine();
    }

    // Print the perimeter of the circle:

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
console.log(main(2.6))