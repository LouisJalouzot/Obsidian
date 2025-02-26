function addYamlField(key, value, indent = '') {
  if (value === undefined || value === null) {
	return `${indent}${key}: null\n`;
  }
  
  if (typeof value === 'string') {
	value = value.trim().replace(/\n/g, " ");
	if (value.includes('\n') || value.match(/[:{}\[\],&*#?|<>=!%@`]/)) {
	  return `${indent}${key}: "${value.replace(/"/g, '\\"')}"\n`;
	}
	return `${indent}${key}: ${value}\n`;
  }
  
  if (typeof value === 'number' || typeof value === 'boolean') {
	return `${indent}${key}: ${value}\n`;
  }
  
  if (Array.isArray(value)) {
	let result = `${indent}${key}:\n`;
	value.forEach(item => {
	  if (typeof item === 'string') {
		item = item.trim().replace(/\n/g, " ");
		if (item.includes('\n') || item.match(/[:{}\[\],&*#?|<>=!%@`]/)) {
		  result += `${indent}  - "${item.replace(/"/g, '\\"')}"\n`;
		} else {
		  result += `${indent}  - ${item}\n`;
		}
	  } else if (typeof item === 'number' || typeof item === 'boolean' || item === null) {
		result += `${indent}  - ${item}\n`;
	  } else if (typeof item === 'object') {
		result += `${indent}  -\n`;
		for (const [k, v] of Object.entries(item)) {
		  result += addYamlField(k, v, indent + '    ');
		}
	  }
	});
	return result;
  }
  
  if (typeof value === 'object') {
	let result = `${indent}${key}:\n`;
	for (const [k, v] of Object.entries(value)) {
	  result += addYamlField(k, v, indent + '  ');
	}
	return result;
  }
  
  return `${indent}${key}: ${value}\n`;
}

let n = '---\n';

// Extract tags
let zotero_tags = [];
if (data.tags) {
  zotero_tags = data.tags.map(t => t.tag);
}

// Add zotero_tags to frontmatter
if (zotero_tags.length > 0) {
  n += addYamlField('zoteroTags', zotero_tags);
}
delete data.tags;

// Add date and year to frontmatter
if (data.date) {
  let dateObj = new Date(data.date);
  if (isNaN(dateObj.getTime())) {
	// Attempt to parse dates like MM/YYYY
	const parts = data.date.split(/[-/]/);
	if (parts.length === 2) {
	  const month = parseInt(parts[0]);
	  const year = parseInt(parts[1]);
	  if (!isNaN(month) && month >= 1 && month <= 12 && !isNaN(year)) {
		dateObj = new Date(year, month - 1);
	  }
	}
  }

  const year = dateObj.getFullYear();
  n += addYamlField('year', year);

  const month = dateObj.getMonth() + 1; // Month is 0-indexed
  const day = dateObj.getDate();

  n += addYamlField('date', data.date);

  if (!isNaN(month) && month >= 1 && month <= 12 && data.date.match(/[/-]\d{1,2}[/-]/)) {
	n += addYamlField('month', month);
  }
  if (!isNaN(day) && day >= 1 && day <= 31 && data.date.match(/\d{1,2}[/-]\d{1,2}[/-]/)) {
	n += addYamlField('day', day);
  }
  delete data.date;
}

// Handle creators and convert to authors
if (data.creators && Array.isArray(data.creators)) {
  const authors = data.creators.map(creator => {
	return `${creator.lastName}, ${creator.firstName}`;
  });
  n += addYamlField('authors', authors);
  delete data.creators;
}

let abstractNote = data.abstractNote;
delete data.abstractNote;
let children = data.children;
delete data.children;

n += addYamlField('generated', true);

for (const [key, value] of Object.entries(data)) {
	if (key === 'relations') continue;
	if (value !== undefined && value !== null && value !== '') {
		if (Array.isArray(value) && value.length === 0) continue;
		if (typeof value === 'object' && Object.keys(value).length === 0) continue;
		n += addYamlField(key, value);
	}
}

// End frontmatter
n += '---\n\n';

n += '>[!warning] Warning\n> This note should not be modified as it can be overwritten by the plugin which generated it\n\n';

// Add title as heading
n += '> [!title] ' + data.title + '\n\n';

// Add filename as link
if (data.filename) {
	n += `> [!example] File\n> [${data.filename}](${data.filename.replace(/ /g, '%20')}.pdf)\n\n`;
}

// Add abstract content
if (abstractNote) {
	n += '> [!abstract] Abstract\n> ' + abstractNote.split('\n').join('\n> ') + '\n\n';
}

// Add notes content
if (children) {
  const notes = children.filter(c => c.itemType.toLowerCase() == 'note');
  notes.forEach(c => {
	n += c.note_markdown + '\n\n';
  });
}

return n;