var viewportHeight = window.innerHeight;
var body = document.getElementsByTagName("body")[0];
var isHiding = false;
var headerWrapper = document.getElementsByClassName('header-wrapper')[0];
var style;
var hideTop;
var headerheight;
var positionTop  


body.onscroll = function(){
	countUp();
	calculateVerticalScroll();
}


function countUp() {

	var infoValue = document.getElementsByClassName("info-values");
	var infoContent = document.getElementsByClassName("info-values")[0];
	var isInViewport = elementInViewport(infoContent);
	// console.log(isInViewport);
	var endValue = [79000,754,4000,1000];
	var count = new Counter();
	if(infoValue[0].innerHTML == 0 && infoValue[1].innerHTML == 0
		&& infoValue[2].innerHTML == 0 && infoValue[3].innerHTML == 0 && isInViewport){
		var startValue;
		var targetElement;
		var duration;

		for (var i = 0; i < infoValue.length; i++) {
			startValue = infoValue[i].innerHTML;
			targetElement = infoValue[i];
			duration = 2000;
			count.counterUp(targetElement,startValue,endValue[i],duration);
		};
	}	
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

function calculateVerticalScroll(){
	var scrollDownY = body.scrollTop;
	console.log('scrollY :',scrollDownY);
	console.log('viewportHeight :',viewportHeight);
	if(scrollDownY >= viewportHeight && isHiding == false){		
		hideHeader();		
	}else if(viewportHeight > scrollDownY && isHiding == true){
		showHeader();
	}
}

function hideHeader(){
	console.log('hideHeader');
	style = window.getComputedStyle(headerWrapper);
	positionTop = style.getPropertyValue('top');
	headerheight = headerWrapper.clientHeight;
	hideTop = - parseInt(positionTop) - parseInt(headerheight);
	headerWrapper.style.top =  hideTop + 'px';
	isHiding = true;
}


function showHeader(){
	console.log('showHeader');
	headerWrapper.style.top = hideTop * (-1) - headerheight + 'px';
	isHiding = false;
}