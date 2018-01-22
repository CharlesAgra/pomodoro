var tag = document.querySelector('#timer');
var buttonOne = document.querySelector('#start');
var buttonTwo = document.querySelector('#stop');
var buttonThree = document.querySelector('#reset');

var seconds = 60;
var minutes = 24;
var interval;

function startTimer(){
	interval = setInterval(timerIt, 1000);
}

function timerIt(){
	seconds--;
	/*tag.innerHTML = minutes+':'+seconds;*/
	
	var a = new String(seconds);
	var b = new String(minutes);

	verify(a, b);

	if(seconds == 0){
		minutes--;
		seconds = 60;
	}
}

function verify(segundos, minutos){
	if(segundos.length == 2 && minutos.length == 2){
		tag.innerHTML = minutes+':'+seconds;		
	}else if(segundos.length != 2 && minutos.length == 2){
		tag.innerHTML = minutes+':'+'0'+seconds;
	}else if(segundos.length != 2 && minutos.length != 2){
		tag.innerHTML = '0'+minutes+':'+'0'+seconds;
	}else if(segundos.length == 2 && minutos.length == 1){
		tag.innerHTML = '0'+minutos+':'+segundos;
	}else{
		console.log('Acho que acabou eheh');
	}
}


function stopTimer(){
	clearInterval(interval);
}

function resetTimer(){
	minutes = 24;
	seconds = 60;
	tag.innerHTML = '25:00';
}

function changeLink(){
	tag.innerHTML = '5:00';
	seconds = 60;
	minutes = 4;

	startTimer();
}