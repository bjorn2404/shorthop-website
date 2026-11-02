const fs = require('fs');
const path = require('path');

// Read the generated JSON file
const shortcutsPath = path.join(__dirname, 'shortcuts.json');
const shortcutsData = JSON.parse(fs.readFileSync(shortcutsPath, 'utf-8'));

module.exports = shortcutsData;