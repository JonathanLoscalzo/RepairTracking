using Microsoft.EntityFrameworkCore.Migrations;

namespace RepairTracking.Infrastructure.Migrations
{
    public partial class Repairs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RepairId",
                table: "Tasks",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RepairId",
                table: "Pieces",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Repair",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    ElementId = table.Column<string>(nullable: true),
                    Observations = table.Column<string>(nullable: true),
                    ClientId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Repair", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Repair_Clients_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Clients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Repair_Elements_ElementId",
                        column: x => x.ElementId,
                        principalTable: "Elements",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_RepairId",
                table: "Tasks",
                column: "RepairId");

            migrationBuilder.CreateIndex(
                name: "IX_Pieces_RepairId",
                table: "Pieces",
                column: "RepairId");

            migrationBuilder.CreateIndex(
                name: "IX_Repair_ClientId",
                table: "Repair",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_Repair_ElementId",
                table: "Repair",
                column: "ElementId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pieces_Repair_RepairId",
                table: "Pieces",
                column: "RepairId",
                principalTable: "Repair",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Repair_RepairId",
                table: "Tasks",
                column: "RepairId",
                principalTable: "Repair",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pieces_Repair_RepairId",
                table: "Pieces");

            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Repair_RepairId",
                table: "Tasks");

            migrationBuilder.DropTable(
                name: "Repair");

            migrationBuilder.DropIndex(
                name: "IX_Tasks_RepairId",
                table: "Tasks");

            migrationBuilder.DropIndex(
                name: "IX_Pieces_RepairId",
                table: "Pieces");

            migrationBuilder.DropColumn(
                name: "RepairId",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "RepairId",
                table: "Pieces");
        }
    }
}
