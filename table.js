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
	  headers = ['Player', 'Grade/Position', 'Number and School', 'Completions', 'Percent', 'Yards', 'TDs', 'INTs', 'Rating'];
      data = [
		['Beau Goodwin', 'JR QB/DL', '#34 Kingsley-Pierson', '149', '68.3%', '2068', '30', '8', '148.0'],
		['Brodyn Pryor', 'FR QB/DB', '#8 Woodbine', '133', '50.8%', '2327', '30', '11', '125.4'],
		['Shane Helmick', 'JR QB/LB', '#12 Moravia', '126', '56.8%', '2400', '39', '4', '147.6'],
		['Noah John', 'JR QB', '#11 Grand View Christian', '125', '54.3%', '1691', '24', '5', '116.1'],
		['Chase Spieker', 'SO QB/S', '#5 CAM', '113', '65.3%', '1652', '26', '7', '145.5'],
		['Isaac Clark', 'JR QB/DB', '#12 Gladbrook-Reinbeck', '104', '59.4%', '1878', '30', '5', '149.5'],
		['Dallas Smith', 'SO QB/DB', '#2 Twin Cedars', '103', '46.2%', '1302', '11', '14', '95.2'],
		['Seth Hudson', 'JR QB/S', '#7 East Union', '92', '57.9%', '1181', '15', '13', '120.3'],
		['Blayne Smith', 'SO QB/DB', '#15 Ar-We-Va', '87', '45.3%', '869', '10', '11', '83.3'],
		['Zach Thornburg', 'JR QB/CB', '#9 East Mills', '83', '44.9%', '1170', '16', '8', '98.0'],
		['JT Laufersweiler', 'JR QB/DB', '#11 St. Edmond', '82', '50.3%', '1409', '15', '9', '122.9'],
		['Colby Eskildsen', 'SO QB/LB', '#12 Northwood-Kensett', '71', '51.8%', '687', '6', '10', '93.9'],
		['Cooper Oberbroeckling', 'JR QB/CB', '#17 Martensdale-St Marys', '68', '44.2%', '1072', '13', '15', '102.7'],
		['Brogyn Greensky', 'JR QB/LB', '#4 North Iowa', '62', '43.7%', '965', '10', '7', '100.8'],
		['Mason McIntosh', 'JR QB/LB', '#16 West Harrison', '58', '47.9%', '1003', '16', '8', '117.5'],
		['Nolan Grebin', 'JR QB/S', '#2 Stanton', '57', '47.5%', '746', '16', '5', '99.7'],
		['Jack Adams', 'SO QB/DE', '#7 Riceville', '57', '43.5%', '952', '13', '6', '104.5'],
		['Dalton Mudderman', 'SO QB/LB', '#5 Kee', '55', '38.2%', '922', '15', '8', '92.0'],
		['Aaron Olsen', 'SO QB/S', '#3 Audubon', '48', '60.0%', '641', '8', '7', '127.3'],
		['Gabe Funk', 'SO QB/DB', '#17 Lenox', '48', '53.3%', '803', '15', '3', '128.2'],
		['Caden Page', 'SO QB/LB', '#12 Murray', '47', '47.5%', '597', '7', '5', '98.2'],
		['Ethan Bockelman', 'JR QB/DB', '#22 Lone Tree', '45', '43.7%', '741', '10', '4', '104.1'],
		['Dallas Smith', 'SO QB/DB', '#2 Twin Cedars', '103', '46.2%', '1302', '11', '14', '95.2'],
		['Colby Eskildsen', 'SO QB/LB', '#12 Northwood-Kensett', '71', '51.8%', '687', '6', '10', '93.9'],
		['Dalton Mudderman', 'SO QB/LB', '#5 Kee', '55', '38.2%', '922', '15', '8', '92.0'],
		['Jayden Hanson', 'JR QB/LB', '#7 Central City', '40', '38.8%', '625', '13', '3', '89.8'],
		['Johnny Milburn', 'SO QB/WR', '#8 Melcher-Dallas', '31', '39.2%', '471', '6', '2', '89.3'],
		['Blayne Smith', 'SO QB/DB', '#15 Ar-We-Va', '87', '45.3%', '869', '10', '11', '83.3'],
		['Bode Wyman', 'SO QB/CB', '#15 Griswold', '30', '34.5%', '400', '3', '6', '73.1'],
		['Judah Bielenberg', 'SO QB/LB', '#10 Siouxland Christian', '25', '31.2%', '263', '3', '8', '58.8'],
		['Carson Schneider', 'FR QB', '#12 West Bend-Mallard', '2', '100.0%', '65', '2', '0', '703.0'],
		['Eli Dee', 'FR QB/DB', '#1 Baxter', '1', '50.0%', '48', '1', '0', '251.6'],
		['Blayne Porter', 'FR QB/S', '#1 Janesville', '1', '50.0%', '46', '1', '0', '243.2'],
		['Jameson Kilworth', 'JR QB/LB', '#8 Exira-EHK', '1', '50.0%', '46', '1', '0', '243.2'],
		['Brody Paulsen', 'JR QB/CB', '#2 CAM', '3', '60.0%', '88', '1', '1', '207.8'],
		['Cam Seuferer', 'SO QB/S', '#12 Southeast Warren', '6', '85.7%', '97', '3', '0', '202.1'],
		['Cam Buffington', 'JR QB/LB', '#33 Winfield-Mt Union', '1', '100.0%', '12', '0', '0', '200.8'],
		['Teagan Hanson', 'FR QB/S', '#10 GTRA', '5', '55.6%', '123', '2', '0', '170.4'],
		['Wyatt Oswald', 'SO QB/LB', '#10 Coon Rapids-Bayard', '30', '58.8%', '577', '7', '3', '153.8'],
		['McKoy Nuss', 'FR QB/LB', '#15 Tripoli', '9', '75.0%', '100', '1', '2', '145.0']
      ];
      break;
    case 'wrs':
	  headers = ['Player', 'Grade/Position', 'Number and School', 'Receptions', 'Yards', 'Yard per Catch', 'TDS'];
      data = [
        ['Jabari Woodbury', 'JR WR', '#2 GMG', '57', '1018', '17.9', '9'],
		['Garrett Watts', 'JR WR/DB', '#7 Montezuma', '52', '1163', '22.4', '22'],
		['Kooper Julseth', 'SO WR/DB', '#1 Northwood-Kensett', '36', '384', '10.7', '3'],
		['Dominic Coleman', 'JR WR/DE', '#23 BGM', '36', '611', '17.0', '9'],
		['Levi Molyneux', 'SO WR/DB', '#8 Tri-County', '30', '334', '11.1', '4'],
		['William Denny', 'JR WR/DB', '#22 Martensdale-St Marys', '30', '434', '14.5', '4'],
		['Lucas Ahrenstorff', 'JR WR/LB', '#1 Harris-Lake Park', '28', '447', '16.0', '7'],
		['Treyton Travis', 'JR WR/CB', '#24 Baxter', '27', '438', '16.2', '10'],
		['Cash Emgarten', 'JR WR/CB', '#10 Exira-EHK', '27', '633', '23.4', '9'],
		['Drew Eilers', 'SO WR/DL', '#2 Gladbrook-Reinbeck', '26', '380', '14.6', '3'],
		['Rason Grail', 'JR WR/S', '#23 East Union', '26', '453', '17.4', '7'],
		['Riley Nichols', 'JR WR/CB', '#9 Martensdale-St Marys', '25', '436', '17.4', '4'],
		['Kaden Kobliska', 'JR WR/DB', '#15 Riceville', '21', '301', '14.3', '4'],
		['Breckin Clatt', 'SO WR/DB', '#14 Colo-Nesco', '21', '306', '14.6', '4'],
		['Drew Fisher', 'FR WR/DB', '#4 Tri-County', '19', '222', '11.7', '2'],
		['Dane Appleby', 'SO WR/DE', '#4 Janesville', '19', '297', '15.6', '6'],
		['Luke Cripps', 'JR WR/S', '#1 Boyer Valley', '19', '250', '13.2', '3'],
		['Kace Patton', 'JR WR/S', '#10 Murray', '19', '193', '10.2', '2'],
		['Cooper Wierson', 'FR WR/DB', '#12 Collins-Maxwell', '18', '312', '17.3', '3'],
		['Harley Molina', 'JR WR/LB', '#24 Ar-We-Va', '18', '178', '9.9', '1'],
		['Emmett Burke', 'FR WR/DB', '#10 Lone Tree', '18', '232', '12.9', '4']
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
		['Brody Sternhagen', 'JR RB/CB', '#9 HLV', '111', '659', '5.9', '9'],
		['Eli Schmidt', 'JR RB/S', '#3 Clarksville', '109', '678', '6.2', '16'],
		['Triton Gwinn', 'JR RB/LB', '#22 Mormon Trail', '106', '750', '7.1', '15'],
		['Silas Walston', 'JR RB/DE', '#33 Bedford', '100', '767', '7.7', '9'],
		['Zane Johnson', 'SO RB/LB', '#7 Griswold', '95', '369', '3.9', '3'],
		['Austin Vaverka', 'JR RB/LB', '#5 Gladbrook-Reinbeck', '90', '1155', '12.8', '20'],
		['Kaeden Burger', 'JR RB', '#33 Grand View Christian', '88', '575', '6.5', '10'],
		['Kendrick Mastin', 'JR RB/LB', '#9 Murray', '84', '397', '4.7', '5'],
		['Wyatt Ragaller', 'FR RB/DB', '#16 Ar-We-Va', '82', '518', '6.3', '7'],
		['Max Henstorf', 'JR RB/LB', '#7 HLV', '81', '446', '5.5', '6'],
		['Jordan Goad', 'SO RB/CB', '#1 Springville', '80', '240', '3.0', '0'],
		['Wade Ragaller', 'SO RB/LB', '#28 Ar-We-Va', '79', '512', '6.5', '5'],
		['Cole Milks', 'JR RB/S', '#11 Winfield-Mt Union', '79', '421', '5.3', '7'],
		['Caleb Hemphill', 'JR RB/LB', '#3 Harris-Lake Park', '78', '406', '5.2', '3'],
		['Louden Huisenga', 'SO RB/LB', '#8 WACO', '75', '463', '6.2', '11'],
		['Matthew Klostermann', 'SO RB/LB', '#22 Central City', '73', '579', '7.9', '10']
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