# ONE WAY SYNC
Sincronización de un solo lado.

Este ejemplo esta desarrollado usando nodejs, hay un server y X clientes que descargan contenido del server.

## Escenario:

- Servidor:
   
   - Desconoce la cantidad de clientes que hay.
   
   - Cada 5 segundos genera contenido y lo almacena en un buffer interno para poder ofrecerlo a los clientes.
   
   - Ofrece un API-REST para ser consumida por los clientes para obtener las novedades.
 
- Cliente:
   
   - Conoce su estado interno.
   
   - Actualiza su contenido en base al server, usa el timestamp para informar us ultima fecha de datos.
   
   - Consume el api-rest del server.
 
 ## Ejecución:
 ```sh 
#Server:
$ cd /server
$ npm install
$ npm start

#Client
$ cd /server
$ npm install
$ npm start
```
