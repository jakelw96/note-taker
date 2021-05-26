const fs = require('fs');
const path = require('path');

// Creates new note
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

// Deletes a selected note
function deleteNote(body, arrID, noteArray) {
    let note = body;
    let noteParse = JSON.parse(noteArray)
    let updatedNotes = noteParse.filter(({ id }) => !id.includes(arrID))
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(updatedNotes, null, 2)
    );

    return note;
};

module.exports = { createNewNote, deleteNote };