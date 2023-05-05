/**
 * Crate class in ES5, add prototype method, inherit class
 */
function Book(title) {
    this.title = title;
}
Book.prototype.getTitle = function() {
    return this.title;
}

function Magazine(title, month) {
    Book.call(this, title, month)
    this.month = month;
}

// By doing below - object of Magazine can access prototype methods of Book
Magazine.prototype = Object.create(Book.prototype);
    
let mag = new Magazine('test', 'March');
Magazine.prototype.constructor = Magazine;
console.log(mag);
console.log(mag.getTitle());

