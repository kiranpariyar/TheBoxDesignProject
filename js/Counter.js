function Counter() {

	this.counterUp = function(targetElement,startValue,endValue,duration){

		var counter = 0;
		var intervalLength = 20;
		var step = Math.floor((endValue - startValue)/(duration / intervalLength));
		console.log(step);

		var x = setInterval(function(){
		
			if(counter >= endValue){
				targetElement.innerHTML = endValue;
				clearInterval(x);
			}else{
				counter += step;
				targetElement.innerHTML = counter;
			}
		},intervalLength);
	}
}	

