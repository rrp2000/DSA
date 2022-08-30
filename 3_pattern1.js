/*
*
**
***
****
*****
*/

// let depth = 5
// for(let i = 0;i<depth;i++){
//     for(let j = 0;j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log("")
// }


/*
1
2 3
4 5 6
7 8 9 10

*/

// let depth = 5
// let count = 1
// for(let i = 0;i<depth;i++){
//     for(let j = 0;j<=i;j++){
//         process .stdout.write(count+" ")
//         count++
//     }
//     console.log("")
// }

/*
1
2 3
3 4 5
4 5 6 7
*/

let depth = 5
for(let i = 0;i<depth;i++){
    let count = i+1
    for(let j = 0;j<=i;j++){
        process .stdout.write(count+" ")
        count++
    }
    console.log("")
}