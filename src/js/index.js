/* global THREE */
import { statsInit } from './stats'
import PrintConsole from './PrintConsole'
import initAnimation from './animation'

let camera,
	scene,
	renderer,
	controls

function init() {

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 )
	camera.position.z = 5

	scene = new THREE.Scene()

	renderer = new THREE.WebGLRenderer({ antialias: true })
	renderer.setSize( window.innerWidth, window.innerHeight )
	document.body.appendChild( renderer.domElement )

	controls = new THREE.OrbitControls( camera, renderer.domElement )
	controls.enableZoom = true

	window.addEventListener( 'resize', onWindowResize )

	const helper = new THREE.AxisHelper( 3 )
	scene.add( helper )

	loop()

}

// init()

function loop() {

	requestAnimationFrame( loop )

	render()

}

function render() {

	renderer.render( scene, camera )

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()

	renderer.setSize( window.innerWidth, window.innerHeight )

}

// statsInit()
// initAnimation()

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-65907335-3');
