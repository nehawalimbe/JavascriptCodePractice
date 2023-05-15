function test(a,b) {
    console.log('a =>', a);
    console.log('b =>', b);
    console.log(this);
}

function newTest() {
    console.log('newTest')
}

console.log('call method demo');
let obj = {
    name: 'Neha',
    testFunction: function() {
        test.call(this, 1, 2);
    } 
}

obj.testFunction();