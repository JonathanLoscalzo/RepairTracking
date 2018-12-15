# RepairTracking
Aplicación Web que ofrece un conjunto de soluciones en entornos de soporte técnico, trabajando con dos simples roles: Los **reparadores**, y los **clientes**.

Los reparadores tienen la posibilidad de **administrar clientes**, y de **gestionar las reparaciones** encomendadas por los clientes. Mientras que los clientes tienen la posibilidad de **consultar el estado de sus reparaciones** solicitadas. 
Las reparaciones constan de **elementos reparables**. A su vez estos elementos se componen de **piezas y tareas**, que son asignadas por el reparador para cada elemento reparable que se cargue al sistema, permitiendo que futuras reparaciones se den de alta en el sistema con mayor rapidez.

## Software requerido:

* [Visual Studio Code](https://code.visualstudio.com/) (Obligatorio)

* [NPM](https://www.npmjs.com/) (Obligatorio)
* [.NET Core SDK](https://dotnet.microsoft.com/download) (Obligatorio)
* [XAMPP](https://www.apachefriends.org/es/index.html) (sugerencia para correr el DBMS MySQL en segundo plano y para crear la BBDD con phpMyAdmin)

## Pasos para una correcta ejecución de la aplicación:
1. Instalar todo el software mencionado anteriormente. Recomendación: reiniciar el SO antes de continuar con los siguientes pasos.

1. Crear una BBDD vacía con nombre `repairtracking` en MySQL.
1. Abrir el contenido clonado del repositorio con VS Code.
1. Instalar la extension sugerida automaticamente: `C# For Visual Studio Code`
1. Luego de la instalacion, se notificará que hay "assets" que son requeridos, y que hay dependencias sin resolver. Por lo tanto, permitirle a Visual Studio que resuelva todo lo anterior.
1. Ubicarse en el directorio **"src\RepairTracking.Web\ClientApp"**, borrar la carpeta **node_modules** y desde ese directorio ejecutar el comando `npm install`
1. Correr las migrations 
  ```
  cd src
  dotnet ef database update -s RepairTracking.Web/ -p RepairTracking.Infrastructure/
  ```
8. Desde Visual Studio Code presionar **F5** para correr la aplicación (verificando que la BBDD se encuentra en segundo plano ejecutandose).



## Migraciones
Para crear migraciones en casos de cambio de modelo

```
dotnet ef migrations add create_authentication_user -s RepairTracking.Web/RepairTracking.Web.csproj -p RepairTracking.Infrastructure/RepairTracking.Infrastructure.csproj
```

Para correr las migraciones

```
cd src
dotnet ef database update -s RepairTracking.Web/ -p RepairTracking.Infrastructure/
```
