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
var element = new DiceElement(path);

Path is the path of images directory of dice faces.

body.appendChild(element);
diceElement.launchDice();
alert(diceElement.dice.value);