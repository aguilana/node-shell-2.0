// technically to make an https or responses is requiring it's http module.
// this module is so complete it allows you to do anything http related - server, send any req, produce any response...but comes at a price. Because so powerful it is tricky to use. Lot of boilerplates, etc....
// lots of developers provided helper libraries and easier use case for specific tasks.

// const http = require('http');
// npm install requests --> now instead of requiring the http module we can require requests

const request = require('request')

// solution code
module.exports = (url, done) => {

    // send url request and returns a response including all of the headers and the body, which is what we want.
    request(url, (err, response, body) => {
        if (err){
            done(err.stack)
        } else {
            done(body)
        }
    })
}