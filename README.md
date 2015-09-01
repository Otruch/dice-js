# dice-js
Dice JS is a simply simulator of dice launcher

## How to use :
Add src dir to you website
Add yourPath/Dice.js to your HTML page

### Create a dice with onely value :
var dice = new Dice()
alert(dice.value)
dice.launch()
alert(dice.value)

### Create a dice element :
var diceElement = new DiceElement(path);

Path is the path of images directory of dice faces.

body.appendChild(diceElement.element);
diceElement.launchDice();
alert(diceElement.dice.value);

### Rolling a dice Element
diceElement.launchRoll();
diceElement.launchRoll(callback);

callback : function(value) :
function called when the dice is ending to roll.
parameter : value : the final value of the dice, false if the dice is allready rolling
