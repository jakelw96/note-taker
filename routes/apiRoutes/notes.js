const fs = require('fs');
const createNewNote = require('../../lib');
const generateUniqueId = require('generate-unique-id');
const router = require('express').Router();
const notes = fs.readFileSync('./db/db.json');

// Reads JSON data and returns to page
router.get('/notes', (req, res) => {
  const noteData = JSON.parse(notes);
  res.json(noteData);
});

// Receives new note and adds to JSON file then returns
router.post('/notes', (req, res) => {
    // Creates unique id for each note in the JSON file
    req.body.id = generateUniqueId();
    
    // Add note to json file
    const newNote = createNewNote(req.body, notes)
    
    res.json(newNote)
});


module.exports = router;