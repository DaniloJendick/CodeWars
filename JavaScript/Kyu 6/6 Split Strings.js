/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
    let array = []
    
    for(let i = 0; i < str.length; i++){
        array[i/2] = str[i];
        if(Boolean(str[i+1])){
            array[i/2] += str[i+1];
        }
        
        if(array[i/2].length == 1){ array[i/2] += "_"}
        i++
    }
   
   return array
 }
