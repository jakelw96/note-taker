const fs = require('fs');
const path = require('path');
const router = require('express').Router();

// Reads JSON data and returns to page
router.get('/notes', (req, res) => {
  const retrievedData = fs.readFileSync('./db/db.json');
  const noteData = JSON.parse(retrievedData);
  res.json(noteData);
});

module.exports = router;