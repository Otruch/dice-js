# dice-js
Dice JS is a simply simulator of dice launcher

## How to use :
Add src dir to you website<br/>
Add yourPath/Dice.js to your HTML page<br/>

### Create a dice with onely value :

var dice = new Dice() <br/>
alert(dice.value) <br/>
dice.launch() <br/>
alert(dice.value) <br/>

### Create a dice element :
var diceElement = new DiceElement(path); <br/>

Path is the path of images directory of dice faces. <br/>
body.appendChild(diceElement.element); <br/>
diceElement.launchDice(); <br/>
alert(diceElement.dice.value); <br/>

### Rolling a dice Element
diceElement.launchRoll(); <br/>
diceElement.launchRoll(callback); <br/>

callback : function(value) : <br/>
function called when the dice is ending to roll. <br/>
parameter : value : the final value of the dice, false if the dice is allready rolling
