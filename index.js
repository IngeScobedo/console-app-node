require('colors')

const {printMenu} = require('./helpers/messages');

console.clear();

const main = async () => {
    console.log('hello world async');

    printMenu()
}

main();