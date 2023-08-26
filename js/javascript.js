function clearInputs() {
    const ids = ['passingyards', 'passingtds', 'interceptionsthrown', 'rushingyards', 'rushingtds', 'receptions', 'receivingyards', 'receivingtds'];
    ids.forEach(id => document.getElementById(id).value = "");
    document.getElementById('result').innerHTML = "Points: 0";
}

function calculatePoints() {
    const getValue = id => parseFloat(document.getElementById(id).value) || 0;

    const passingyards = getValue('passingyards');
    const passingtds = getValue('passingtds');
    const interceptionsthrown = getValue('interceptionsthrown');
    const rushingyards = getValue('rushingyards');
    const rushingtds = getValue('rushingtds');
    const receptions = getValue('receptions');
    const receivingyards = getValue('receivingyards');
    const receivingtds = getValue('receivingtds');

    const passingPoints = passingyards / 25 + passingtds * 4 + interceptionsthrown * -1;
    const rushingPoints = rushingtds * 6 + rushingyards / 10;
    const receivingPoints = receptions + receivingyards / 10 + receivingtds * 6;
    const totalPoints = passingPoints + rushingPoints + receivingPoints;

    document.getElementById('result').innerHTML = "Points: " + Number(totalPoints.toFixed(2));
}
