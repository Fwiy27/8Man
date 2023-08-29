document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("stat").style.visibility = "hidden";

    // Get select elements
    const skillSelect = document.getElementById('skillSelect');

    skillSelect.addEventListener('change', updateTable);

    const infoContainer = document.getElementById('infoContainer'); // Get the container
    const table = infoContainer.querySelector('#csvTable'); // Get the table within the container
    let currentSortColumn = null;
    let isDescending = false;

    function updateTable() {
        document.getElementById("stat").style.visibility = "hidden";
        // Remove existing event listeners from table headers
        const headers = document.querySelectorAll('#csvTable th');
        for (const header of headers) {
            header.removeEventListener('click', headerClickHandler);
        }

        const selectedSkill = skillSelect.value;

        // Check if both skill are selected
        if (selectedSkill) {
            document.getElementById("stat").style.visibility = "visible";
            const csvFileName = `../data/schedules/${selectedSkill}.csv`;
            console.log(csvFileName);

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

                    // Add click event listeners to table headers for sorting
                    for (const header of headers) {
                        header.addEventListener('click', headerClickHandler);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    // Create a table with one header cell saying "No Data"
                    document.querySelector('#csvTable').innerHTML = '<tr><th colspan="' + headers.length + '">No Data</th></tr>';
                });
        } else {
            document.querySelector('#csvTable').innerHTML = ''; // Clear the table if skill is not selected
        }
    }

    // Initial table setup (in case of pre-selected values)
    updateTable();
});

// Function to handle header click event for sorting
function headerClickHandler() {
    const columnIndex = Array.from(table.querySelectorAll('th')).indexOf(this);

    if (columnIndex !== -1) {
        if (currentSortColumn === columnIndex) {
            isDescending = !isDescending;
        } else {
            currentSortColumn = columnIndex;
            isDescending = false;
        }
        sortTable(table, columnIndex, isDescending);
    }
}

function sortTable(table, columnIndex, isDescending) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.getElementsByTagName('tr'));

    rows.sort((a, b) => {
        const aCell = a.getElementsByTagName('td')[columnIndex];
        const bCell = b.getElementsByTagName('td')[columnIndex];

        // Check if the cells exist before accessing textContent
        if (aCell && bCell) {
            const aValue = aCell.textContent;
            const bValue = bCell.textContent;

            // Check if the values are numeric (can be parsed as numbers)
            const isANumeric = !isNaN(parseFloat(aValue)) && isFinite(aValue);
            const isBNumeric = !isNaN(parseFloat(bValue)) && isFinite(bValue);

            if (isANumeric && isBNumeric) {
                if (isDescending) {
                    return parseFloat(bValue) - parseFloat(aValue);
                } else {
                    return parseFloat(aValue) - parseFloat(bValue);
                }
            } else {
                // If one or both values are not numeric, perform alphanumeric sorting
                if (isDescending) {
                    return bValue.localeCompare(aValue);
                } else {
                    return aValue.localeCompare(bValue);
                }
            }
        } else {
            // Handle the case where one of the cells doesn't exist
            return 0;
        }
    });

    // Clear and re-add sorted rows to the table
    tbody.innerHTML = '';
    for (const row of rows) {
        tbody.appendChild(row);
    }
}


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
