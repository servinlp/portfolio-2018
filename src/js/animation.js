
function initAnimation() {

	const title	 = document.querySelectorAll( '.home:first-of-type div h1' )[ 0 ],
	div = title.querySelector( 'div' ),
	work = document.querySelectorAll( '.home:last-of-type' )[ 0 ],
	workItems = document.querySelectorAll( '.home:last-of-type .work' ),
	articles = document.querySelectorAll( '.home:first-of-type article' ),
	aboutMe = document.querySelectorAll( '.home:first-of-type div' )[ 0 ],
	hack = document.querySelector( '.hack' ),
	close = document.querySelector( 'a.close' )

	let currArticle,
	currWork,
	timerCheck = true

	const timout = setTimeout( () => {

		title.classList.add( 'show' )
		timerCheck = false

	}, 3000 )

	window.addEventListener( 'load', () => {

		if ( !document.body.classList.contains( 'sub' ) && timerCheck ) {

			const WIDTH = window.innerWidth,
			HEIGHT = window.innerHeight,
			box	= title.getBoundingClientRect(),
			scale = WIDTH < 600 ? 1.2 : 1.4

			title.style.transform = `translate( calc( ${ ( WIDTH / 2 ) - box.left }px - ( ${ box.width * scale }px / 2 ) ), ${ ( ( HEIGHT / 2 ) - box.top ) - ( ( box.height * scale ) / 2 ) }px ) scale( ${ scale } )`
			title.classList.add( 'show' )

		}

		if ( document.referrer.includes( 'ser.vin' ) && document.body.classList.contains( 'sub' ) && performance.navigation.type !== 1 ) {

			document.querySelectorAll( '.home:first-of-type article' )[ 0 ].classList.add( 'fade' )
			aboutMe.classList.add( 'fadeout' )

		} else if ( document.body.classList.contains( 'sub' ) ) {

			document.querySelectorAll( '.home:first-of-type article' )[ 0 ].classList.add( 'appear' )
			aboutMe.classList.add( 'disappear' )

		}

		setTimeout( () => {

			title.classList.add( 'show' )

		}, 1000 )

	} )

	title.addEventListener( 'transitionend', titleAnimationEnd)

	if ( !document.body.classList.contains( 'sub' ) ) {

		window.addEventListener( 'click', () => {

			if ( !aboutMe.classList.contains( 'show' ) ) {

				title.style.transform = ''
				aboutMe.classList.add( 'show' )
				work.classList.add( 'show' )
				workItems[ workItems.length - 1 ].addEventListener( 'transitionend', removeDelay )

			}

		} )

	}

	function titleAnimationEnd( event ) {

		if ( event.target.tagName === 'H1' ) {

			title.style.transform = ''
			aboutMe.classList.add( 'show' )
			var temp = document.querySelectorAll( '.home' )[ 1 ]
			temp.classList.add( 'show' )
			workItems[ workItems.length - 1 ].addEventListener( 'transitionend', removeDelay )

		}
	}

	div.addEventListener( 'transitionend', divAnimationEnd )

	function divAnimationEnd() {

		if ( !title.classList.contains( 'normal' ) ) {

			title.classList.add( 'normal' )

		}

	}

	function removeDelay() {

		work.classList.remove( 'show' )
		work.classList.add( 'allWaysShow' )
		workItems[ workItems.length - 1 ].removeEventListener( 'transitionend', removeDelay )

	}

}

export default initAnimation