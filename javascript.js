function cler() {
	document.getElementById('passingyards').value = "";
	document.getElementById('passingtds').value = "";
	document.getElementById('interceptionsthrown').value = "";
	document.getElementById('rushingyards').value = "";
	document.getElementById('rushingtds').value = "";

	document.getElementById('receptions').value = "";
	document.getElementById('receivingyards').value = "";
	document.getElementById('receivingtds').value = "";

	document.getElementById('result').innerHTML = "Points: 0";
}

function calculato() {
	var passingyards = document.getElementById('passingyards').value;
	var passingtds = document.getElementById('passingtds').value;
	var interceptionsthrown = document.getElementById('interceptionsthrown').value;

	var rushingyards = document.getElementById('rushingyards').value;
	var rushingtds = document.getElementById('rushingtds').value;

	var receptions = document.getElementById('receptions').value;
	var receivingyards = document.getElementById('receivingyards').value;
	var receivingtds = document.getElementById('receivingtds').value;

    if(passingyards === "") {
        passingyards = 0;
    }
    if(passingtds === "") {
        passingtds = 0;
    }
    if(interceptionsthrown === "") {
        interceptionsthrown = 0;
    }

    if(rushingyards === "") {
        rushingyards = 0;
    }
    if(rushingtds === "") {
        rushingtds = 0;
    }

    if(receptions === "") {
        receptions = 0;
    }
    if(receivingyards === "") {
        receivingyards = 0;
    }
    if(receivingtds === "") {
        receivingtds = 0;
    }

	const passingPoints = parseFloat(passingyards/25) + parseFloat(passingtds*4) + parseFloat(interceptionsthrown*(-1));
	const rushingPoints = parseFloat(rushingtds*6) + parseFloat(rushingyards/10);
	const receivingPoints = parseFloat(receptions) + parseFloat(receivingyards/10) + parseFloat(receivingtds*6);
	const totalPoints = parseFloat(passingPoints) + parseFloat(rushingPoints) + parseFloat( receivingPoints);
	
	document.getElementById('result').innerHTML = "Points: " + Number(totalPoints.toFixed(2));
}