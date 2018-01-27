var timeslept=0
var sleeping
function sleep(){
	timeslept+=1
	document.getElementById('time').innerHTML=timeslept
}
document.getElementById("normalbed").style.display='inline'
function changebed(){
	if (document.getElementById("normalbed").style.display=='inline') {
		document.getElementById("normalbed").style.display='none';
		document.getElementById("bluebed").style.display='inline';
		sleeping=setInterval(sleep,1000)
	}
	else {
		document.getElementById("normalbed").style.display='inline';
		document.getElementById("bluebed").style.display='none';
		
		clearInterval(sleeping)
		document.getElementById('time').innerHTML=0
		timeslept=0
	}

}
