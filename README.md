# Chatbot!

## Stranger, D2, Goldie

## Dos
 * Responds to chat inputs in basic ways. Specific commands return more specific responses. 
 * On page load, the Droids will greet you and converse back and fourth.

### Commands

 * Basic chat submissions will return generic responses along the lines of thinking about a reponse.
	EX: 'Let me think about that.' , 'I will get back to you in later.'
	Sample Input: 'How are you?'
	
 * Classmate Name: If classmate name is submitted it will return a response from the Droids on whether that classmate likes Droids.
 	Sample Input:'What do you think of Sonyl?'
	
 * Please: 'Please' will act like a request and the Droids will respond as well as include a random name from the class list.
	Sample Input: 'Can you please open the the doors?'
	
 * Weather: If the word 'weather' is submitted it will return a light hearted response about weather in space.
 	Sample Input: 'What is the weather like today?'
	
 * Hi or Hello: 'Hi' or 'Hello' can be submitted and it will return sarcastic reponse about already greeting you. It will also play random Droid sounds.
 	Sample Input: 'Hi Droids!'
	
 * Fun: If the word 'fun' is submitted it will return what the Droids like. As well as a description of them.
 	Sample Input: 'What do you like to do for fun?'
	
 * Languages: If the word 'languages' or 'language' is used Goldie will tell you how many he speaks.

### Approach

 * Overall approach I think I did everything a little too piecemeal based on the requirements. If I retried the exercise I would let the requirements fall more naturally as the chat bot expands.
 * I also tried to vary the functions I used.
 * I wanted to mimic two Droids interacting with each other but I came up short of my vision. 
	 - I wanted to incoorpoate more visiuals in the HTML and more sounds as responses. 
 * I also tried to make the timing of the responses mimic a normal conversation flow with the use of timeouts.
 * I made use of includes functions rather than full sentence inputs because I thought that allowed more flexibilty in what you could type. This also can make for some weird responses.
 * I am lowercasing inputs to make finding the correct response simpler but there is probably a better way.


## Unsolved Problems
 
 * Combining commands can get a little messy, mainly around classmate name.
	EX: Saying a classmate name and 'Hi' gives both responses.
 * Responses don't feel natural all the time, too scripted.
 * Timing could be better.
 * Chat can be hard to read after many responses


## Potential Future Enhancements
 * Code Clean Up - efficiencies can be gained. Too much repeating currently.
 * Space out responses between Droids
 * Add more commands - larger arrays of responses
 * Make Responses feel more natural
 * Sounds had a much bigger plan at the beginning, revisit the use of them.
