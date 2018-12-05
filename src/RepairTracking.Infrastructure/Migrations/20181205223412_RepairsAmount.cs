using Microsoft.EntityFrameworkCore.Migrations;

namespace RepairTracking.Infrastructure.Migrations
{
    public partial class RepairsAmount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pieces_Repair_RepairId",
                table: "Pieces");

            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Repair_RepairId",
                table: "Tasks");

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

            migrationBuilder.AddColumn<decimal>(
                name: "Amount",
                table: "Repair",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Amount",
                table: "Repair");

            migrationBuilder.AddColumn<string>(
                name: "RepairId",
                table: "Tasks",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RepairId",
                table: "Pieces",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_RepairId",
                table: "Tasks",
                column: "RepairId");

            migrationBuilder.CreateIndex(
                name: "IX_Pieces_RepairId",
                table: "Pieces",
                column: "RepairId");

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
    }
}
