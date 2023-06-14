/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if(i !== j) {
                let sourceStr = strs[i].split('').sort().join('');
                let targetStr = stre[j].split('').sort().join('');
                // if(sourceStr)
                // TODO Neha complete this
            }
        }
    }
};