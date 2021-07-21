const inquirer = require('inquirer');
require('colors')

const questions = [
    {
        type: 'list',
        name: 'option',
        message: `${"What do you want to do?\n".inverse}`,
        choices: [
            {
                value: '1',
                name: `${'1.-'.red.bold} ${'Create Task'.green.bold}`
            },
            {
                value: '2',
                name: `${'2.-'.red.bold} ${'Show Tasks'.green.bold}`
            },
            {
                value: '3',
                name: `${'3.-'.red.bold} ${'Show Completed Tasks'.green.bold}`
            },
            {
                value: '4',
                name: `${'4.-'.red.bold} ${'Show Pending Tasks'.green.bold}`
            },
            {
                value: '5',
                name: `${'5.-'.red.bold} ${'Complete Tasks'.green.bold}`
            },
            {
                value: '6',
                name: `${'6.-'.red.bold} ${'Delete Tasks'.green.bold}`
            },
            {
                value: '0',
                name: `${'0.-'.red.bold} ${'Exit'.green.bold}`
            }
        ]
    }
];

const pauseOptions = [
    {
        type: 'input',
        name: 'enter',
        message: `Press ${ "enter".green.bold } to continue`
    }
]



const inquirerMenu = async ()=> {
    console.clear();
    console.log("=============================".green.bold);
    console.log("      Select a option:".green.bold);
    console.log("=============================\n".green.bold);

    let { option } = await inquirer.prompt(questions);

    return option;



}


const pause = async () => {
    console.log(`\n`);
    let { pauseConfig } = await inquirer.prompt(pauseOptions);
    return pauseConfig;
}

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value){
                if (value.length === 0) {
                    return console.error('Insert a value')
                }
                return true;
            }
        }
    ]
    const {description} = await inquirer.prompt(question)
    return description;


}

module.exports = {
    inquirerMenu,
    pause,
    readInput
};