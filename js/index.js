var creativeImageWrapper = document.getElementsByClassName('creativeimage-wrapper')[0];
var style = window.getComputedStyle(creativeImageWrapper);
var height = style.getPropertyValue('height');
// console.log("height :",height);

// var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var viewportHeight = window.innerHeight;
var sliderImage = document.getElementsByClassName('slider-image');
var image = sliderImage[0].children;
console.log('image :',image);
console.log('viewportHeight :',viewportHeight);
// image[0].style.height = viewportHeight + 'px';