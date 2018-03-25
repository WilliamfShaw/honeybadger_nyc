const fs = require('fs');
const path = process.argv[2];
const fileName = process.argv[3];

function mergePeople() {
    const files = fs.readdirSync(path);
    const mergedPeople = [];

    files.forEach(function(file) {
        const data = JSON.parse(fs.readFileSync(`${path}/${file}`, 'utf8'));
        Array.prototype.push.apply(mergedPeople, data);
    });

    fs.writeFileSync(`${path}/${fileName}`, mergedPeople.sort());
}

mergePeople();
