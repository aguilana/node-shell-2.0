/* eslint-disable */
const pwd = require('./pwd')

const prompt = data => {
    console.log(data)
    process.stdout.write('prompt > ')
}

process.stdin.on('data', data => {

    // command is taking whatever the user types as one string
    const entry = data.toString().trim();
    const [command, arg] = entry.split(' ');

    // for cat will be -> cat lorem_ipsum.txt

    switch (command){
        case 'pwd':
            prompt(require('./pwd')(prompt));
            break;
        case 'ls':
            require('./ls')(prompt)
            break;
        case 'cat':
            require('./cat')(arg, prompt)
            break;
            // new case
        case 'curl':
            require('./curl')(arg, prompt)
        default:
            prompt('not found')
    }
})