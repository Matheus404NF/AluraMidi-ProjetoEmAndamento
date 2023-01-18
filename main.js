"use strict"			
			
const allButtons = document.querySelectorAll("button");			
			
console.log(allButtons);			
			
const allAudios = document.querySelectorAll("audio");			
			
console.log(allAudios);			
			
function playSound(aSound) {			
	allAudios[aSound].play();		
}			
			
for(let i=0; i<allButtons.length; i++) {			
	allButtons[i].onclick = function() {		
		playSound(i);	
	}		
			
			
}			
			
setInterval(function(){ document.querySelector("body").style.background = `linear-gradient(135deg, rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}), rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` }, 500); 			
			
			
			
