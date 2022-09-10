let s = "aaaaaaaaaaaab"

let minimum = Infinity
let minele = s[0]
let map = new Map()


function mostRepeated(s) {
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
        console.log(map);
        console.log(minimum);

        if(s[i]===minele){
            minimum = map.get(s[i])     
           
        }
        if(map.get(s[i]) < minimum) {
            minimum = map.get(s[i])
            minele = s[i]
        }
        if (map.get(s[i]) == minimum && s.charCodeAt(i) < minele.charCodeAt(0)) {
            minimum = map.get(s[i])
            minele = s[i]
        }
    }
    return minele
}

console.log(mostRepeated(s))