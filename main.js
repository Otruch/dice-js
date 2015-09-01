(function(){
	var content = document.getElementById("dice_content")
	var diceElement = new DiceElement();
	var p = document.createElement('p');
	var button = document.getElementById("dice_button");
	content.appendChild(diceElement.element);
	content.appendChild(p);
	p.innerHTML = diceElement.dice.value;
	button.onclick = function(){
		diceElement.launchRoll(function(value){
			p.innerHTML = (value);
		});
	}
})();