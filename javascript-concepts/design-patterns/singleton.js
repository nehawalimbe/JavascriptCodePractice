let myInstance = (function () {
    let instance;
    function init() {
        let privateRandomNumber = Math.random();
        return {
            publicMethod: function () {
                console.log('This is public method');
            },
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        }
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

let instanceA = myInstance.getInstance();
instanceA.publicMethod();
let instanceB = myInstance.getInstance();
instanceA.publicMethod();