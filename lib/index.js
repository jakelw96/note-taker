const fs = require('fs');
const path = require('path');

function createNewNote(body, noteArray) {
    let note = body;
    let noteParse = JSON.parse(noteArray)
    noteParse.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteParse, null, 2)
    );
    return note;
};

module.exports = createNewNote;