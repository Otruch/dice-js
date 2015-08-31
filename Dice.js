var randLimit = function(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min 
	}
var Dice = function(){
	this.launch();
}
Dice.prototype.launch = function(){
	this.value = randLimit(1,6);
}