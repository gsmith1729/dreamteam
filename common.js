document.getElementById("normalbed").style.display='inline'
function changebed(){
	if (document.getElementById("normalbed").style.display=='inline') {
		document.getElementById("normalbed").style.display='none';
		document.getElementById("bluebed").style.display='inline';
	}
	else {
		document.getElementById("normalbed").style.display='inline';
		document.getElementById("bluebed").style.display='none';
	}

}
