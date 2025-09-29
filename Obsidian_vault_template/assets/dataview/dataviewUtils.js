function dailyNoteHeader(dv, dateStr) {
    /*
    Use this function to create the header for daily notes.
    This function creates:
    - Link to previous daily note (not necessarily the previous day)
    - Link to next daily note (not necessarily the next day)
    
    Parameters
    ----------
    dv : obj
        dataview object. Has to be provided, because it cannot be accessed otherwise.
    dateStr : string
        Date of the note for which to create the header in the format "YYYY-MM-DD".

    This function is based on the code from Matthias C. Hormann:
    https://forum.obsidian.md/t/dataviewjs-snippet-showcase/17847/21
    */
    var none = '(none)';
    
    // Filter all daylies
    var p = dv.pages('"Calendar" and #log/daily').map(p => [p.file.name, p.file.day.toISODate()]).sort(p => p[1]);
    
    var t = dateStr;
    
    var format = 'YYYY-MM-DD';
    var current = '(' + moment(t).format(format) + ')';
    var nav = [];
    var today = p.find(p => p[1] == t);
    var next = p.find(p => p[1] > t);
    var prev = undefined;
    
    p.forEach(function (p, i) {
        if (p[1] < t) {
            prev = p;
        }
    });
    
    nav.push(prev ? '[[' + prev[0] + ']]' : none);
    nav.push(today ? today[0] : current);
    nav.push(next ? '[[' + next[0] + ']]' : none);
    
    //dv.list(nav);
    //dv.paragraph(nav.join(" · "));
    dv.paragraph('<< ' + nav[0] + ' | ' + nav[2] + ' >>');
    return null;
}
exports.dailyNoteHeader = dailyNoteHeader;


function projectQueries(dv, noteTitle) {
    /*
    Used in every project note to automaticall show:
    - Tasks for me
    - Tasks for others
    - Last 10 meetings
    */

    let max_amount_meetings = 10;

    dv.el('div', '<hr>');
    dv.el('div', '<hr>');

    dv.paragraph('# \>>> AUTO QUERIES <<<');

    // Show tasks for me
    dv.paragraph(
        '## 💪 Tasks for me (auto, prio >= high) ⏫' + '\n' +
        '```tasks' + '\n' +
        'not done' + '\n' +
        'priority is above medium' + '\n' +
        'description includes [[' + noteTitle + ']]\n' +
        'description includes [[John Doe]]' + '\n' +
        '```'
    );

    dv.paragraph(
        '## 💪 Tasks for me (auto, prio < high)' + '\n' +
        '```tasks' + '\n' +
        'not done' + '\n' +
        'priority below high' + '\n' +
        'description includes [[' + noteTitle + ']]\n' +
        'description includes [[John Doe]]' + '\n' +
        '```'
    );


    // Show tasks for others
    dv.paragraph(
        '## 💪 Tasks for others (auto)' + '\n' +
        '```tasks' + '\n' +
        'not done' + '\n' +
        'description includes [[' + noteTitle + ']]\n' +
        'description does not include [[John Doe]]' + '\n' +
        '```'
    );

    
    // Show last 10 meetings
    dv.paragraph(
        '## 📝 Last ' + max_amount_meetings.toString() + ' Meetings (auto)' + '\n' +
        '```dataviewjs' + '\n' + 
        'let max_amount = ' + max_amount_meetings.toString() + ';' + '\n' + 
        'let pages = dv.pages(\'"Calendar" and #log/meeting\')' + '\n' + 
        '    .where(x => x["tags"].includes("' + noteTitle + '"))' + '\n' +
        '    .sort(x => -x.dates)' + '\n' +
        '    .slice(0, max_amount);' + '\n' +
        'dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));' + '\n' +
        '```'
    );

    return null;
}
exports.projectQueries = projectQueries;


function getActiveProjects(dv) {
    let pages = dv.pages('"1 PROJECTS" and #type/project')
        .sort(x => x.file.name);
    return pages;
}
exports.getActiveProjects = getActiveProjects;


function getNamesOfActiveProjects(dv) {
    let pages = dv.pages('"1 PROJECTS" and #type/project')
        .sort(x => x.file.name);
    names = pages.map(x => x.file.name);
    return names;
}
exports.getNamesOfActiveProjects = getNamesOfActiveProjects;
