# App-Sync-Patterns
El contenido teorico de este sitio fue sacado de **appsync.org**, obtenido del sig. **[enlace]**, los códigos fuentes son desarrollados por mí, usando la tecnologia **NODE.JS**.

[enlace]:https://www.slideshare.net/nikonelissen/appsyncorg-opensource-patterns-and-code-for-data-synchronization-in-mobile-apps

Casi todas las aplicaciones móviles necesitan sincronizar datos con un servidor o back-end (por ejemplo, "la nube" para hacerlo más elegante), sin embargo es difícil para encontrar patrones, algoritmos, estrategias o código de ejemplo para ayudar a los desarrolladores a implementar una estrategia óptima de sincronización de datos para aplicaciones que desarrollan.

### Definiciones generales:

- **Dispositivo o cliente**:
Dispositivo móvil (teléfono inteligente o tableta) que ejecuta una aplicación que sincronizará los datos con un servidor / backend / cloud.
- **Servidor (o backend, nube)**: infraestructura centralizada que sincronizará datos con múltiples dispositivos.
- **Sincronización**: envío de datos desde dispositivos a un servidor y viceversa, sin perder datos y sin transferencia de datos innecesarios. La sincronización es especialmente necesaria en aplicaciones móviles que tienen una base de datos local y que sincronizarán datos con un servidor cuando no estén desconectado.
- **Sincronización completa**: sincronización de todos los datos (o todos los objetos del mismo tipo).
- **Sincronización incremental**: sincronización de solo los datos que han cambiado desde la última sincronización.
- **Objeto**: un único elemento de datos que se sincroniza entre dispositivos y un servidor, p. un registro de base de datos, un elemento de agenda o un objeto complejo incluyendo un cliente y todos sus pedidos y facturas (por ejemplo, en una aplicación ERP).
- **Filtrado**: normalmente no todos los datos se sincronizan entre un servidor y un dispositivo (por ejemplo, datos sincronizados entre el servidor y un determinado el dispositivo puede estar limitado según la cuenta de usuario que haya iniciado sesión).
- **Seguridad y control de acceso**: fuera del alcance de este proyecto Manejo de conflictos: hacer una elección entre dos versiones de un objeto, cuando el objeto cambiado en el servidor y en el cliente desde la última sincronización.
- **Clave principal (PK)**: una propiedad del objeto que es única en todos los objetos del mismo tipo, p. Ej. la propiedad booking.data puede ser un PK cuando solo se puede hacer una reserva por día.
- **Conflicto PK**: un conflicto de clave principal se produce cuando se crea un objeto con la misma PK en el servidor y en un dispositivo o en 2 diferentes dispositivos (por ejemplo, una reserva se crea en 2 dispositivos diferentes para la misma fecha, mientras que solo se permite una reserva por día).
- **GUID**: una identificación única, que se genera automáticamente (usando dígitos aleatorios) para cada nuevo objeto. Los Guid están garantizados para ser únicos, incluso a través de dispositivos y servidores.
- **Contador**: un concepto introducido en appSync, para realizar un seguimiento de los cambios de datos en el servidor y en cada dispositivo. El contador se incrementa en cada cambio de objeto (nuevo objeto, objeto de actualización, eliminar objeto).
- **Eliminación suave**: cuando se elimina un objeto, su propiedad "isdeleted" se establece en 1, pero el objeto no se elimina físicamente en la base de datos. Esto se considera más seguro porque permite depurar y recuperar objetos cuando es necesario.
- **Marca de tiempo**: para cada objeto, la marca de tiempo (fecha y hora) se almacena desde la creación del objeto (timestrampcreated) y el último cambio de objeto (timestamplastupdate). Las marcas de tiempo no se utilizan para decidir qué datos sincronizar porque las marcas de tiempo pueden ser inexactas (por ejemplo, cuando el dispositivo el reloj no es idéntico al reloj del servidor), pero las marcas de tiempo se pueden usar para determinar qué versión de objeto se debe conservar cuando se produce un conflicto.
