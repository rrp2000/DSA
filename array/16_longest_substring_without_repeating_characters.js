let s = "pwwkew"

var lengthOfLongestSubstring = function (s) {

    let count = 0
    let map = new Map()
    let left = 0
    let right = 0

    while (right < s.length) {
        if (map.has(s[right])) {
            left = map.get(s[right]) + 1
            map.delete(s[right])
        }

        map.set(s[right], right)
        count = Math.max(count, right-left + 1)
        right++
        console.log(map)
    }
    return count

};

console.log(lengthOfLongestSubstring(s));