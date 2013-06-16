var circleColor="#FF9900";
var redFade = 4;
var greenFade = 9;
var blueFade = 32;
var screenWidth=$(window).width();
var screenHeight=$(window).height();
var context;
var canvas;
var controller;

// Leap.loop(function(frame) {
// 	//debug('frame');
// 	fadeScreen();
// 	var length;
// 	if(frame.fingers && frame.fingers.length>0){
// 		length=frame.fingers.length;
// 		for(var i=0;i<length;i++){
// 			debug("i=="+i);
// 			drawCircle(frame.fingers[i].tipPosition[0],frame.fingers[i].tipPosition[1],frame.fingers[i].tipPosition[2]);
// 		}
// 		
// 	}else if(frame.hands && frame.hands.length>0){
// 		legth=frame.hands.length;
// 		for(var i=0;i<length;i++){
// 			drawCircle(frame.hands[i].sphereCenter[0],frame.hands[i].sphereCenter[1],frame.hands[i].sphereCenter[2]);
// 		}
// 	}
// 	//blow;
// 	
// })

function animate(){
	//debug("animate()");
	var frame=controller.frame();
	fadeScreen();
	var length;
	if(frame && frame.fingers && frame.fingers.length>0){
		length=frame.fingers.length;
		//debug("fingers.length=="+fingers.length)
		for(var i=0;i<length;i++){
			debug("i=="+i);
			drawCircle(frame.fingers[i].tipPosition[0],frame.fingers[i].tipPosition[1],frame.fingers[i].tipPosition[2]);
		}
		
	}// else if(frame && frame.hands && frame.hands.length>0){
	// 		legth=frame.hands.length;
	// 		for(var i=0;i<length;i++){
	// 		drawCircle(frame.hands[i].sphereCenter[0],frame.hands[i].sphereCenter[1],frame.hands[i].sphereCenter[2]);
	// 		}
	// 	} //else {
	// 		//debug("no frame");
	// 	}
	
	requestAnimationFrame(animate);
}

function drawCircle(x,y,z){
	x+=screenWidth/2;
	y=(screenHeight)-y;
	z=z+300;
	if(z<0){z*=-1;}
	z=z/3;
	//debug("x,y,z=="+x+", "+y+", "+z);
	//debug("*****");
	context.strokeStyle = circleColor;
	context.fillStyle = circleColor;
	context.beginPath();
	context.arc(x,y,z,0,Math.PI*2,true);
	context.closePath();
	context.stroke();
	context.fill();
}

function fadeScreen(){
	lastImage = context.getImageData(0,0,screenWidth,screenHeight);
	pixelData = lastImage.data;
	len = pixelData.length;
	for (i=0; i<len; i += 4) {
		if ((r = pixelData[i]) != 0) {
		    r -= redFade;
		    g = pixelData[i+1]-greenFade;
		    b = pixelData[i+2]-blueFade;
		    pixelData[i] = (r < 0) ? 0 : r;
		    pixelData[i+1] = (g < 0) ? 0 : g;
		    pixelData[i+2] = (b < 0) ? 0 : b;
		}
	}
	context.putImageData(lastImage,0,0);
}

function checkLibrary() {
	debug("checkLibrary()")
  if (typeof Leap === "undefined") {
    document.getElementById("canvas").innerHTML = "The Leap Motion JavaScript client library (leap.js file) was not found. Please download the library from the GitHub project at <a href='https://github.com/leapmotion/leapjs'>https://github.com/leapmotion/leapjs</a>."
    alert("The Leap Motion JavaScript client library (leap.js file) was not found. Please download the latest version from the GitHub project at https://github.com/leapmotion/leapjs");
  }
}

function init() {
	debug("init()");
	checkLibrary();
	canvas = document.getElementById('canvas');
	// Check the element is in the DOM and the browser supports canvas
	
	if(canvas.getContext) {
		canvas.width=screenWidth;
		canvas.height=screenHeight;
		// Initaliase a 2-dimensional drawing context
		context = canvas.getContext('2d');
		context.fillStyle = '0xFFFFFF';
		context.fillRect(0,0,screenWidth,screenHeight);
		
		controller = new Leap.Controller({
		  host: '127.0.0.1',
		  port: 6437,
		  enableGestures: true,
		  frameEventName: 'animationFrame'
		});
		
		controller.connect();
		
		var methods = [];
		for (var m in controller) {
		    if (typeof controller[m] == "function") {
		        methods.push(m);
		    }
		}
		debug(methods.join(","));
		animate();
	}
}


( function () {

var lastTime = 0;
var vendors = [ 'ms', 'moz', 'webkit', 'o' ];

for ( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++ x ) {

window.requestAnimationFrame = window[ vendors[ x ] + 'RequestAnimationFrame' ];
window.cancelAnimationFrame = window[ vendors[ x ] + 'CancelAnimationFrame' ] || window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];

}

if ( window.requestAnimationFrame === undefined ) {

window.requestAnimationFrame = function ( callback ) {

var currTime = Date.now(), timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
var id = window.setTimeout( function() { callback( currTime + timeToCall ); }, timeToCall );
lastTime = currTime + timeToCall;
return id;

};

}

window.cancelAnimationFrame = window.cancelAnimationFrame || function ( id ) { window.clearTimeout( id ) };

}() );



