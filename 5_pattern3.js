/*

*****
 ****
  ***
   **
    *

*/

let depth = 5
let space = 0
for(let i = 0;i<depth;i++){
    process .stdout.write(" ")
    for(let j = 0;j<depth;j++){
        if(j<space){
            process.stdout.write(" ")
        }
        else{
            process .stdout.write("*")
        }
    }
    space++
    console.log("")
}