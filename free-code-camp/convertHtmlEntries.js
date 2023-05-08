/**
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
    /**
     * & = &amp;
     * < = &lt;
     * > = &gt;
     * "" = &quot;
     * ' = &apos;
     */
    let newStr = str.slice();
    let specialCharRegEx = /&|<|>|\"|\'/g;
    let match;
    let replacementWord;
    while ((match = specialCharRegEx.exec(newStr)) !== null) {
        if (match[0] === '&') {
            replacementWord = '&amp;';
        }
        if (match[0] === '<') {
            replacementWord = '&lt;';
        }
        if (match[0] === '>') {
            replacementWord = '&gt;';
        }
        if (match[0] === '"') {
            replacementWord = '&quot;';
        }
        if (match[0] === "'") {
            replacementWord = '&apos;';
        }
        newStr = newStr.slice(0, match.index) + replacementWord + newStr.slice(specialCharRegEx.lastIndex);
    }
    return newStr;
}
  
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));

/**
Test Cases 
convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
Waiting:convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
Waiting:convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
Waiting:convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
Waiting:convertHTML("Schindler's List") should return the string Schindler&apos;s List.
Waiting:convertHTML("<>") should return the string &lt;&gt;.
Waiting:convertHTML("abc") should return the string abc.
 */