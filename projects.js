const projects = {
	'webvr-maze': {
                title: 'WebVR Maze',
		fullTitle: [ 'WebVR Maze', 'HTC Vive' ],
                tag: 'Free time',
                image: 'maze',
                link: 'webvr-maze',
		text: `<p>This was the first project in which I started to use WebVR. At this point we only had the HTC Vive at school so i started with this. This little project uses two scripts from Three.js for WebVR and the Vive controllers. The entire maze is generated from a single string that can be edited by changing a character.</p>
			<h2>Scripts used:</h2>
			<p><a href="https://github.com/mrdoob/three.js/blob/dev/examples/js/vr/WebVR.js">WebVR.js</a><br>
			<a href="https://github.com/mrdoob/three.js/blob/dev/examples/js/vr/ViveController.js">ViveController.js</a></p>`,
		projectLink: 'https://servinlp.github.io/maze-vr/index.html',
		attention: '<p>Om deze website goed te kunnen bekijken is een Htc Vive of Oculus Rift nodig met browser die Web VR ondersteund. Ga hiervoor naar <a href="https://mozvr.com/">https://mozvr.com/</a>.</p><p>Scripts used:</p>',
		viewThis: [
			{
				title: 'github',
				img: '/img/github-original.svg',
				link: 'https://github.com/servinlp/maze-vr'
			}
		],
		tools: [
			{
				title: 'Three.js',
				img: '/threejs/threejs-original.svg'
			}
		]
        },
	'gearvr-controller': {
		title: 'GearVR controller',
		fullTitle: [ 'GearVR', 'controller' ],
		tag: 'Free time',
		image: 'gearvr',
		link: 'gearvr-controller',
		text: `<p>At this point the new GearVRs just arrived at school so I wanted to test them out with WebVR. Problem: the examples of Three.js had examples for the Vive, Oculus and Daydream. But not for the GearVR. So my first project with the GearVR was to make a script to use it and have this (with an example) added to the Three.js repositorie.</p>`,
		projectLink: 'https://threejs.org/examples/?q=vr#webvr_gearvr',
	},
	'forgo': {
		title: 'Forgo',
		fullTitle: [ 'Forgo', 'HTC Vive' ],
		tag: 'School',
		image: 'forgo',
		link: 'forgo',
		text: `<p>“Open source (web)VR solution to take a break from it all”
			Our end project for the project Designing for emerging technologies. Mo (a classmate of mine) and I wanted to create a world where people could enter to shut themselves off from the outside world and take a moment to relax.</p>
			<a class="button" href="https://github.com/moniac">Mo's github</a>`,
		viewThis: [
			{
                                title: 'github',
                                img: '/img/github-original.svg',
                                link: 'https://github.com/servinlp/forgo'
                        }
                ],
		projectLink: 'https://ser.vin/project/forgo/'
	},
	'vr-hyperlinks': {
		title: 'VR hyperlinks',
		fullTitle: [ 'VR', 'hyperlinks' ],
		tag: 'School',
		image: 'hyperlinks',
		link: 'vr-hyperlinks',
		text: `<p>As a school assignment we had to do something with VR. Most people used unity for this because this is what we did in the lessons. I wanted to see if it was already possible to go from page to page and stay in VR. To have a sort of smooth experience. Now because the project was called “Designing for emerging technologies“ (emphasis on designing) and this was more technical than designing I was asked to try and design how a link in VR could look and how the transition between pages could work.</p>`,
		viewThis: [
			{
				title: 'github',
				img: '/img/github-original.svg',
				link: 'https://github.com/servinlp/vr-hyperlinks'
			}
		],
		projectLink: 'https://ser.vin/project/vr-hyperlinks/'
	},
	console: {
		title: 'Console',
		fullTitle: [ 'console', '' ],
		tag: 'Free time',
		image: 'console',
		link: 'console',
		text: `<p>Not necessarily VR but a little project that saved me a lot of time and problems. With this you can write your console to the DOM. The reason I started this project was because I wanted to have a console inside of VR. This was my first step in this project. To make one inside the DOM. Problem with making this for VR was performance. Whenever something was put in the console a new TextGeometry would be added. The more you added the more it would start to crash.</p>
			<p>Current uses for this project is when i’m working for the GearVR. Because this does not have a console this makes it so much easier.</p>`,
		viewThis: [
			{
				title: 'github',
				img: '/img/github-original.svg',
				link: 'https://github.com/servinlp/Console'
			}
		],
		projectLink: 'https://servinlp.github.io/Console/index.html'
	},
	sness: {
		title: 'Dribbble to code',
		tag: 'Free time',
		image: 'snes',
		link: 'sness',
		fullTitle: [ 'Dribbble to code', 'Sness controller' ],
		text: '<p>Playing around with scss and keyframe animations.</p>',
		viewThis: [
	               {
				title: 'codepen',
				img: '/img/codepen-black.svg',
				link: 'https://codepen.io/servinnissen/pen/ogxjdK'
																                        }
		],
		original: {
			class: 'dribbble',
			title: 'Dribbble',
			link: 'https://dribbble.com/shots/1809908-Super-Controller-Animation-System',
			img: '/img/dribbble-ball.svg'
		}
	},
	hellboy: {
		title: 'Dribbble to code',
		tag: 'Free time',
		image: 'hellboy',
		link: 'hellboy',
		fullTitle: [ 'Dribbble to code', 'Pixel Hellboy' ],
		text: '<p>Playing with box-shadow.</p>',
		original: {
			class: 'dribbble',
			title: 'Dribbble',
			link: 'https://dribbble.com/shots/1474911-Pixel-Hellboy',
			img: '/img/dribbble-ball.svg'
		},
		viewThis: [
			{
				title: 'codepen',
				img: '/img/codepen-black.svg',
				link: 'https://codepen.io/servinnissen/pen/yYbmrm'
			}
		],

	},
	chat: {
		title: 'Web chat',
		fullTitle: [ '(Basic) Single page', 'Chat applicatie' ],
		tag: 'Free time',
		image: 'chat',
		link: 'chat',
		text: `<p>My first project with Node.js. The purpose was to create a single page web application where you could login (with profile picture) and send messages with WebSockets that would be saved in a MySQL database.</p>`,
		tools: [
			{
	                        title: 'Node.js',
                                img: '/nodejs/nodejs-original.svg'
                        },
			{
				title: 'MySQL',
				img: '/mysql/mysql-original.svg'
			},
			{
				title: 'Websockets',
				img: '/websockets/websocket.svg'
			}
		],
		projectLink: 'https://chat.ser.vin/',
		viewThis: [
			{
				title: 'github',
				img: '/img/github-original.svg',
				link: 'https://github.com/servinlp/Web-based-chat'
			}
		],
		design: 'https://dribbble.com/shots/1818748-Appon-Chat-Widget'
	},
	wireflow: {
		title: 'Wireflow',
		fullTitle: [ 'Interactive', 'Wireflow' ],
		tag: 'Free time',
		image: 'wireflow',
		link: 'wireflow',
		text: `<p>Tijdens het school project 99 verhalen hebben wij meerdere keren een digitale wireflow moeten maken in een programma als illustrator. Bij mij kwam toen de gedachte, waarom zijn we hier een statische wireflow van een website aan het maken als dit ook interactief kan. Uit deze gedachte is dit projectje een beetje ontstaan (wat ik toen alsnog in mijn vrije tijd heb gemaakt).</p>`,
		projectLink: 'https://ser.vin/project/wireflow/',
		viewThis: [
			{
				title: 'github',
				img: '/img/github-original.svg',
				link: 'https://github.com/servinlp/interactive-wireflow'
			}
		]
	},
	'99-verhalen': {
		title: '99 Verhalen',
		tag: 'School',
		image: '99verhalen',
		link: '99-verhalen',
		fullTitle: [ '99 Verhalen', 'Website' ],
		text: '<p>Voor het project web op school kregen wij de opdracht om de verhalen van <a href="http://nurksmagazine.nl/about/max-molovich/">Max Molovich</a> op de website van <a href="http://nurksmagazine.nl">Nurks magazine</a> vorm te geven en in de stijl van de NS hier een responsive website van te maken.</p>',
		projectLink: '/project/99verhalen/index.html',
		viewThis: [
			{
				title: 'github',
				img: '/img/github-original.svg',
				link: 'https://github.com/servinlp/Frontend/tree/master/eindproduct'
			}
		]
	},
	agenda: {
		title: 'Agenda',
		fullTitle: [ 'Single page', 'Agenda' ],
		tag: 'Free time',
		image: 'agenda',
		link: 'agenda',
		text: `<p>For this project i wanted to use something else then MySQL. So i chose to use MongoDB as my database. The purpose for this site was to get more experience with Node.js and to learn an entirely new database system.</p>`,
		projectLink: 'https://agenda.ser.vin/',
		viewThis: [
			{
				title: 'github',
				img: '/img/github-original.svg',
				link: 'https://github.com/servinlp/agenda-node'
			}
		],
		design: 'https://dribbble.com/shots/2388942-Calendar-Day-038-dailyui',
		tools: [
			{
				title: 'Node.js',
				img: '/nodejs/nodejs-original.svg'
			},
			{
				title: 'MongoDB',
				img: '/mongodb/mongodb-original.svg'
			},
			{
				title: 'Websockets',
				img: '/websockets/websocket.svg'
			}
		]
	},
	amsterdone: {
		title: 'Amsterdone',
		fullTitle: [ 'Amsterdone', '' ],
		tag: 'Free time',
		image: 'amsterdone',
		link: 'amsterdone',
		text: `<p>As winner of the project ISGA (International Students Guide Amsterdam), <a href="https://meesrutten.me/">Mees Rutten</a> had the opportunity to make his idea into a functioning product. His idea was to create a checklist with which the international students could discover Amsterdam</p>
			<p>To help him with the project he asked <a href="http://sophieanne.nl/">Sophie Peijnenburg</a> and me. Sophie for the content, Mees for the Front end and me for the Back end. During the project we stood in direct contact with the client, Rose Leighton and later during the project with the MIC minor students.</p>
			<h2>Nominations:</h2>
			<p>For the project Amsterdone we competed in the <a href="https://www.spinawards.nl/students">SpinAwards Young Talent</a> and were nominated for the <a href="https://www.cmd-amsterdam.nl/portfolio/amsterdone/">Golden Dot Award</a>.</p>`,
		projectLink: 'http://amsterdone.nl/',
		tools: [
			{
				title: 'PHP',
				img: '/php/php-original.svg'
			},
			{
				title: 'MySQL',
				img: '/mysql/mysql-original.svg'
			}
		]
	},
}

module.exports = projects
