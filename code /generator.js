var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Write your full name ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('type 2 food items ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var number = prompt('Type a number' + questionsLeft);
alert('All done. Ready for the message?');
var sentence = "<h2> Pizza was invented by " + adjective;
sentence += ' .To make pizza you need ' + noun;
sentence += ' After you bake the pizza, cut it into ' + number ;
sentence += ' slices ' 
sentence +='.</h2>';
document.write(sentence);