function wave(str){
  let wave = [];
  str = str.split("");
  for(let i = 0; i < str.length; i++){
    if(str[i].toLowerCase() !== str[i].toUpperCase()){
    str[i] = str[i].toUpperCase()
    wave.push(str.join(""))
    str[i] = str[i].toLowerCase()
    }
  }
  return wave;
}
