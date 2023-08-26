document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('csvTable');
    const weekSelect = document.getElementById('weekSelect');

    // Function to convert CSV to HTML table
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
        for (let i = 1; i < lines.length; i++) {
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

    // Function to update the table based on the selected week
    function updateTable() {
        const selectedWeek = "data/" + weekSelect.value;
        if (selectedWeek === 'position') {
            table.innerHTML = ''; // Clear the table
        } else {
            // Load and display the selected CSV data
            fetch(selectedWeek)
                .then(response => response.text())
                .then(data => {
                    table.innerHTML = convertCSVToTable(data);
                })
                .catch(error => console.error('Error:', error));
        }
    }

    // Add an event listener to handle changes in the dropdown
    weekSelect.addEventListener('change', updateTable);
});

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
