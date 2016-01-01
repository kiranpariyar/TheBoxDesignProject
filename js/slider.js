var sliderLong = document.getElementsByClassName('slider-long')[0];
var sliderImage = sliderLong.children[0]; 
var slides = sliderLong.children;
var sliding = false;
var ml = 0;
var active = 1;
var imgWidth;
var animator = new Animator(sliderLong);

function calculateImageWidth(currentImage) {
	var imageElement = document.getElementsByClassName('slider-image')[currentImage-1];
	var style = window.getComputedStyle(imageElement);
	var imageWidth = parseInt(style.getPropertyValue('width'));
	return imageWidth;
}

function slide() {
	if(animator.animation==false){
		imgWidth = calculateImageWidth(active);
		active = active == slides.length ? active = 1 : ++active;
		var ml = (imgWidth * (active-1) * -1);
		animator.animate('margin-left',ml,1000);
	}
	
}

var intervalId=setInterval(slide, 3000);

function next() {
	if(active != slides.length){
		imgWidth = calculateImageWidth(active);
		animator.finish();	
		window.clearInterval(intervalId);
		active++;
		var ml = (imgWidth * (active-1) * -1);
		animator.animate('margin-left',ml,1000);
		intervalId=setInterval(slide, 3000);	
	}	
}

function previous() {
	if(active != 1){
		imgWidth = calculateImageWidth(active);
		animator.finish();
		window.clearInterval(intervalId);
		active--;
		var ml = (imgWidth * (active-1) * -1);
		animator.animate('margin-left',ml,1000);
		intervalId=setInterval(slide, 3000);
	}	
}
