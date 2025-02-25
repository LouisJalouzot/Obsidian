const fs = require('fs');

function extractCitekeys(bibtexFile) {
  const bibtexData = fs.readFileSync(bibtexFile, 'utf-8');
  const regex = /@([a-zA-Z]*)\s*\{\s*([a-zA-Z0-9_:.#$%&-+?<>~/]*)/gm;
  let match;
  let citeKeys = [];

  while ((match = regex.exec(bibtexData))) {
    const citekey = match[2].trim();
    citeKeys.push(citekey);
  }

  return citeKeys;
}

// Usage
// (todo) Replace this path with the actual absolute path to your bibliography
const bibtexFile = "/home/louis/Work/zotero.bib";
const itemsToImport = extractCitekeys(bibtexFile);

// Import every item in the bibtex file
if (itemsToImport.length > 0) {
	let itemCount = itemsToImport.length;
    new Notice(`Importing ${itemCount} items`, 5000);
    for (const citekey of itemsToImport) {
        itemCount--;
        // (todo) Replace 'Testing' below with the name of your import format that Zotero Integration should use
        app.plugins.getPlugin('obsidian-zotero-desktop-connector').runImport('Testing', citekey);
         // If you are importing from a group library, add a number after the citekey that corresponds to the order the group libraries were created in, counting up from My Library, which has the libraryID 1. So if the group library you are targeting was the first group library you created, its libraryID is 2. In that case, you would need this:
        // app.plugins.getPlugin('obsidian-zotero-desktop-connector').runImport('Testing', citekey, 2);
        new Notice(`Imported ${citekey}, ${itemCount} remaining`);
    }
    new Notice("Import complete!", 3000);
} else {
    new Notice("Nothing to import");
}