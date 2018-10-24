# RepairTracking
sistema de trackeo de reparaciones


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