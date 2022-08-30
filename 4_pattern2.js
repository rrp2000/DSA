/*

*****
****
***
**
*

*/

let depth = 5

for(let i = 0;i<depth;i++){
    for(let j = 0; j<depth-i;j++){
        process .stdout.write("*")
    }
    console.log("")
}