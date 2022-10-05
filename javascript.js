function calculate() {
	var passingyards = document.getElementById('passingyards').value;
	var passingtds = document.getElementById('passingtds').value;
	var interceptionsthrown = document.getElementById('interceptionsthrown').value;

	var rushingyards = document.getElementById('rushingyards').value;
	var rushingtds = document.getElementById('rushingtds').value;

	var receptions = document.getElementById('receptions').value;
	var receivingyards = document.getElementById('receivingyards').value;
	var receivingtds = document.getElementById('receivingtds').value;

	var passingPoints = (passingyards/25) + (passingtds*4) + (interceptionsthrown*(-1));
	var rushingPoints = (rushingyards/10) + (rushingtds*6);
	var receivingPoints = (receptions) + (receivingyards/10) + (receivingtds*6);
	
	document.getElementById('result').innerHTML = passingPoints;
}
