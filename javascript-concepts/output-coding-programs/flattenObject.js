var obj = {
    first: 'first',
    second: {
        firstChild: 'second first child',
        secondChild: 'second second child',
        thirdChild: {
            firstChild: 'thirdChild first child',
            secondChild: 'thirdChild second child',
            thirdChild: 'thirdChild third child'
        }
    },
    third: {
        firstChild: 'third first child',
        secondChild: 'third second child'
    },
    fourth: 'fourth'
};

// using a recursive function flatten this object and print to console all keys and values.
// The expected output is below:

function flattenObj(object) {
    for(key in object) {
        console.log(`key:${key} value: ${object[key]}`);
        // console.log('****************typeof object[key] =>', typeof object[key]);
        if(typeof object[key] === 'object') {
            flattenObj(object[key]);
        }
    }
}
flattenObj(obj);

/*
key:first value: first
key:second value: [object Object]
key:firstChild value: second first child
key:secondChild value: second second child
key:thirdChild value: [object Object]
key:firstChild value: thirdChild first child
key:secondChild value: thirdChild second child
key:thirdChild value: thirdChild third child
key:third value: [object Object]
key:firstChild value: third first child
key:secondChild value: third second child
key:fourth value: fourth
*/
