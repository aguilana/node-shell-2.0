// ls returns list of files

// ls -la returns all hidden files and that's what we want to replicate

const fs = require('fs')



module.exports = (done) => {
    // reads current directory and outputs in UTF8 string -> handler fn takes error and data parameters
    fs.readdir('./', 'utf8', (err, data) => {
        if (err){
            throw (err);
        } else {
            done(data.join('\n'))
        }
    })
}