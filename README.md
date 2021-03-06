<h1 align='center'>GRAPHQL POKEDEX</h1>
<h2 align='center'>Table of Contents</2>
<p align='center'><a href='#description'>Description</a></p>
<p align='center'><a href='#installation'>Installation</a></p>
<p align='center'><a href='#usage'>Usage</a></p>
<p align='center'><a href='#license'>License</a></p>
<p align='center'><a href='#questions'>Questions</a></p>
<p align="center"><a href='https://graphqlpokedex.herokuapp.com/'><img width="90%" src="assets/preview.gif" alt="a list of pokemon and a pokedex displaying details of one pokemon"></a></p>
<hr/>
<h2 align='center'><a href='https://graphqlpokedex.herokuapp.com/'>Live App</a></h2>

<h2>Description</h2>
<p>A pokedex application built in MERN stack with apollo-graphql and the react-spring animation library.</p>
<p>A year ago I made a react app that queried a cool graphql server by Lucas Bento -however- Lucas Bento's super cool project is no longer running, which left my project without a server to query.</p>
<p>So I built a new server and graphql API to serve up the same pokemon JSON data that Bento's server was using, and revamped my react front-end.<p>
<p>Here's to 25 years of pokemon, one of the greatest entertainment franchises in history.</p>

<p>This project can be found deployed <a href='https://graphqlpokedex.herokuapp.com/'>here</a></p>
<p>The code for this project can be found <a href='https://github.com/ThomasFoydel/graphqlPokedex'>here</a></p>
<p>The code for my old project can be found <a href="https://github.com/ThomasFoydel/oldpokedex">here</a><p>
<p>The code for the relay graphql server by Lucas Bento that inspired these projects can be found <a href="https://github.com/lucasbento/graphql-pokemon">here</a></p>
<hr/>
<h2>Installation</h2>
<p>Download the repo and from the root folder of the project run the command</p>

    npm run install-all

<hr/>
<h2>Usage</h2>
<p>To run it locally, from the root folder of the project, run the command</p>

    npm run dev

<p>This will run the front end on <a href='http://localhost:3000'>http://localhost:3000</a></p>
<p>And the graphql playground can be accessed at <a href='http://localhost:4000/graphql'>http://localhost:4000/graphql</a><p>
<p>You'll need to set up your mongoDB database with the JSON data from Bento's project in it (fix jigglypuff's evolution data, though) and then use the connection string from mongoDB as an environment variable named MONGO_URI (or just replace the environment variable with your connection string if you aren't deploying or pushing that code anywhere). Alternatively you could change the graphql/resolver to serve up the JSON data and remove the mongoose.connection code wrapping the app.listen in the main server file, src/index.js<p>
<hr/>
<h2>License</h2>
<p><img src='https://img.shields.io/badge/license-MIT-half' alt='license'></img>
<hr/>
<h2>Questions</h2>
<p>Any questions on this or other projects can be directed to thomasjfoydel@gmail.com </p>
<hr/>
<h2>More Of My Projects</h2>
<p>Thanks for checking this out! Find more of my work on <a href='https://github.com/thomasfoydel'>my GitHub</a></p>
