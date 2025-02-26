let fp = '';
if (data.creators && data.creators.length > 0) {
fp += data.creators[0]?.lastName;
if (data.creators.length == 2) {
	fp += ' and ';
	fp += data.creators[1]?.lastName;
} else if (data.creators.length > 2) {
    fp += ' et al.';
}
fp += ' ';
if (data.date) {
    let year;
    // Try to extract a 4-digit year from the date string using regex
    const yearMatch = data.date.match(/\b(\d{4})\b/);
    if (yearMatch) {
        // Use the first matched 4-digit sequence as year
        year = yearMatch[1];
    } else {
        // Fall back to the Date object method
        try {
            year = new Date(data.date).getFullYear();
        } catch (e) {
            // If parsing fails, just use the original string
            year = data.date;
        }
    }
    fp += year.toString();
}
fp += ' - ';
fp += data.title.replace(/[/\\:?!]|\*/g, '').trim();;
data.filename = fp;
return 'Papers/References/' + fp;
}