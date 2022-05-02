using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MovieApp.DB.Migrations
{
    public partial class SecondaMigrazione : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "comment",
                table: "comments",
                newName: "commentText");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "commentText",
                table: "comments",
                newName: "comment");
        }
    }
}
