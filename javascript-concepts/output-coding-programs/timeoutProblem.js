// What will happen and why
// Fix it

var data = ['one', 'two', 'three', 'four', 'five'];
for (var i = 0; i < data.length; i++) {
    setTimeout(function () {
        console.log('INDEX:', i, 'VALUE:', data[i]);
    }, (1000 * i));
}

// Fix using let keyword
console.log('Fix using let keyword')
for (let i = 0; i < data.length; i++) {
  setTimeout(function() {
    console.log('INDEX:', i, 'VALUE:', data[i]);
  }, (1000 * i));
}

// Fix using let keyword
console.log('Fix using IIFE')
for (let i = 0; i < data.length; i++) {
  (function(i){
    setTimeout(function() {
      console.log('INDEX:', i, 'VALUE:', data[i]);
    }, (1000 * i));
  })(i);
}

