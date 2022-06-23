/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case 

*/


var countBits = function(n) {
    let string = "";
    let result = 0 
    let multiplier = 1;
    let done = false;
    while(!done){
      
      if( n % 2 == 1){ string = "1"+string; result += 1}
                 else{ string = "0"+string }
      n = parseInt(n/2);
      if(n == 0){return result}  
    }
} 
