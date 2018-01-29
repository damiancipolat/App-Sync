# App-Sync-Patterns
El contenido teorico de este sitio fue sacado de **appsync.org**, obtenido del sig. **[enlace]**, los códigos fuentes son desarrollados por mí, usando la tecnologia **NODE.JS**.

[enlace]:https://www.slideshare.net/nikonelissen/appsyncorg-opensource-patterns-and-code-for-data-synchronization-in-mobile-apps

Casi todas las aplicaciones móviles necesitan sincronizar datos con un servidor o back-end (por ejemplo, "la nube" para hacerlo más elegante), sin embargo es difícil para encontrar patrones, algoritmos, estrategias o código de ejemplo para ayudar a los desarrolladores a implementar una estrategia óptima de sincronización de datos para aplicaciones que desarrollan.

### Definiciones generales:

- **Dispositivo o cliente**:
Dispositivo móvil (teléfono inteligente o tableta) que ejecuta una aplicación que sincronizará los datos con un servidor / backend / cloud.
- **Servidor (o backend, nube)**: infraestructura centralizada que sincronizará datos con múltiples dispositivos.
- **Sincronización**: envío de datos desde dispositivos a un servidor y viceversa, sin perder datos y sin transferencia de datos innecesarios. La sincronización es especialmente necesaria en aplicaciones móviles que tienen una base de datos local y que sincronizarán datos con un servidor cuando no estén desconectado.
