/* eslint-disable */
const pwd = require('./pwd')

const prompt = data => {
    console.log(data)
    process.stdout.write('prompt > ')
}

process.stdin.on('data', data => {
    const command = data.toString().trim();

    switch (command){
        case 'pwd':
            prompt(pwd());
            break;
        case 'ls':
            require('./ls')(prompt)
            break;
        default:
            prompt('not found')
    }
})