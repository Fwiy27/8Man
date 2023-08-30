document.addEventListener('DOMContentLoaded', function () {
    // Get select elements
    document.getElementById("stat").style.visibility = "hidden";
    const weekSelect = document.getElementById('weekSelect');
    const skillSelect = document.getElementById('skillSelect');

    weekSelect.addEventListener('change', updateTable);
    skillSelect.addEventListener('change', updateTable);

    function updateTable() {
        document.getElementById("stat").style.visibility = "hidden";
        // Remove existing event listeners from table headers
        const headers = document.querySelectorAll('#csvTable th');

        const selectedWeek = weekSelect.value;
        const selectedSkill = skillSelect.value;

        // Check if both week and skill are selected
        if (selectedWeek && selectedSkill) {
            document.getElementById("stat").style.visibility = "visible";
            var csvFileName;
            if (selectedWeek === 'Week0') {
                csvFileName = `../data/${selectedWeek}-${selectedSkill}-half.csv`;
            } else {
                csvFileName = `../data/${selectedWeek}-${selectedSkill}.csv`;
            }

            // Check if the file exists
            fetch(csvFileName)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('File not found');
                    }
                    return response.text();
                })
                .then(data => {
                    const tableContainer = document.querySelector('#csvTable');
                    tableContainer.innerHTML = convertCSVToTable(data);
                    searchTable();

                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    // Create a table with one header cell saying "No Data"
                    document.querySelector('#csvTable').innerHTML = '<tr><th colspan="' + headers.length + '">No Data</th></tr>';
                });
        } else {
            document.querySelector('#csvTable').innerHTML = ''; // Clear the table if either week or skill is not selected
        }
    }

    // Initial table setup (in case of pre-selected values)
    updateTable();
});

function convertCSVToTable(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    let html = '<thead><tr>';

    // Create table headers
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });

    html += '</tr></thead><tbody>';

    // Create table rows
    for (let i = 1; i < lines.length - 1; i++) {
        const row = lines[i].split(',');
        html += '<tr>';
        row.forEach(cell => {
            html += `<td>${cell}</td>`;
        });
        html += '</tr>';
    }

    html += '</tbody>';
    return html;
}

// Function to search and filter table rows by name
function searchTable() {
    const input = document.getElementById('nameSearch');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('csvTable');
    const rows = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those that don't match the search query
    for (let i = 1; i < rows.length; i++) { // Start at 1 to skip the header row
        const nameColumn = rows[i].getElementsByTagName('td')[0]; // Assuming the name is in the first column
        if (nameColumn) {
            const nameValue = nameColumn.textContent || nameColumn.innerText;
            if (nameValue.toUpperCase().indexOf(filter) > -1) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
}