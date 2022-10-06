function cler() {
	document.getElementById('passingyards').value = "";
	document.getElementById('passingtds').value = "";
	document.getElementById('interceptionsthrown').value = "";
	console.log(document.getElementById("passingyards").value)
	document.getElementById('rushingyards').value = "";
	document.getElementById('rushingtds').value = "";

	document.getElementById('receptions').value = "";
	document.getElementById('receivingyards').value = "";
	document.getElementById('receivingtds').value = "";

	document.getElementById('result').innerHTML = "Points: 0";
}

function calculato() {
	const passingyards = document.getElementById('passingyards').value;
	const passingtds = document.getElementById('passingtds').value;
	const interceptionsthrown = document.getElementById('interceptionsthrown').value;

	const rushingyards = document.getElementById('rushingyards').value;
	const rushingtds = document.getElementById('rushingtds').value;

	const receptions = document.getElementById('receptions').value;
	const receivingyards = document.getElementById('receivingyards').value;
	const receivingtds = document.getElementById('receivingtds').value;

	const passingPoints = parseFloat(passingyards/25) + parseFloat(passingtds*4) + parseFloat(interceptionsthrown*(-1));
	const rushingPoints = parseFloat(rushingtds*6) + parseFloat(rushingyards/10);
	const receivingPoints = parseFloat(receptions) + parseFloat(receivingyards/10) + parseFloat(receivingtds*6);
	const totalPoints = parseFloat(passingPoints) + parseFloat(rushingPoints) + parseFloat( receivingPoints);
	
	document.getElementById('result').innerHTML = "Points: " + Number(totalPoints.toFixed(2));
}
