function clickLoginButton(){
	if (userName.value) {
		localStorage.setItem("username", document.getElementById('userName').value);
		name =localStorage.getItem("username");
    }
    else {
		document.getElementById('noName').style.display = 'block' ;
		document.getElementById('logName').style.display = 'none' ;
		return false;
	}
	 location.replace('trivia.html'); 
}

document.getElementById('nameLabel').innerHTML = name;

function cat01screen(){
	document.getElementById('greeting').style.display ='none';
	document.getElementById('categories').style.display = 'none' ;
	document.getElementById('cat01screen').style.display = 'block' ;
	timer0101(); //dispara el contador
	document.getElementById('counter0101').style.display = 'block'; //muestra el contador
}

let scoreCat01 = 0;

function addScoreCat01(){ //imprime respuestas0101 y suma al score

	scoreCat01++;
	let scoreStr = scoreCat01.toString()
	document.getElementById('scoreLabel0103').innerHTML = scoreStr +' ';
	document.getElementById('scoreLabel0102').innerHTML = scoreStr +' ';
	document.getElementById('scoreLabel0101').innerHTML = scoreStr +' ';
}

function answer0101() { //imprime respuestas0101 y NO SUMA al score
	clearInterval(countdown); // detiene counter
	document.getElementById('question0101').style.display = 'none'; //oculta pregunta0101
	document.getElementById('answer0101').style.display = 'block'; //trae respuesta0101

}

function question0102(){
	document.getElementById('question0101').style.display = 'none'; //oculta pregunta0101
	document.getElementById('answer0101').style.display = 'none'; //oculta respuesta0101
	document.getElementById('question0102').style.display = 'block'; //trae pregunta0102
	timer0102(); //dispara el contador
	document.getElementById('counter0102').style.display = 'block'; //muestra el contador
}

function answer0102(){
	clearInterval(countdown); // detiene counter
	document.getElementById('question0102').style.display = 'none'; //oculta pregunta 0102
	document.getElementById('answer0102').style.display = 'block'; //trae respuesta0102
}

function question0103(){
	document.getElementById('question0102').style.display = 'none'; //oculta pregunta0102
	document.getElementById('answer0102').style.display = 'none'; //oculta respuesta0102
	document.getElementById('question0103').style.display = 'block'; //trae pregunta0103
	timer0103(); //dispara el contador
	document.getElementById('counter0103').style.display = 'block'; //muestra el contador
}

function answer0103(){
	clearInterval(countdown); // detiene counter
	document.getElementById('question0103').style.display = 'none'; //oculta pregunta0103
	document.getElementById('answer0103').style.display = 'block'; //trae respuesta0103
}

function printScoreCat01(){
	
	if (scoreCat01 ===3){
		document.getElementById('cat01screen').style.display ='none';
		document.getElementById('wellDoneScore').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else if (scoreCat01 ===2){
		document.getElementById('cat01screen').style.display ='none';
		document.getElementById('enoughScore').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else if (scoreCat01 ===1){
		document.getElementById('cat01screen').style.display ='none';
		document.getElementById('keepGoing').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else {
		document.getElementById('cat01screen').style.display ='none';
		document.getElementById('notGood').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
		
}

function playAgain(){
	location.reload(true);
	document.getElementById('wellDoneScore').style.display ='none';
	document.getElementById('categories').style.display ='block';
  }

  function restart(){
  	location.replace('index.html').reload(true);
	document.getElementById('wellDoneScore').style.display ='none';
	document.getElementById('categories').style.display ='block';
  }
function exitGame(){
	document.getElementById('nameLabel2').innerHTML = name;
	document.getElementById('logo-container').style.display = 'block';
	document.getElementById('goodBye').style.display = 'block';
	document.getElementById('finalButtons').style.display = 'none';
	document.getElementById('wellDoneScore').style.display = 'none';
	document.getElementById('enoughScore').style.display = 'none';
	document.getElementById('keepGoing').style.display = 'none';
	document.getElementById('notGood').style.display = 'none';

}

function cat02screen(){
	document.getElementById('greeting').style.display ='none';
	document.getElementById('categories').style.display = 'none' ;
	document.getElementById('cat02screen').style.display = 'block' ;
	timer0201(); //dispara el contador
	document.getElementById('counter0201').style.display = 'block'; //muestra el contador
}

let scoreCat02 = 0;

function addScoreCat02(){ //imprime respuestas0101 y suma al score

	scoreCat02++;
	let scoreStr = scoreCat02.toString()
	document.getElementById('scoreLabel0103').innerHTML = scoreStr +' ';
	document.getElementById('scoreLabel0102').innerHTML = scoreStr +' ';
	document.getElementById('scoreLabel0101').innerHTML = scoreStr +' ';
}

function answer0201() { 
	clearInterval(countdown); // detiene counter
	document.getElementById('question0201').style.display = 'none'; 
	document.getElementById('answer0201').style.display = 'block'; 
}

function question0202(){
	document.getElementById('question0201').style.display = 'none';
	document.getElementById('answer0201').style.display = 'none'; 
	document.getElementById('question0202').style.display = 'block'; 
	timer0202(); //dispara el contador
	document.getElementById('counter0202').style.display = 'block'; //muestra el contador
}

function answer0202(){
	clearInterval(countdown); // detiene counter
	document.getElementById('question0202').style.display = 'none'; 
	document.getElementById('answer0202').style.display = 'block'; 
}

function question0203(){		
	document.getElementById('question0202').style.display = 'none'; 
	document.getElementById('answer0202').style.display = 'none'; 
	document.getElementById('question0203').style.display = 'block'; 
	timer0203(); //dispara el contador
	document.getElementById('counter0203').style.display = 'block'; //muestra el contador
}

function answer0203(){
	clearInterval(countdown); // detiene counter
	document.getElementById('question0203').style.display = 'none'; 
	document.getElementById('answer0203').style.display = 'block'; 
}

function printScoreCat02(){
	
	if (scoreCat02 ===3){
		document.getElementById('cat02screen').style.display ='none';
		document.getElementById('wellDoneScore').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else if (scoreCat02 ===2){
		document.getElementById('cat02screen').style.display ='none';
		document.getElementById('enoughScore').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else if (scoreCat02 ===1){
		document.getElementById('cat02screen').style.display ='none';
		document.getElementById('keepGoing').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else {
		document.getElementById('cat02screen').style.display ='none';
		document.getElementById('notGood').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
		
}

//Counter

let countdown;	
	
	function timer0101(seconds = 10) {		
		const now = Date.now();
		const then = now + seconds * 1000;
		displayTimeLeft(seconds);
		
	countdown =	setInterval(() => {
			const secondsLeft = Math.round((then - Date.now())/1000);
	// lo detiene
		if (secondsLeft <= 0) {
			clearInterval(countdown);	
			answer0101();

			return;

		}
	// lo muestra
			displayTimeLeft(secondsLeft);
		},1000);
	}

	function timer0102(seconds = 10) {		
		const now = Date.now();
		const then = now + seconds * 1000;
		displayTimeLeft(seconds);
		
	countdown =	setInterval(() => {
			const secondsLeft = Math.round((then - Date.now())/1000);
	// lo detiene
		if (secondsLeft <= 0) {
			clearInterval(countdown);	
			answer0102();

			return;

		}
	// lo muestra
			displayTimeLeft(secondsLeft);
		},1000);
	}

	function timer0103(seconds = 10) {		
		const now = Date.now();
		const then = now + seconds * 1000;
		displayTimeLeft(seconds);
		
	countdown =	setInterval(() => {
			const secondsLeft = Math.round((then - Date.now())/1000);
	// lo detiene
		if (secondsLeft <= 0) {
			clearInterval(countdown);	
			answer0103();

			return;

		}
	// lo muestra
			displayTimeLeft(secondsLeft);
		},1000);
	}

	function timer0201(seconds = 10) {		
		const now = Date.now();
		const then = now + seconds * 1000;
		displayTimeLeft(seconds);
		
	countdown =	setInterval(() => {
			const secondsLeft = Math.round((then - Date.now())/1000);
	// lo detiene
		if (secondsLeft <= 0) {
			clearInterval(countdown);	
			answer0201();

			return;

		}
	// lo muestra
			displayTimeLeft(secondsLeft);
		},1000);
	}
	
	function timer0202(seconds = 10) {		
		const now = Date.now();
		const then = now + seconds * 1000;
		displayTimeLeft(seconds);
		
	countdown =	setInterval(() => {
			const secondsLeft = Math.round((then - Date.now())/1000);
	// lo detiene
		if (secondsLeft <= 0) {
			clearInterval(countdown);	
			answer0202();

			return;

		}
	// lo muestra
			displayTimeLeft(secondsLeft);
		},1000);
	}

	function timer0203(seconds = 10) {		
		const now = Date.now();
		const then = now + seconds * 1000;
		displayTimeLeft(seconds);
		
	countdown =	setInterval(() => {
			const secondsLeft = Math.round((then - Date.now())/1000);
	// lo detiene
		if (secondsLeft <= 0) {
			clearInterval(countdown);	
			answer0203();

			return;

		}
	// lo muestra
			displayTimeLeft(secondsLeft);
		},1000);
	}

	function displayTimeLeft(seconds) {
		const remainderSeconds = seconds % 60;
		const display = `${remainderSeconds}`;
		console.log({remainderSeconds});
		document.getElementById('counter0101').innerHTML = display;
		document.getElementById('counter0102').innerHTML = display;
		document.getElementById('counter0103').innerHTML = display;
		document.getElementById('counter0201').innerHTML = display;
		document.getElementById('counter0202').innerHTML = display;
		document.getElementById('counter0203').innerHTML = display;
	}	