function createTable(headers, data) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const headerRow = document.createElement('tr');

  headers.forEach((header, index) => {
    const th = document.createElement('th');
    th.textContent = header;
    th.classList.add('table-header'); // Add the 'table-header' class
    th.addEventListener('click', () => {
      sortTable(index);
    });
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  data.forEach((row) => {
    const tr = document.createElement("tr");
    headers.forEach((header, index) => {
      const td = document.createElement("td");
      td.textContent = row[index];
      td.setAttribute("data-label", header); // Add data-label attribute
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  return table;
}

function sortTable(columnIndex) {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const sortedRows = rows.sort((a, b) => {
    const aCell = a.cells[columnIndex].textContent;
    const bCell = b.cells[columnIndex].textContent;

    if (!isNaN(aCell) && !isNaN(bCell)) {
      // Compare numbers
      return parseFloat(bCell) - parseFloat(aCell);
    } else {
      // Compare text
      return aCell.localeCompare(bCell);
    }
  });

  tbody.innerHTML = '';
  sortedRows.forEach(row => tbody.appendChild(row));
}

function showPositionInfo() {
  const positionSelect = document.getElementById('positionSelect');
  const selectedPosition = positionSelect.value;
  const infoContainer = document.getElementById('infoContainer');

  infoContainer.innerHTML = ''; // Clear the previous content

  let headers;

  let data;

	if (selectedPosition === 'position') {
	  // Display text for the 'position' case
	  infoContainer.innerHTML = 'Choose a position to see players<br>More information can be found on <a href="https://www.gobound.com/ia/ihsaa/football/2022-23/leaderlist?competitor=athlete&range=season&block=total&idMetric=h20181120102641480fac86d6044f318&idGroup=h202208120706282640147eebf2ffa4a">GoBound</a>';
	  infoContainer.style.display = 'block';
	  return;
	}
	
  switch (selectedPosition) {
    case 'qbs':
	  headers = ['Player', 'Grade/Position', 'Number and School', 'Completions', 'Attemps', 'Percent', 'Yards'];
      data = [
		['Beau Goodwin', 'JR QB/DL', '#34 Kingsley-Pierson', '149', '218', '68.3%', '2068'	],
        ['Brodyn Pryor', 'FR QB/DB', '#8 Woodbine', '133', '262', '50.8%', '2327'],
		['Shane Helmick', 'JR QB/LB', '#12 Moravia', '126', '222', '56.8%', '2400'],
		['Noah John', 'JR QB', '#11 Grand View Christian', '125', '230', '54.3%', '1691'],
		['Chase Spieker', 'SO QB/S', '#5 CAM', '113', '173', '65.3%', '1652'],
		['Isaac Clark', 'JR QB/DB', '#12 Gladbrook-Reinbeck', '104', '175', '59.4%', '1878'],
		['Dallas Smith', 'SO QB/DB', '#2 Twin Cedars', '103', '223', '46.2%', '1302'],
		['Seth Hudson', 'JR QB/S', '#7 East Union', '92', '159', '57.9%', '1181'],
		['Blayne Smith', 'SO QB/DB', '#15 Ar-We-Va', '87', '192', '45.3%', '869'],
		['Zach Thornburg', 'JR QB/CB', '#9 East Mills', '83', '185', '44.9%', '1170'],
		['JT Laufersweiler', 'JR QB/DB', '#11 St. Edmond', '82', '163', '50.3%', '1409'],
		['Colby Eskildsen', 'SO QB/LB', '#12 Northwood-Kensett', '71', '137', '51.8%', '687'],
		['Cooper Oberbroeckling', 'JR QB/CB', '#17 Martensdale-St Marys', '68', '154', '44.2%', '1072'],
		['Brogyn Greensky', 'JR QB/LB', '#4 North Iowa', '62', '142', '43.7%', '965'],
		['Mason McIntosh', 'JR QB/LB', '#16 West Harrison', '58', '121', '47.9%', '1003'],
		['Nolan Grebin', 'JR QB/S', '#2 Stanton', '57', '120', '47.5%', '746'],
		['Jack Adams', 'SO QB/DE', '#7 Riceville', '57', '131', '43.5%', '952'],
		['Dalton Mudderman', 'SO QB/LB', '#5 Kee', '55', '144', '38.2%', '922'],
		['Aaron Olsen', 'SO QB/S', '#3 Audubon', '48', '80', '60.0%', '641'],
		['Gabe Funk', 'SO QB/DB', '#17 Lenox', '48', '90', '53.3%', '803'],
		['Caden Page', 'SO QB/LB', '#12 Murray', '47', '99', '47.5%', '597'],
		['Ethan Bockelman', 'JR QB/DB', '#22 Lone Tree', '45', '103', '43.7%', '741']
      ];
      break;
    case 'wrs':
	  headers = ['Player', 'Grade/Position', 'Number and School', 'Receptions', 'Yards', 'Yard per Catch', 'Longest for TD', 'TDS'];
      data = [
        ['Jabari Woodbury', 'JR WR', '#2 GMG', '57', '1018', '17.9', '65', '9'],
		['Garrett Watts', 'JR WR/DB', '#7 Montezuma', '52', '1163', '22.4', '53', '22'],
		['Kooper Julseth', 'SO WR/DB', '#1 Northwood-Kensett', '36', '384', '10.7', '64', '3'],
		['Dominic Coleman', 'JR WR/DE', '#23 BGM', '36', '611', '17.0', '58', '9'],
		['Levi Molyneux', 'SO WR/DB', '#8 Tri-County', '30', '334', '11.1', '21', '4'],
		['William Denny', 'JR WR/DB', '#22 Martensdale-St Marys', '30', '434', '14.5', '22', '4'],
		['Lucas Ahrenstorff', 'JR WR/LB', '#1 Harris-Lake Park', '28', '447', '16.0', '45', '7']
      ];
      break;
    case 'rbs':
	  headers = ['Player', 'Grade/Position', 'Number and School', 'Carrys', 'Yards', 'Yard per Carry', 'TDS'];
      data = [
        ['Trey Fisher', 'SO RB/LB', '#89 Southeast Warren', '189', '1288', '6.8', '19'],
		['Kade Mullins', 'JR RB/LB', '#23 Martensdale-St Marys', '181', '1247', '6.9', '20'],
		['Austin Williams', 'JR LB/RB', '#20 CAM', '150', '851', '5.7', '16'],
		['Landon Montag', 'JR RB/LB', '#24 West Bend-Mallard', '150', '834', '5.6', '11'],
		['MaKade Bloker', 'JR RB/LB', '#11 Clarksville', '149', '1152', '7.7', '14'],
		['Brett Plants', 'SO RB/LB', '#22 Montezuma', '134', '903', '6.7', '8'],
		['Nate Curry', 'JR RB/LB', '#38 Twin Cedars', '122', '400', '3.3', '1'],
		['Brody Sternhagen', 'JR RB/CB', '#9 HLV', '111', '659', '5.9', '9']
      ];
      break;
  }

  const table = createTable(headers, data);
  infoContainer.appendChild(table);
  infoContainer.style.display = 'block';
}

window.onload = function() {
  showPositionInfo();
}