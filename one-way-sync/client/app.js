//Includes.
const request = require('request');
const moment  = require('moment');

//Buffer.
let buffer = {
	news : [],
	lastUpdate : null,
	host : 'http://127.0.0.1:5000'
}

//Actualización.
const updateSync = ()=>{

	//Si el buffer esta vacio traigo desde el inicio y en caso de que no desde el timestamp actual.	
	let url = buffer.host+((buffer.lastUpdate==null)?'/sync/news/origin/':('/sync/news/'+moment().format('DDMMYYYhhmmss')+'/'));

	//Salida por consola.
	console.log('> Sync from url:'+url);

	//Traigo datos.
	request(url, (error, response, body) =>{

		buffer.lastUpdate = moment().format('DDMMYYYhhmmss');
		
		if ((error==null)&&(body!=null)){

			//Decode json.
			let newsObj = JSON.parse(response.body);
			buffer.news.push(newsObj);

			console.log('> Sync recibidos: ',newsObj.news);

		}else
			console.log('> Sync error, no se obtuvo respuesta del server.')

	});

}

// Ejecuto por primera vez el sync.
updateSync();

//Inicio un ciclo de actualización.
setInterval(()=>{

	updateSync();

},5000);

