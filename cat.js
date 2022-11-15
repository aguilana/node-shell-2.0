// require file system

const fs = require('fs')


// expects 2 params this time -> filename and done or prompt
module.exports = (filename, done) => {

    // filename, utf8 string, handler FN that is called when read.
    fs.readFile(filename, 'utf8', (err, data) => {

        // error if one
        if(err){
            done(err.stack)
        } else {

            // calling the data when done
            done(data)
        }
    })
}