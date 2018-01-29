//Incluyo modulos.
const http       = require('http');
const express    = require('express');
const bodyParser = require('body-parser');
const api 		 = require('./api.js');
const generator  = require('./generator.js');

//Inicio expressjs.
const app      = express();
const server   = http.createServer(app);
const port	   = 5000;

//Buffer de noticias.
global.bd = {
	news 	  	  : [],
	syncCount 	  : 0,
	syncTimestamp : null,
	lastRequest   : null,
	newsInterval  : 5000,
	originCount   : 10
}

//Seteo body-parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Agrego CORS.
app.use(api.allowCrossDomain);

//Inicio el interval que generara novedades cada x tiempo.
generator.start(global.bd);

//Traigo las ultimas x novedades.
app.get('/sync/news/origin/',api.syncRequestOrigin);

//Traigo las novedades desde un tiempo x.
app.get('/sync/news/:timestamp/',api.syncRequestTimestamp);

//Inicio el server.
app.listen(port, ()=>{

  //Logeo arranque del server.
  console.log('Server SYNC :: One-way');
  console.log('Listen in port',port);
  console.log('');  

});

process.on('exit', function(code) {
  console.log('client exit', code);
});