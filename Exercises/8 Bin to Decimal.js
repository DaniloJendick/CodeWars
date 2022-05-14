//Convert a binary number (given as a string) to a decimal number.

function binToDec(bin){
  let result =0;
  let multiplier = 1;
  for(let i = bin.length-1; i >= 0; i--){
    if(bin[i] == "1"){
      result += 1 * multiplier;  
    }
    multiplier *= 2;
    
  }
  return result
}
