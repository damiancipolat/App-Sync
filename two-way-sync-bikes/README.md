# Two-Way-Sync (Bikes)
Ejemplo de sincronización en dos vias, basado en un ejemplo de sistema de estaciones automaticas de bicicletas.

![N|Solid](http://damiancipolat.com/webFiles/bike-sync2.png)

## Escenario:
Este esquema se compone de un servidor de aplicaciones que sera el encargad de gestionar las sincronizaciones de datos, una base de datos para persistir la info. y la red de estaciones de bicicletas, en cada una se deduce que hay una minicomputadora que ejecuta un proceso que informa a la central el estado de cada estación y las bicis disponibles.

Usaremos la **Sincronización incremental** para en cada movimiento ir informando al server el estado de cada estación y viceversa.	

- **Servidor**:
  - Desconoce la cantidad de estaciones que hay.

  - Ofrece un api rest para recibir datos desde las estaciones y para consulta de novededades de cada estación.

  - Cada reserva estara representada por GUID unico.

  - Para simular la bd se usara un buffer interno.
  
  - Desde una aplicación online se pueden realizar reservas de bicicletas, estas se comunicaran con el server centralizado y este hara llegar esta info. a la estación correspondiente.
  
- **Cliente**:
  - Desconoce la existencia de otras estaciones. 
  
  - Conoce las bicis que estan disponibles en ellas.
  
  - Conoce cual es el server de sincronización.
  
  - Informa al server cada vez que se retira una bici, revisa cada x segundos la conexión a la red, descarga cada x segundos si hay alguna bici que se debe desbloquear.
 
## Sincronización:

Estación NN a Server:
- Cada x tiempo reviso la conexión al server, en base a eso bloqueo o desbloqueo el uso de la estación para los usuarios.
- En el momento de que un usuario se acerca a la estación y con apoya su tarjeta para desbloquear una bici, se le asigna un al azar y se envia esta nueva información a la central.
- Cada x tiempo resivo si hay novedades para esta estación puede ser bloquearla por mantenimiento o desbloquear una bici puntual.
