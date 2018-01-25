var tag = document.querySelector('#timer');
var buttonOne = document.querySelector('#start');
var buttonTwo = document.querySelector('#stop');
var buttonThree = document.querySelector('#reset');
var pomodoroId = document.querySelector('#pomodoro');
var shortBreakId = document.querySelector('#short-break');
var longBreakId = document.querySelector('#long-break');

var seconds;
var minutes;
var interval;

var pomodoroFoiClicado;
var shortBreakFoiClicado;
var longBreakFoiClicado;
var btnStart = false;


var audio = document.createElement('audio');
audio.src = './mega-alarme.mp3';

function startTimer(){
	if(btnStart == false){
		btnStart = true;
		interval = setInterval(timerIt, 1000);
	}
}

function timerIt(){
	seconds--;
	
	var a = new String(seconds);
	var b = new String(minutes);
	verify(a, b);


	if(seconds == 0 && minutes == 0){
		audio.play();
		stopTimer();
	}else if(seconds == 0){
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
	btnStart = false;
}

function resetTimer(){
	if(pomodoroFoiClicado == true){
		tag.innerHTML = '25:00';
		seconds = 60;
		minutes = 24;
	}else if(shortBreakFoiClicado == true){
		tag.innerHTML = '5:00';
		seconds = 60;
		minutes = 4;
	}else if(longBreakFoiClicado == true){
		tag.innerHTML = '10:00';
		seconds = 60;
		minutes = 9;
	}else{
		//go on
	}
}

function pomodoro(){
	tag.innerHTML = '25:00';
	seconds = 60;
	minutes = 24;
	pomodoroFoiClicado = true;
	shortBreakFoiClicado = false;
	longBreakFoiClicado = false;

	document.getElementById('start').disabled=false;
	document.getElementById('stop').disabled=false;
	document.getElementById('reset').disabled=false;

	pomodoroId.style.backgroundColor = '#1ab2ff';
	shortBreakId.style.backgroundColor = '#80d4ff';
	longBreakId.style.backgroundColor = '#80d4ff';

	startTimer();
}

function shortBreak(){
	tag.innerHTML = '5:00';
	seconds = 60;
	minutes = 4;
	pomodoroFoiClicado = false;
	shortBreakFoiClicado = true;
	longBreakFoiClicado = false;

	document.getElementById('start').disabled=false;
	document.getElementById('stop').disabled=false;
	document.getElementById('reset').disabled=false;
	
	pomodoroId.style.backgroundColor = '#80d4ff';
	shortBreakId.style.backgroundColor = '#1ab2ff';
	longBreakId.style.backgroundColor = '#80d4ff';

	startTimer();
}

function longBreak(){
	tag.innerHTML = '10:00';
	seconds = 60;
	minutes = 9;
	pomodoroFoiClicado = false;
	shortBreakFoiClicado = false;
	longBreakFoiClicado = true;

	document.getElementById('start').disabled=false;
	document.getElementById('stop').disabled=false;
	document.getElementById('reset').disabled=false;
	
	pomodoroId.style.backgroundColor = '#80d4ff';
	shortBreakId.style.backgroundColor = '#80d4ff';
	longBreakId.style.backgroundColor = '#1ab2ff';
	
	startTimer();
}