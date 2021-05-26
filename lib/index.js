const fs = require('fs');
const path = require('path');

function createNewNote(body, noteArray) {
    const note = body;
    let noteParse = JSON.parse(noteArray)
    noteParse.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteParse, null, 2)
    );
};

module.exports = createNewNote;