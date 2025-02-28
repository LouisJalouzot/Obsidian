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
  const originalDateStr = data.date.trim();
  let dateObj = new Date(data.date);
  let hasMonth = false;
  let hasDay = false;
  
  // Try standard date parsing
  if (!isNaN(dateObj.getTime())) {
    // Check if month and day were specified in the original string
    hasMonth = hasMonthSpecified(originalDateStr);
    hasDay = hasDaySpecified(originalDateStr);
  } else {
    // Try parsing various formats
    const formats = [
      // MM/YYYY or MM-YYYY
      { regex: /^(\d{1,2})[-\/](\d{4})$/, yearIdx: 2, monthIdx: 1 },
      // YYYY/MM or YYYY-MM
      { regex: /^(\d{4})[-\/](\d{1,2})$/, yearIdx: 1, monthIdx: 2 },
      // Month Name YYYY or YYYY Month Name
      { regex: /^([a-z]+)\s+(\d{4})$|^(\d{4})\s+([a-z]+)$/i, yearIdx: [2, 3], monthIdx: [1, 4], isText: true },
      // DD Month Name YYYY
      { regex: /^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/i, yearIdx: 3, monthIdx: 2, dayIdx: 1, isText: true },
      // Month Name DD, YYYY
      { regex: /^([a-z]+)\s+(\d{1,2})(?:,|\.|\s)+(\d{4})$/i, yearIdx: 3, monthIdx: 1, dayIdx: 2, isText: true },
      // YYYY alone
      { regex: /^(\d{4})$/, yearIdx: 1 }
    ];
    
    for (const format of formats) {
      const match = originalDateStr.match(format.regex);
      if (match) {
        const yearIndex = Array.isArray(format.yearIdx) 
          ? format.yearIdx.find(idx => match[idx]) 
          : format.yearIdx;
        const year = parseInt(match[yearIndex]);
        
        let month = null;
        if (format.monthIdx) {
          const monthIndex = Array.isArray(format.monthIdx) 
            ? format.monthIdx.find(idx => match[idx]) 
            : format.monthIdx;
          
          if (format.isText) {
            month = getMonthFromName(match[monthIndex]);
          } else {
            month = parseInt(match[monthIndex]);
          }
          hasMonth = true;
        }
        
        let day = null;
        if (format.dayIdx) {
          day = parseInt(match[format.dayIdx]);
          hasDay = true;
        }
        
        // Create a new date object
        dateObj = new Date(year, month ? month - 1 : 0, day || 1);
        break;
      }
    }
  }

  // Only add the fields if we have a valid date
  if (!isNaN(dateObj.getTime())) {
    const year = dateObj.getFullYear();
    n += addYamlField('year', year);
    
    if (hasMonth) {
      const month = dateObj.getMonth() + 1;
      n += addYamlField('month', month);
    }
    
    if (hasDay) {
      const day = dateObj.getDate();
      n += addYamlField('day', day);
    }
  }

  // Add the original date string to the frontmatter
  n += addYamlField('date', originalDateStr);
  delete data.date;
}

// Helper function to check if the month was explicitly specified
function hasMonthSpecified(dateStr) {
  const monthNames = ["january", "february", "march", "april", "may", "june", 
                     "july", "august", "september", "october", "november", "december",
                     "jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
                     
  const lowerStr = dateStr.toLowerCase();
  
  // Check for textual month
  for (const month of monthNames) {
    if (lowerStr.includes(month)) return true;
  }
  
  // Check for numeric patterns that indicate month presence
  if (dateStr.match(/\d{1,2}[-\/]\d{4}/) || // MM/YYYY
      dateStr.match(/\d{4}[-\/]\d{1,2}/) || // YYYY/MM
      dateStr.match(/\d{1,2}[-\/]\d{1,2}[-\/]\d{1,2}/) || // MM/DD/YYYY formats
      dateStr.match(/\d{4}[-\/]\d{1,2}[-\/]\d{1,2}/)) {  // YYYY/MM/DD formats
    return true;
  }
  
  return false;
}

// Helper function to check if the day was explicitly specified
function hasDaySpecified(dateStr) {
  const lowerStr = dateStr.toLowerCase();
  
  // Check for textual day patterns
  const monthNames = ["january", "february", "march", "april", "may", "june", 
                     "july", "august", "september", "october", "november", "december",
                     "jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  
  for (const month of monthNames) {
    if (lowerStr.match(new RegExp(`\\d{1,2}\\s+${month}`)) || 
        lowerStr.match(new RegExp(`${month}\\s+\\d{1,2}`))) {
      return true;
    }
  }
  
  // Check for numeric patterns that indicate day presence
  if (dateStr.match(/\d{1,2}[-\/]\d{1,2}[-\/]\d{4}/) || // DD/MM/YYYY or MM/DD/YYYY
      dateStr.match(/\d{4}[-\/]\d{1,2}[-\/]\d{1,2}/)) {  // YYYY/MM/DD
    return true;
  }
  
  return false;
}

// Helper function to get month number from name
function getMonthFromName(name) {
  const monthNames = ["january", "february", "march", "april", "may", "june", 
                     "july", "august", "september", "october", "november", "december"];
  const shortMonthNames = ["jan", "feb", "mar", "apr", "may", "jun", 
                          "jul", "aug", "sep", "oct", "nov", "dec"];
  
  name = name.toLowerCase();
  
  // Check full names
  const fullIndex = monthNames.findIndex(m => m === name);
  if (fullIndex !== -1) return fullIndex + 1;
  
  // Check short names
  const shortIndex = shortMonthNames.findIndex(m => m === name);
  if (shortIndex !== -1) return shortIndex + 1;
  
  // Check for partial matches
  for (let i = 0; i < monthNames.length; i++) {
    if (name.startsWith(monthNames[i].substring(0, 3))) {
      return i + 1;
    }
  }
  
  return null;
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

n += '>[!warning] Warning\n> This note should not be modified as it can be overwritten by the plugin which generated it.\n\n';

// Add title as heading
n += '> [!title] ' + data.title + '\n\n';

// Add filename as link
if (data.filename) {
	n += `> [!example] File\n> [${data.filename}](/Papers/PDFs/${data.filename.replace(/ /g, '%20')}.pdf)\n\n`;
}

// Add abstract content
if (abstractNote) {
	n += '> [!abstract] Abstract\n> ' + abstractNote.split('\n').join('\n> ') + '\n\n';
}

// Add notes content
// if (children) {
//   const notes = children.filter(c => c.itemType.toLowerCase() == 'note');
//   notes.forEach(c => {
// 	n += c.note_markdown + '\n\n';
//   });
// }

return n;