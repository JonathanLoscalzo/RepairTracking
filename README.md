# RepairTracking
Aplicación Web que ofrece un conjunto de soluciones en entornos de soporte técnico, trabajando con dos simples roles: Los **reparadores**, y los **clientes**.

Los reparadores tienen la posibilidad de **administrar clientes**, y de **gestionar las reparaciones** encomendadas por los clientes. Mientras que los clientes tienen la posibilidad de **consultar el estado de sus reparaciones** solicitadas. 
Las reparaciones constan de **elementos reparables**. A su vez estos elementos se componen de **piezas y tareas**, que son asignadas por el reparador para cada elemento reparable que se cargue al sistema, permitiendo que futuras reparaciones se den de alta en el sistema con mayor rapidez.

## Arquitectura
(Ir a link arquitectura)[https://github.com/JonathanLoscalzo/RepairTracking/blob/master/README.ARQ.md]

## Software requerido:

* [Visual Studio Code](https://code.visualstudio.com/) (Obligatorio)

* [NPM](https://www.npmjs.com/) (Obligatorio)
* [.NET Core SDK](https://dotnet.microsoft.com/download) (Obligatorio)
* [XAMPP](https://www.apachefriends.org/es/index.html) (sugerencia para correr el DBMS MySQL en segundo plano y para crear la BBDD con phpMyAdmin)
* [Docker y Compose](https://docs.docker.com/compose/) (sugerencia para correr el DBMS MySQL en vez de XAMPP)

## Pasos para una correcta ejecución de la aplicación:
1. Instalar todo el software mencionado anteriormente. Recomendación: reiniciar el SO antes de continuar con los siguientes pasos.

1. Crear una BBDD vacía con nombre `repairtracking` en MySQL.
1. Abrir el contenido clonado del repositorio con VS Code.
1. Instalar la extension sugerida automaticamente: `C# For Visual Studio Code`
1. Luego de la instalacion, se notificará que hay "assets" que son requeridos, y que hay dependencias sin resolver. Por lo tanto, permitirle a Visual Studio que resuelva todo lo anterior.
1. Ubicarse en el directorio **"src\RepairTracking.Web\ClientApp"**, borrar la carpeta **node_modules** y desde ese directorio ejecutar el comando `npm install`
1. Correr las migraciones en alguna terminal:
  ```
  cd src
  dotnet ef database update -s RepairTracking.Web/ -p RepairTracking.Infrastructure/
  ```
8. Desde Visual Studio Code presionar **F5** para correr la aplicación (verificando que la BBDD se encuentra en segundo plano ejecutandose).

9. Para iniciar sesión en el sistema, utilizar como nombre de usuario: `Admin` y contraseña: `1234ABab@` 

## Tecnologías empleadas para el desarrollo

La aplicación consiste en una SPA (Single-Page-Application) implementada con React-Redux, la cual consume datos de una API Web implementada usando la plataforma .NET Core y el Framework ASP.NET Core. Mas detalles de estas tecnologías, con sus links de referencias, se encuentran a continuación:

### [React](https://reactjs.org/)
Es una libreria de Javascript para la construcción de interfaces de usuario. Su filosofía es la siguiente:
* **Declarativo:** Permite la creación de vistas simples para cada estado de la aplicación, y luego actualiza y renderiza solo los componentes necesarios cuando ocurre algún cambio en el estado de una vista. Todo esto hace que el código se vuelva mucho mas previsible y facil de mantener.

* **Basado en componentes:** Permite la construcción de componentes encapsulados que gestionan su propio estado, para luego componer dichos componentes con el fin de construir UIs mucho mas complejas.

### [Redux](https://redux.js.org/)
Redux es un contenedor predecible del estado de aplicaciones JavaScript.
Ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar. La escencia de redux se puede resumir en:
* **Store:** Objeto plano que contiene todo el estado de la aplicación. Este objeto _Store_ es único.

* **Reducers:** Son funciones que especifican como cambia el estado almacenado en el **store** en respuesta de una **action**. Estas funciones, además, son _puras_, esto es, no modifican sus argumentos, no realizan tareas con efectos secundarios como llamadas a un API o transiciones de rutas, ni tampoco llaman a una función no pura, por ejemplo `Date.now()` o `Math.random()`.
* **Actions:** Las _acciones_ son un bloque de información (objetos planos) que envia datos desde la aplicación al store. Son la única fuente de información para el store. Las acciones, además, permiten indicar que _algo ocurrió_ pero no especifican como va a cambiar el _store_ en consecuencia a lo ocurrido. Es por eso que dichas acciones se complementan con los reducers para efectuar cambios en el estado de la aplicación.

### [React-Redux](https://react-redux.js.org/)

[Aquí](https://es.redux.js.org/docs/basico/uso-con-react.html) se describe con detalle el patrón de implementación empleado para la construcción de componentes de _React_ que están conectados al store de _Redux_. En esencia, consiste en lo siguiente:
* **Componentes presentacionales:** Definen como se ve la UI (markup, estilos). Por lo tanto, reciben los datos que tienen que ser mostrados.

* **Componentes contenedores:**: Especifican como funcionan las cosas (búsqueda de datos, actualizaciones de estado). Se caracterizan por ser componentes envueltos en un [HOC](https://reactjs.org/docs/higher-order-components.html) (High-Order-Component), los cuales están conectados al _store_ de Redux. Estos componentes renderizan a los componentes presentacionales, enviandole por **[props](https://reactjs.org/docs/components-and-props.html)** los datos recibidos del _store_.

### [.NET Core](https://docs.microsoft.com/en-us/dotnet/framework/get-started/net-core-and-open-source)
Es una implementación de .NET Standard de propósito general, multiplataforma y open source. Incluye muchas de las APIs de .NET Framework (pero .NET Core tiene un set mas pequeño) e incluye un runtime, compilador y componentes que soportan una extensa variedad de sistemas operativos y chips. 

### [ASP.NET Core](https://github.com/aspnet/AspNetCore)
Es un Framework multiplataforma y open-source, para construir Aplicaciones conectadas a Internet basadas en la nube, como Web-Apps, IoT Apps, y backends moviles. ASP.NET Core puede correr sobre .NET Core o sobre .NET Framework. Fué diseñado para proveer un framework de desarrollo optimizado para apps que van a ser desplegadas en la nube. Consiste en una serie de componentes modulares con poco overhead, para obtener la máxima flexibilidad en la construcción de las soluciones.

### [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)
EF Core es una versión liviana, extensible y multiplataforma de la famosa tecnología de acceso a datos [Entity Framework](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/ef/overview).
EF Core actua como O/RM (object-relational mapper), permitiendo que desarrolladores .NET puedan trabajar con una BBDD usando objetos .NET, y eliminando la necesidad de código de acceso a datos que ellos mismos tendrían que escribir si no dispusieran de este medio.
EF Core trabaja con muchos motores de bases de datos. En nuestro proyecto, utilizamos como DBMS MySQL. Para lograr mapear las entidades a objetos y viceversa con dicho DBMS, se utilizó el provider [Pomelo](https://docs.microsoft.com/en-us/ef/core/providers/index) para EF Core y MySQL.

## Requerimientos del proyecto:
Se muestra, a continuación, un listado con todas las Historias de usuario, tanto desarrolladas como pendientes de desarrollo.

### Historias de usuario completadas:
* Crear cliente.

* Modificar datos de un cliente.
* Listar clientes.
* Ver detalles de un cliente.
* Iniciar sesión.
* Cerrar sesión.
* Listar elementos reparables.
* Cargar tipo de elementos reparables.
* Modificar elemento reparable.
* Eliminar elemento reparable.
* Ver detalles de un elemento reparable.
* Tareas Genéricas CRUD.
* Cargar nueva reparación.
* Listar reparaciones generales o para un cliente.

### Historias de usuario pendientes de desarrollo:
* Cargar pieza/tarea a una reparación.

* Ver detalles de una reparación.
* Finalizar reparación.
* Chequear estado de una reparación.

## Migraciones y notas para los colaboradores
Para crear migraciones en casos de cambio de modelo

```
dotnet ef migrations add create_authentication_user -s RepairTracking.Web/RepairTracking.Web.csproj -p RepairTracking.Infrastructure/RepairTracking.Infrastructure.csproj
```

Para correr las migraciones

```
cd src
dotnet ef database update -s RepairTracking.Web/ -p RepairTracking.Infrastructure/
```
