var timeslept=0
var sleeping
function sleep(){
	timeslept+=1
	var r
	if (timeslept%60<10){
		r='0'+timeslept%60
	}
	else {
		r=timeslept%60
	}
	timeformat=Math.floor(timeslept/3600)+'0:0'+Math.floor(timeslept/60)+':'+r
	document.getElementById('time').innerHTML=timeformat
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
		document.getElementById('time').innerHTML='00:00:00'
		timeslept=0
	}

}
