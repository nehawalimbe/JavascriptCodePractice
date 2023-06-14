/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sourceStr = s.split('').sort().join('');
    let targetStr = t.split('').sort().join('');
    console.log(sourceStr)
    console.log(targetStr)
    return sourceStr === targetStr;
};

isAnagram('anagram', 'nagaram');