(function(){
	var content = document.getElementById("dice_content")
	var dice = new Dice();
	var button = document.getElementById("dice_button");
	button.onclick = function(){
		dice.launch();
		content.innerHTML = '' + dice.value;
	}
})();