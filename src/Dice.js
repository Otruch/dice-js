var randLimit = function(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min 
	}
var Dice = function(){
	this.launch();
}
Dice.prototype.launch = function(){
	this.value = randLimit(1,6);
}

DiceElement = function(path){
	this.dice = new Dice();
	this.rolling = false;
	if(path == undefined)
	{
		path = 'src/img'
	}
	this.path = path;
	this.createElement();
}
DiceElement.prototype.createElement = function(){
	
	this.element = document.createElement('img');
	this.element.className = 'dice';
	this.updateElement();
}
DiceElement.prototype.updateElement = function(){
	this.element.setAttribute('src',this.path+'/'+this.dice.value+'.png');
}
DiceElement.prototype.launchDice = function(){
	this.dice.launch();
	this.updateElement();
}
DiceElement.prototype.launchRoll = function(callback){
	if(this.rolling)
	{
		callback(false)
	}
	else
	{
		this.rolling = true
		var self = this;
		var count = 0;
		var stepRoll = function(){
			self.launchDice();
			count++;
			if(count > 10)
			{
				clearInterval(timerVar);
				self.rolling = false;
				if(typeof(callback) == 'function')
				{
					callback(self.dice.value);
				}
			}
		}
		var timerVar = setInterval(stepRoll,160)
	}
	
}