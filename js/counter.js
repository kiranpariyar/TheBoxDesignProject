var body = document.getElementsByTagName("body")[0];

body.onscroll = function() {

	var infoValue = document.getElementsByClassName("info-values");
	var endValue = [790,1000,340,500];
	if(infoValue[0].innerHTML != endValue[0] && infoValue[1].innerHTML != endValue[1]
		&& infoValue[2].innerHTML != endValue[2] && infoValue[3].innerHTML != endValue[3]){
		var startValue;
		var targetElement;
		var duration;

		for (var i = 0; i < infoValue.length; i++) {
			startValue = infoValue[i].innerHTML;
			targetElement = infoValue[i];
			duration = 2000;
			counterUp(targetElement,startValue,endValue[i],duration);
		};
	}	
}

function counterUp(targetElement,startValue,endValue,duration){

	var counter = 0;
	var intervalLength = 10;
	var step = Math.floor((endValue - startValue)/(duration / intervalLength));
	console.log(step);

	var x = setInterval(function(){
		counter += step;
		targetElement.innerHTML = counter;

		if(counter >= endValue){
			clearInterval(x);
		}
	},intervalLength);
} 