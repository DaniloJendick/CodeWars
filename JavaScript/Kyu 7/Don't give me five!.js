function dontGiveMeFive(start, end){
  let result = 0;
  
  for(let i = start; i <=end; i++){
    i += ""
    if(!i.includes("5")){ result++}
    
    i = parseInt(i);
  }
  return result
}
