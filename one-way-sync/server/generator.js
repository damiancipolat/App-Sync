//Includes.
const LoremIpsum = require('./lorem.js');
const moment     = require('moment');

//Funcio que genera las novedades en el buffer.
const cycle = ()=>{

  //Genero contenido random.
  let content = {
    timestamp : moment().format('DDMMYYYhhmmss'),
    content   : LoremIpsum.generate(100)
  }
  
  //Agrego al buffer.
  global.bd.news.push(content);

  //Muestro por consola.
  console.log('> News generated at',moment().format('DD/MM/YYY hh:mm:ss'),' timestamp:',content.timestamp);

}

//Inicio bucle.
const start = ()=>{

  setInterval(cycle, global.bd.newsInterval);  

}

module.exports.start = start;