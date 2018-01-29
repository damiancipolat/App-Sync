//Incluyo modulos.
const http       = require('http');
const express    = require('express');
const moment     = require('moment');
const LoremIpsum = require('./lorem.js');

//CORS
module.exports.allowCrossDomain = (req, res, next)=>{

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');  

  // Intercepts OPTIONS method
  if ('OPTIONS' === req.method)      
    res.sendStatus(200);
  else
    next();

}

//syncRequest - Recibo el pedido de sync filtrando por timestamp.
module.exports.syncRequestTimestamp = (req,res)=>{

  //Si vienen el timestamp, filtro en base al ultimo timestamp.
  if (req.params.timestamp!=null){

    //Traigo las novededaes desde el ultimo timestamp.
    let newsFilter = global.bd.news.filter((newItem)=>req.params.timestamp <= newItem.timestamp);

    //Retorno del api.
    res.status(200).json({news : newsFilter});

  } else
    res.status(200).json({"error":"bad format"});

}

//Origin: traigo todas las novedades ya que el buffer esta vacio.
module.exports.syncRequestOrigin = (req,res)=>{

  //Traigo los ultimos x novedades.
  let newsFilter = global.bd.news.reverse().slice(0,global.bd.originCount);

  //Retorno del api.
  res.status(200).json({news : newsFilter});

}
