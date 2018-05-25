const express =		require( 'express' ),
	ejs = 		require( 'ejs' ),
	bodyParser = 	require( 'body-parser' ),
	projects = 	require( './projects' ),
	app = 		express(),
	PORT = 		8006

app.set( 'view engine', 'ejs' )

app.set( 'views', './views' )
app.use( express.static( 'public' ) )

app.get( '/', ( req, res ) => {

	const projectAsArray = []

	for ( const el in projects ) {

		projectAsArray.push( projects[ el ] )

	}

	res.render( 'index', { projects: projectAsArray } )

} )

app.get( '/about-me', ( req, res ) => {

	res.render( 'about-me', {
		sub: true
	} )

} )

app.get( '/projects/:project', ( req, res ) => {

	res.render( 'project', {
		sub: true,
		project: projects[ req.params.project ]
	} )

} )

app.get( '/project/:projectName', ( req, res ) => {

        res.redirect( 'http://projects.ser.vin/' + req.params.projectName )

} )

app.get( '/project/:projectName/:projectFile', ( req, res ) => {

	res.redirect( 'http://projects.ser.vin/' + req.params.projectName + '/' + req.params.projectFile )

} )

app.get( '*', ( req, res ) => {

	res.send( 'Are you lost?' )

} )

app.listen( PORT, () => {

	console.log( `Hi there from port ${ PORT }` )

} )
