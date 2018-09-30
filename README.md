# RepairTracking
sistema de trackeo de reparaciones


## Migraciones

```
dotnet ef migrations add create_authentication_user -s RepairTracking.Web/RepairTracking.Web.csproj -p RepairTracking.Infrastructure/RepairTracking.Infrastructure.csproj
```


```
cd src
dotnet ef database update -s RepairTracking.Web/ -p RepairTracking.Infrastructure/
```