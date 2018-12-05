using Microsoft.EntityFrameworkCore.Migrations;

namespace RepairTracking.Infrastructure.Migrations
{
    public partial class RepairCode : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Repair",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Code",
                table: "Repair");
        }
    }
}
