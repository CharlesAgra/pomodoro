var tag = document.querySelector('#timer');
var buttonOne = document.querySelector('#start');
var buttonTwo = document.querySelector('#stop');
var buttonThree = document.querySelector('#reset');

var seconds;
var minutes;
var interval;
var pomodoroFoiClicado;
var shortBreakFoiClicado;
var longBreakFoiClicado;

var audio = document.createElement('audio');
audio.src = './hey-brother.mp3';

var pomodoroId = document.querySelector('#pomodoro');
var shortBreakId = document.querySelector('#short-break');
var longBreakId = document.querySelector('#long-break');

function startTimer(){
	interval = setInterval(timerIt, 1000);
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

	startTimer();
}

function shortBreak(){
	tag.innerHTML = '5:00';
	seconds = 60;
	minutes = 4;
	pomodoroFoiClicado = false;
	shortBreakFoiClicado = true;
	longBreakFoiClicado = false;

	startTimer();
}

function longBreak(){
	tag.innerHTML = '10:00';
	seconds = 60;
	minutes = 9;
	pomodoroFoiClicado = false;
	shortBreakFoiClicado = false;
	longBreakFoiClicado = true;

	startTimer();
}