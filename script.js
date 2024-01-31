const myFroyo = [
    "Vanilla",
    "Chocolate",
    "Strawberry",
    "Cherry", 
    "Orange"
];

//define myFroyo

Object.defineProperty(myFroyo, 'toString', {
    value: function() {
        return JSON.stringify(this)
    }
})

//promt for choosing flavor

const flavor = prompt (`What flavor would you like?\n${myFroyo.join('/n')}`)

function selectItems() {
    let select = myFroyo;
    if (select != null)
        return `${flavor} flavor is ${myFroyo} myFroyo. ${message} `;
}
