/**
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
 */

const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly

    // here firstName & lastName are private variables
    let firstName;
    let lastName;
    this.getFullName = function () {
        return firstName + ' ' + lastName;
    };
    this.getFirstName = function () {
        return firstName;
    }
    this.getLastName = function () {
        return lastName;
    }
    this.setFirstName = function (first) {
        firstName = first;
    }
    this.setLastName = function (last) {
        lastName = last;
    }
    this.setFullName = function (firstAndLast) {
        let nameArray = firstAndLast.split(' ');
        firstName = nameArray[0];
        lastName = nameArray[1];
    }
    // we need to call this method to initialize the object
    this.setFullName(firstAndLast);
    // as we returning methods below, those will be public methods
    // return {
    //     getFullName,
    //     getFirstName,
    //     getLastName,
    //     setFirstName,
    //     setLastName,
    //     setFullName
    // }
};

const bob = new Person('Bob Ross');
console.log(Object.keys(bob));
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName);
console.log('first name', bob.getFirstName());
console.log('last name', bob.getLastName());
console.log('full name', bob.getFullName());
bob.setFirstName("Haskell");
console.log('full name', bob.getFullName());
bob.setLastName("Curry");
console.log('full name', bob.getFullName());
bob.setFullName("Haskell Curry")
console.log('first name', bob.getFirstName());
console.log('last name', bob.getLastName());

/**
Test Cases 
No properties should be added. Object.keys(bob).length should always return 6.
Waiting:bob instanceof Person should return true.
Waiting:bob.firstName should return undefined.
Waiting:bob.lastName should return undefined.
Waiting:bob.getFirstName() should return the string Bob.
Waiting:bob.getLastName() should return the string Ross.
Waiting:bob.getFullName() should return the string Bob Ross.
Waiting:bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
Waiting:bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
Waiting:bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
Waiting:bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
Waiting:bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
 */