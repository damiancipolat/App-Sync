# App-Sync-Patterns
El contenido teorico de este sitio fue sacado de **appsync.org**, obtenido del sig. **[enlace]**, los códigos fuentes son desarrollados por mí, usando la tecnologia **NODE.JS**. (El sitio de appsync.org ya no esta line almaceno el pdf en mi repositorio)

[enlace]:https://github.com/damiancipolat/App-Sync-Patterns/blob/master/appsync.pdf

![N|Solid](http://damiancipolat.com/webFiles/appsync.png)

Casi todas las aplicaciones móviles necesitan sincronizar datos con un servidor o back-end (por ejemplo, "la nube" para hacerlo más elegante), sin embargo es difícil para encontrar patrones, algoritmos, estrategias o código de ejemplo para ayudar a los desarrolladores a implementar una estrategia óptima de sincronización de datos para aplicaciones que desarrollan.

## Tipos de sincronizaciones:
![N|Solid](http://damiancipolat.com/webFiles/appsync2.png)

[one-way-sync]:https://github.com/damiancipolat/App-Sync-Patterns/tree/master/one-way-sync

- **Sincronización unidireccional**: Ver ejemplo **[one-way-sync]**

Los datos solo se sincronizan desde el servidor a las aplicaciones (por ejemplo, la aplicación de noticias donde el contenido se sincroniza desde el servidor CMS a las aplicaciones) o los datos se sincronizan desde las aplicaciones a un servidor (por ejemplo, registro / análisis).

- **Sincronización bidireccional**: 

Los datos se sincronizan en dos direcciones, desde una aplicación hasta un backend y viceversa. P.ej. un usuario está conectado y puede administrar sus propios datos en un sitio web y en una aplicación (suponiendo que el usuario no pueda iniciar sesión en 2 dispositivos al mismo tiempo).

- **Sincronización multidireccional**: 

Los datos se sincronizan desde múltiples dispositivos a un servidor / backend y viceversa. Esto también significa que los datos de un dispositivo se sincronizan con el servidor y desde el servidor a otros dispositivos (por ejemplo, aplicaciones de colaboración ...).

## Definiciones generales:
Lista de terminos relacionados a sincronización.

| Definición | Detalle |
|---|---|
| Dispositivo o cliente | Dispositivo móvil (teléfono inteligente o tableta) que ejecuta una aplicación que sincronizará los datos con un servidor / backend / cloud. |
| Servidor (o backend, nube) | Infraestructura centralizada que sincronizará datos con múltiples dispositivos. |
| Sincronización | Envío de datos desde dispositivos a un servidor y viceversa, sin perder datos y sin transferencia de datos innecesarios. La sincronización es especialmente necesaria en aplicaciones móviles que tienen una base de datos local y que sincronizarán datos con un servidor cuando no estén desconectado.|
| Sincronización completa | Sincronización de todos los datos (o todos los objetos del mismo tipo). |
| Sincronización incremental | Sincronización de solo los datos que han cambiado desde la última sincronización. |
| Objeto | Un único elemento de datos que se sincroniza entre dispositivos y un servidor, p. un registro de base de datos, un elemento de agenda o un objeto complejo incluyendo un cliente y todos sus pedidos y facturas (por ejemplo, en una aplicación ERP). |
| Filtrado | Fuera del alcance de este proyecto Manejo de conflictos: hacer una elección entre dos versiones de un objeto, cuando el objeto cambiado en el servidor y en el cliente desde la última sincronización. |
| Clave principal (PK) | Una propiedad del objeto que es única en todos los objetos del mismo tipo, p. Ej. la propiedad booking.data puede ser un PK cuando solo se puede hacer una reserva por día.|
| Conflicto PK | Un conflicto de clave principal se produce cuando se crea un objeto con la misma PK en el servidor y en un dispositivo o en 2 diferentes dispositivos (por ejemplo, una reserva se crea en 2 dispositivos diferentes para la misma fecha, mientras que solo se permite una reserva por día). |
| GUID | Una identificación única, que se genera automáticamente (usando dígitos aleatorios) para cada nuevo objeto. Los Guid están garantizados para ser únicos, incluso a través de dispositivos y servidores. |
| Contador | Un concepto introducido en appSync, para realizar un seguimiento de los cambios de datos en el servidor y en cada dispositivo. El contador se incrementa en cada cambio de objeto (nuevo objeto, objeto de actualización, eliminar objeto). |
| Eliminación suave | Cuando se elimina un objeto, su propiedad "isdeleted" se establece en 1, pero el objeto no se elimina físicamente en la base de datos. Esto se considera más seguro porque permite depurar y recuperar objetos cuando es necesario. |
| Marca de tiempo | Para cada objeto, la marca de tiempo (fecha y hora) se almacena desde la creación del objeto (timestrampcreated) y el último cambio de objeto (timestamplastupdate). Las marcas de tiempo no se utilizan para decidir qué datos sincronizar porque las marcas de tiempo pueden ser inexactas (por ejemplo, cuando el dispositivo el reloj no es idéntico al reloj del servidor), pero las marcas de tiempo se pueden usar para determinar qué versión de objeto se debe conservar cuando se produce un conflicto. |
