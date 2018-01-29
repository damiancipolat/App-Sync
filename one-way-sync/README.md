# ONE WAY SYNC
Sincronización de un solo lado.

Este ejemplo esta desarrollado usando nodejs, hay un server y X clientes que descargan contenido del server.

## Escenario:
- Servidor:
   -. Desconoce la cantidad de clientes que hay.
   Cada 5 segundos genera contenido y lo almacena en un buffer interno para poder ofrecerlo a los clientes.
 
