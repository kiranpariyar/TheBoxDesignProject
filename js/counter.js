var infoValue = document.getElementsByClassName("info-values");
var infoContent = document.getElementsByClassName("info-values")[0];
var body = document.getElementsByTagName("body")[0];
body.onscroll = function(){
	var isInViewport = elementInViewport(infoContent);
	console.log(isInViewport);
	var endValue = [79000,754,4000,1000];
	if(infoValue[0].innerHTML == 0 && infoValue[1].innerHTML == 0
		&& infoValue[2].innerHTML == 0 && infoValue[3].innerHTML == 0 && isInViewport){
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


function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
} 