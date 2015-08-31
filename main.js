(function(){
	var content = document.getElementById("dice_content")
	var diceElement = new DiceElement();
	var button = document.getElementById("dice_button");
	content.appendChild(diceElement.element);
	button.onclick = function(){
		diceElement.launchDice();
	}
})();