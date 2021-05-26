const fs = require('fs');
// const createNewNote = require('../../lib');
// const deleteNote = require('../../lib');
const { createNewNote, deleteNote } = require('../../lib');
const generateUniqueId = require('generate-unique-id');
const router = require('express').Router();

// Reads JSON data and returns to page
router.get('/notes', (req, res) => {
  const noteData = JSON.parse(fs.readFileSync('./db/db.json'));
  res.json(noteData);
});

// Receives new note and adds to JSON file then returns
router.post('/notes', (req, res) => {
    let currNotes = fs.readFileSync('./db/db.json')
    // Creates unique id for each note in the JSON file
    req.body.id = generateUniqueId();
    
    // Add note to json file
    const newNote = createNewNote(req.body, currNotes)
    
    res.json(newNote)
});

// Deletes note
router.delete('/notes/:id', (req, res) => {
    let id = req.params.id;
    let currNotes = fs.readFileSync('./db/db.json')

    let updatedNotes = deleteNote(req.body, id, currNotes);

    res.json(updatedNotes)
});

module.exports = router;