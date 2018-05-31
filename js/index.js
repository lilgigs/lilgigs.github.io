// add an event listener to the form to submit Dave's message

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message





// Variables and Objects

var D2 = {
	name:"D2",
	droidtype:"Astromech Droid", 
	likes:["Getting Into Trouble", "Yelling", "Fire"],
	color:"Blue"
	};
	
var Goldie = {
	name:"Goldie",
	droidtype:"Protocol Droid", 
	likes:["Talking", "Talking a Lot", "Talking Too Much"], 
	color:"Gold"
	};

var years = Math.floor(Math.random() * 1000);	
	

var jsClass = [

{name: 'Alexis', likesRobots: 'no'},
{name: 'Andrew', likesRobots: 'yes'},
{name: 'Bernardo', likesRobots: 'maybe'},
{name: 'Brandon', likesRobots: 'no'},
{name: 'Colburn', likesRobots: 'yes'},
{name: 'Courtney', likesRobots: 'maybe'},
{name: 'David', likesRobots: 'no'},
{name: 'Ejaz', likesRobots: 'yes'},
{name: 'Joanna', likesRobots: 'maybe'},
{name: 'Josh', likesRobots: 'no'},
{name: 'Kaitlyn', likesRobots: 'yes'},
{name: 'Kalynne', likesRobots: 'maybe'},
{name: 'Katie', likesRobots: 'no'},
{name: 'Kevin', likesRobots: 'yes'},
{name: 'Sonyl', likesRobots: 'maybe'},
{name: 'Tenny', likesRobots: 'no'},
{name: 'Alex', likesRobots: 'yes'},
{name: 'Diana', likesRobots: 'no'},
{name: 'Myriam', likesRobots: 'yes'},
{name: 'Nikki', likesRobots: 'maybe'},
{name: 'Tim', likesRobots: 'maybe'},
]

var responses = [
{text: "Let me think about that. <br />", audio: 'audiotag1'},
{text: "Mmm.... <br />", audio: 'audiotag2'},
{text: "huh? <br />", audio: 'audiotag3'},
{text: "I will get back to you in later.<br />", audio: 'audiotag4'},
{text: "Thinking...<br />", audio: 'audiotag1'},
{text: "Thinking really hard...<br />", audio: 'audiotag2'},
]

var sarcasticResponses2 = [
{text: "WHYYYYYYYYYYY <br />", audio: 'audiotag1'},
{text: "Of Course you are going to! <br />", audio: 'audiotag2'},
{text: "Please Stop Doing the Opposite of What I said! <br />", audio: 'audiotag3'},
{text: ".... <br />", audio: 'audiotag4'},
]

var nameGlobal = '';
var robotResponseGlobal = '';
var globalD2 = '';
var globalGoldie = '';

// Good morning

document.onload =  goodMorning ();

function goodMorning () {
document.getElementById('hal').innerHTML += "Good Morning! My Name is " + D2.name +". <br/>";
document.getElementById('whosThis').innerHTML += "<em>Zzzzzzzzz</em> <br/>";
	globalD2 = 'zzz'
	timeoutD2(globalD2)
}

// class loop

function jsClassLoop(message){

   for(var i = 0; i < jsClass.length; i++){
      if(message.includes(jsClass[i].name.toLowerCase()))  {
		 var robots = jsClass[i].likesRobots;
		switch (robots) {
		case 'yes':
		var robotresponse1 = 'likes us';
		var robotresponse2 = 'That is very nice, ';
		break;
		case 'no':
		var robotresponse1 = 'does not like Droids!';
		var robotresponse2 = 'Maybe we do not like ';
		break;
		case 'maybe':
		var robotresponse1 = ', What\'s wrong with Droids!';
		var robotresponse2 = 'Maybe we need to be funnier for ';
		break;
		}	 
		document.getElementById('whosThis').innerHTML += jsClass[i].name + ' ' + robotresponse1 + '!<br />';
		nameGlobal = jsClass[i].name;
		robotResponseGlobal = robotresponse2;
		globalD2 = 1;
		timeout (globalD2);
      }
   }
	 
}


function play_sound(id) {
		document.getElementById(id).play();
	}

// event listener

document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var message = document.getElementById('chatInput').value.toLowerCase();
  messageGlobal = message;
  document.getElementById('dave').innerHTML += message + "<br/>";

  respondToMessage(message);
  document.getElementById("chatInput").value = "";
   
});

// initial chat response


function respondToMessage (chat) {
 if (chat.toLowerCase().includes('please')) {
    document.getElementById('hal').innerHTML += "I'm sorry " + jsClass[Math.floor(Math.random() * jsClass.length)].name + ", I can't do that. <br/>";
	document.getElementById('whosThis').innerHTML += "Coming Right Up! <br/>";
	globalD2 = 2;
	timeoutD2(globalD2);
  }
 else if (chat.toLowerCase().includes('hi ') || chat.toLowerCase().includes('hello'))  {
    document.getElementById('hal').innerHTML += "We already greeted you, what more do you want! <br/>";
	document.getElementById('whosThis').innerHTML += "Hi AGAIN! <br/>";
	globalD2 = 3;
	timeout(globalD2);
	play_sound(sarcasticResponses2[Math.floor(Math.random() * sarcasticResponses2.length)].audio);
  }
   else if (chat.toLowerCase().includes('fun'))  {
	globalGoldie = 'likes';
	timeoutGoldie(globalGoldie);
  }
   else if (chat.match(/\blanguages\b/) || chat.match(/\blanguage\b/))  { // regex
	globalGoldie = 'lang'; 
	timeoutGoldie(globalGoldie);
  }
   else if (chat.toLowerCase().includes('weather'))  {
	globalGoldie = 'weather';
	timeoutGoldie(globalGoldie);
  }
   else  {
	globalGoldie = 'gen';
	timeoutGoldie(globalGoldie);
	}
  
  
};

function timeout (globalD2){
	
	setTimeout ( 'sarcasticD2 (globalD2)', 750 );
	
};

function timeout2 (globalGoldie){
	
	setTimeout ( 'sarcasticGoldie (globalGoldie)', 1000 );
	
};

// slow down --> responses

function timeoutD2 (globalD2){
	
	setTimeout ( 'sarcasticD2 (globalD2)', 1500);
	setTimeout ( 'sarcasticGoldie (globalD2)', 2500);
};

function timeoutGoldie(globalGoldie){
	
	setTimeout ( 'sarcasticGoldie (globalGoldie)', 1500);
	setTimeout ( 'sarcasticD2 (globalGoldie)', 2500);
};



function sarcasticD2 (globalD2) {

globalD2 == 'zzz' ? (document.getElementById('hal').innerHTML += "Please wake up  " + Goldie.name +". <br/>")
:
globalD2 == 'likes' ? (document.getElementById('hal').innerHTML += "The " + Goldie.color + ' ' + Goldie.droidtype + ' ' + 'Likes ' + ": <br/>", likesGoldie())
:
globalD2 == 'lang' ? (document.getElementById('hal').innerHTML += 'Here we go with this again..... <br />', globalGoldie = 1,timeout2(globalGoldie))
:
globalD2 === 'gen' ? (document.getElementById('hal').innerHTML += responses[Math.floor(Math.random() * responses.length)].text, jsClassLoop(messageGlobal))
:
globalD2 == 'weather' ? (document.getElementById('hal').innerHTML += 'Good one! <br />')
:
globalD2 === 1 ? (document.getElementById('hal').innerHTML += robotResponseGlobal + nameGlobal + '!<br />')
:
globalD2 === 2 ? (document.getElementById('hal').innerHTML += sarcasticResponses2[Math.floor(Math.random() * sarcasticResponses2.length)].text, document.getElementById('whosThis').innerHTML += "<br/>")
:
globalD2 === 3 ? (document.getElementById('hal').innerHTML += 'Maybe we should just say Bye... <br />')
: console.log('')

};


function sarcasticGoldie (globalGoldie) {

globalGoldie == 'zzz' ? (document.getElementById('whosThis').innerHTML += "Fine! I'm awake. " + D2.name +". <br/>" )
:
globalGoldie == 'likes' ? (document.getElementById('whosThis').innerHTML += "The " + D2.color + ' ' + D2.droidtype + ' ' + 'Likes ' + ": <br/>", likesD2()) 
:
globalGoldie == 'lang' ? (document.getElementById('whosThis').innerHTML += 'I am fluent in over six million forms of communication! <br />')
:
globalGoldie == 'weather' ? (document.getElementById('whosThis').innerHTML += 'Slight chance of space debris today! <br />')
:
globalGoldie === 'gen' ? (document.getElementById('whosThis').innerHTML += responses[Math.floor(Math.random() * responses.length)].text)
:
globalGoldie === 1 ? (document.getElementById('whosThis').innerHTML += 'I beg your pardon!<br />')
: console.log('')


};


// loop through likes with slowdown
function slowLikesD2(i) {
  setTimeout(function() { document.getElementById('whosThis').innerHTML += D2.likes[i] + "<br/>"}, i * 2500);
}

function slowLikesGoldie(i) {
  setTimeout(function() { document.getElementById('hal').innerHTML += Goldie.likes[i] + "<br/>"}, i * 2500);
}


function likesD2 () { 
for(var i = 0; i < D2.likes.length; i++) {
slowLikesD2(i);
}
};

function likesGoldie () { 
for(var i = 0; i < Goldie.likes.length; i++) {
slowLikesGoldie(i);	
}
};
