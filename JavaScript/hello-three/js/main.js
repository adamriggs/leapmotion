

Leap.loop(function(frame) {
	debug('frame');
	
	//debug(frame);
	//debug(frame.hands.length);
	if(frame.hands && frame.hands.length>0){
		//debug(frame.hands[0].sphereCenter[0]);
		sphere.position.x=frame.hands[0].sphereCenter[0];
		sphere.position.y=frame.hands[0].sphereCenter[1];
		sphere.position.z=frame.hands[0].sphereCenter[2];
		renderer.render(scene, camera);
	}
	//blow;
})

function init3D(){
	debug("init3D()")
	
	var WIDTH = $(window).width(),
	  HEIGHT = $(window).height();

	// set some camera attributes
	var VIEW_ANGLE = 45,
	  ASPECT = WIDTH / HEIGHT,
	  NEAR = 0.1,
	  FAR = 10000;

	// get the DOM element to attach to
	// - assume we've got jQuery to hand
	var $container = $('#container');

	// create a WebGL renderer, camera
	// and a scene
	renderer = new THREE.WebGLRenderer();
	camera =
	  new THREE.PerspectiveCamera(
	    VIEW_ANGLE,
	    ASPECT,
	    NEAR,
	    FAR);

	scene = new THREE.Scene();

	// add the camera to the scene
	scene.add(camera);

	// the camera starts at 0,0,0
	// so pull it back
	camera.position.z = 500;

	// start the renderer
	renderer.setSize(WIDTH, HEIGHT);
	
	var radius = 50,
	    segments = 16,
	    rings = 16;

	// create a new mesh with
	// sphere geometry - we will cover
	// the sphereMaterial next!
	var sphereMaterial =
	  new THREE.MeshLambertMaterial(
	    {
	      color: 0xCC0000
	    });
	
	sphere = new THREE.Mesh(

	  new THREE.SphereGeometry(
	    radius,
	    segments,
	    rings),

	  sphereMaterial);

	// add the sphere to the scene
	scene.add(sphere);
	
	var pointLight =
	  new THREE.PointLight(0xFFFFFF);

	// set its position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	// add to the scene
	scene.add(pointLight);
	
	document.body.appendChild( renderer.domElement );
	renderer.render(scene, camera);
}

function checkLibrary() {
	debug("checkLibrary()")
  if (typeof Leap === "undefined") {
    document.getElementById("main").innerHTML = "The Leap Motion JavaScript client library (leap.js file) was not found. Please download the library from the GitHub project at <a href='https://github.com/leapmotion/leapjs'>https://github.com/leapmotion/leapjs</a>."
    alert("The Leap Motion JavaScript client library (leap.js file) was not found. Please download the latest version from the GitHub project at https://github.com/leapmotion/leapjs");
  }
}

function init() {
	debug("init()");
	checkLibrary();
	init3D();
}