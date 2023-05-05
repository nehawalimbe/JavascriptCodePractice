/**
 * Crate class in ES5 and add prototype method
 */
function Book(name, author) {
    this.name = name;
    this.author = author;
}

Book.prototype.getSummary = function(){
    console.log(`${this.name} is written by ${this.author}`);
}

const book1 = new Book('J.K. Rowling', 'Harry Potter');
book1.getSummary();