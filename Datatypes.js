function performOperation(secondInteger, secondDecimal, secondString) {
    
    const firstInteger = 4;
    
    
    const firstDecimal = 4.0;

    const firstString = 'HackerRank ';
    
    const sumInt = firstInteger + parseInt(secondInteger);
    console.log(sumInt);
    
    const sumDec = parseFloat(firstDecimal) + parseFloat(secondDecimal);
    console.log(sumDec);
    
    const sumStr = firstString + secondString;
    console.log(sumStr);

    // function main() {
    //     const secondInteger = readLine();
    //     const secondDecimal = readLine();
    //     const secondString = readLine();
        
    //     performOperation(secondInteger, secondDecimal, secondString);
    // }


}
console.log(performOperation(12, 4.32, "is the best place to learn and practice coding!"))