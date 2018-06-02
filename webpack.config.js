const path = require('path');

// let absPath = path.join(__dirname, '/public');
// console.log(absPath)

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    }
};