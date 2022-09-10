/*
Given a string S, find the smallest window(substring) length with all distinct characters of the given string.

Input:

    aabbcc

    where:

First line represents input string S.
 

Output:

    4

Explanation:

abbc of length 4 is the smallest window with the highest number of distinct characters.

*/
let s = "aabbcc"

function smallwindowcontainall(s) {
    let map1 = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map1.has(s[i])) {
            map1.set(s[i], map1.get(s[i]) + 1)
        } else {
            map1.set(s[i], 1)
        }
    }

    let map2 = new Map()
    let smallest = Infinity

    let i = 0
    let j = 0

    while (j < s.length) {
        console.log(i, j);

        if (map2.has(s[j])) {
            map2.set(s[j], map2.get(s[j]) + 1)
        } else {
            map2.set(s[j], 1)
        }
        console.log(map2);
        while (map2.size >= map1.size) {
            map2.set(s[i], map2.get(s[i]) - 1)
            if (map2.get(s[i]) === 0) {
                map2.delete(s[i])
            }
            smallest = Math.min(smallest, j - i + 1)
            i++
            console.log(map2);
        }

        j++
    }

    return smallest
}

console.log(smallwindowcontainall(s));