// Create an un-ordered list with a list item for each item in the array.
// Add appropriate id attribute and only add style class where selected:true
// Create css class to add to items where selected is true.
// <li id="{id}" class="{style}">{text}</li>
var data = [
    { id: 4, text: 'item 4', selected: true },
    { id: 3, text: 'item 3', selected: false },
    { id: 1, text: 'item 1', selected: false },
    { id: 5, text: 'item 5', selected: true },
    { id: 6, text: 'item 6', selected: false }
];

function createListItems() {
    let ulElemnt = document.getElementById('list');
    data.forEach((item) => {
        // let liElement = `<li id=${item.id} class=${item.selected}>${item.text}</li>`;
        let liElement = document.createElement('li');
        liElement.innerText = item.text;
        liElement.setAttribute('id', item.id);
        if (item.selected) {
            liElement.setAttribute('class', 'selected');
        }
        ulElemnt.appendChild(liElement);
    });
}

function createbuttons() {
    let buttonContainer = document.getElementById('buttonContainer');
    for (let i = 1; i < 4; i++) {
        let btnElement = document.createElement('button');
        btnElement.innerText = `Button ${i}`;
        buttonContainer.appendChild(btnElement);
    }
    buttonContainer.addEventListener('click', (event) => {
        // console.log('event =>', event);
        if(event.target.nodeName === 'BUTTON') {
            alert(`${event.target.innerText} is clicked`);
        }
    })
    // allBtnElements.addEventListener('click', (event) => {
    //     console.log(event);
    //     alert('button clicked')
    // });
}

document.addEventListener('DOMContentLoaded', (event) => {
    // createListItems();
    createbuttons();
});

function addButton() {
    let buttonContainer = document.getElementById('buttonContainer');
    let btnElement = document.createElement('button');
    btnElement.innerText = `new button`;
    buttonContainer.appendChild(btnElement);
}

function clickDiv(event) {
    // console.log(event.target.title);
    console.log(event);
    alert('div clicked');
}

