const fs = require('fs');

fs.writeFileSync('text.txt', 'new text file created');
fs.copyFileSync('text.txt', 'copiedtext.txt');
fs.renameSync('text.txt', 'renamedtext.txt');

const filenames = fs.readdirSync(__dirname);
console.log(filenames);

const filetodelete = filenames[0];
fs.unlinkSync(filetodelete);
