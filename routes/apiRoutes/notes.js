const fs = require('fs');
const createNewNote = require('../../lib');
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


module.exports = router;