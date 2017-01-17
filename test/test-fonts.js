var fs = require('fs'),
    path = require('path'),
    postcss = require('postcss'),
    test = require('ava'),
    base64 = require('../');

var opts = {
    extensions: ['.png', '.svg'],
    root: 'test/'
};

var src = fs.readFileSync(path.join(__dirname, 'fonts.css')),
    expectedFile = fs.readFileSync(path.join(__dirname, 'fonts-expected.css')).toString(),
    output = postcss().use(base64(opts)).process(src).css,
    outputFile = fs.writeFileSync(path.join(__dirname, 'fonts-output.css'), output),
    outputFileContents = fs.readFileSync(path.join(__dirname, 'fonts-output.css')).toString();

test('Output of file with fonts is as expected', t => {
    t.is(expectedFile, outputFileContents, 'Expected code and output code are not the same.');
});
