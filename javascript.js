function calculate() {
	const passingyards = document.getElementById('passingyards').value;
	const passingtds = document.getElementById('passingtds').value;
	const interceptionsthrown = document.getElementById('interceptionsthrown').value;

	const rushingyards = document.getElementById('rushingyards').value;
	const rushingtds = document.getElementById('rushingtds').value;

	const receptions = document.getElementById('receptions').value;
	const receivingyards = document.getElementById('receivingyards').value;
	const receivingtds = document.getElementById('receivingtds').value;

	const passingPoints = (passingyards/25) + (passingtds*4) + (interceptionsthrown*(-1));
	const rushingPoints = (rushingtds*6) + (rushingyards/10);
	const receivingPoints = (receptions) + (receivingyards/10) + (receivingtds*6);
	const totalPoints = parseFloat(passingPoints) + parseFloat(rushingPoints) + parseFloat( receivingPoints);
	
	document.getElementById('result').innerHTML = Number(totalPoints.toFixed(2));
}

function clear() {
	document.getElementById('passingyards').value = '';
	document.getElementById('passingtds').value = '';
	document.getElementById('interceptionsthrown').value = '';

	document.getElementById('rushingyards').value = '';
	document.getElementById('rushingtds').value = '';

	document.getElementById('receptions').value = '';
	document.getElementById('receivingyards').value = '';
	document.getElementById('receivingtds').value = '';
}