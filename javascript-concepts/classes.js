/**
 * Crate class in ES5 and add prototype method
 */
function Animal(name, color) {
    this.name = name;
    this.color = color;
}

Animal.prototype.eat = function() {
    return 'nom nom nom';
}

const animalObj = new Animal('Lucy', 'brown');
console.log(animalObj);