using Microsoft.EntityFrameworkCore.Migrations;

namespace RepairTracking.Infrastructure.Migrations
{
    public partial class create_task_generic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "TaskGenerics",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "TaskGenerics");
        }
    }
}
