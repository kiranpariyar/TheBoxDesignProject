function Animator(element) {
	this.el = element;
	
	var animationIntervalId;
	this.animation = false;
	this.finalValue = 0;
	this.property;
	
	this.animate = function(cssProperty, value, duration) {

		this.finalValue = value;
		this.property = cssProperty;

		var style = window.getComputedStyle(element);
		var initial = parseInt(style.getPropertyValue(cssProperty));
		var tempInitial = initial;
		var intervalLength = 10;
		var step = (value - initial) / (duration / intervalLength);
		var counter=0;
		var intervalId= window.setInterval(function() {
			this.animation = true;
			counter++;
			tempInitial+=step;
			// element.style[cssProperty] = parseInt(style.getPropertyValue(cssProperty))+step + 'px';
			element.style[cssProperty] = tempInitial + 'px';
			if (counter >= duration/intervalLength){
				window.clearInterval(intervalId);
				this.animation = false;
			}
		}, intervalLength);

		return intervalId;
	}

	// should stop the animation in current position
	this.stopAnimation = function() {
		if(this.animation ==true){
			console.log('animation stopped');
			window.clearInterval(animationIntervalId);
			animation = false;	
		}
		
	}

	// should stop the animation and element's properties should be at "end" value
	this.finish = function() {
		window.clearInterval(animationIntervalId);
		var style = window.getComputedStyle(element);
		console.log('final value: ',this.finalValue);
		element.style[this.property] = this.finalValue + 'px';
		this.animation==false;
		
	}

}