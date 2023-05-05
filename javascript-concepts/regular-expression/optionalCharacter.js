/**
You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
Both uses of the test method would return true.
 */

let american = "favorite";
let british = "favourite";
let rainbowRegex= /favou?rite/;
rainbowRegex.test(american);
rainbowRegex.test(british);
