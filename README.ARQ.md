# Diagrama
![alt text](https://github.com/JonathanLoscalzo/RepairTracking/blob/master/diagrama_arquitectura.jpg)

# Descripción de la Arquitectura del Proyecto

El proyecto está divido en 3 capas, intentando respetar conceptos de Clean Architecture.
El objetivo de la misma es "separation of concerns", y esta separación está dada por las capas desarrolladas.

Uno de los objetivos principales es la "Dependency Rule", es decir todas las dependencias deben apuntar hacia adentro, y las capas internas no deben conocer a las externas.

# Capas

## Core
Esta capa representa toda la lógica de negocio. En nuestro caso, no es tan compleja y es representadas por las entidades. 
También aquí se describen las Interfaces a implementar por las capas exteriores. En nuestro caso, son los repositorios.

## Infrastructure
En esta capa, se agrupan todo lo reference a acceso a datos: 
* implementación de los repositorios de código
* migraciones
* acceso a datos (RepairTrackingContext)

Esta capa, no es independiente del framework y es la que lo utiliza, en este caso es EFcore.
Si quisieramos que sea más abstracta, podríamos definir una nueva capa e implementar el RepairTrackingContext para el acceso a datos correspondiente (por ejemplo, MongoDB)

## Web
### API
Esta capa agrupa distintos aspectos interesantes de la arquitectura: 

#### Profilers
Son los encargados de traducir entidades en ViewModels, y viceversa. Se utiliza la librería [AutoMapper](https://automapper.org/)

#### Configurations
Código que extiende la utilización del framework de IoC. La clase ServiceConfiguration en particular, es la que realiza la inyección de dependencias de los repositorios. Las otras realizan inyecciones de connectionStrings, Seguridad, etc...

#### Controllers
La forma de exponer el código implementado a través de la web. La aplicación SPA la utiliza para mostrar los datos desde el frontend. Cada una de estos controladores, utiliza seguridad por medio de JWT.

#### Startup.cs
Este archivo es el que realiza el bootstrap de la aplicación, es decir se encarga de realizar las inyecciones para que se puedan utilizar luego en los controladores (y otros servicios) por medio del IoC. Si observamos cada controlador, ellos reciben por constructor las clases de Mapper y Repository instanciadas según corresponda. Esto es útil cuando queremos realizar test de unidad o de integración. 
Existen librerías que nos permiten inyectar automáticamente instancias Mock's de los servicios, algunas de ellas pueden ser [Moq](https://github.com/moq/moq4) y [AutoMoq](https://github.com/darrencauthon/AutoMoq).
También aquí se puede configurar un IoC distinto, en el proyecto en particular se utiliza la librería que provee el framework [DependencyInjection](https://www.nuget.org/packages/Microsoft.Extensions.DependencyInjection/3.0.0-preview.18572.1)

## UI
La arquitectura de UI fue desarrollada en el Readme inicial, explicamos en grandes rasgos la misma: 

### Modules
Representan código agrupado por lógica de negocio: auth, clients, element, repair, task, etc...  
Por ejemplo, en la carpeta task podremos ver lo que como diagramamos el frontend: 
* 1 carpeta por cada lógica de negocio
  - En cada una, si era necesario creabamos 2 carpeta más container y presentational: 
    * index.js: aquí es donde se desarrolla el código Redux, donde se agrupa toda la lógica de las pantallas: 
        - action types: represetan las acciones a realizar
        - actions: son las operaciones que se ofrecen en la vista
        - reducer: son la forma que se modifica el estado en particular.
    * container: representa las páginas manejadas por redux, aquí es donde inyectamos la lógica con la vista.
    * presentational: código React que representa a la vista. 
* index.js: aquí realiza la aplicación el arranque de todas las configuraciones esenciales.
* App.js: Aquí se inicializan las rutas de SPA esenciales.


