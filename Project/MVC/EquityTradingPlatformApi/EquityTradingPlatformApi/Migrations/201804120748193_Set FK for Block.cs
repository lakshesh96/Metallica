namespace EquityTradingPlatformApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SetFKforBlock : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Blocks", "User_Id", "dbo.Users");
            DropIndex("dbo.Blocks", new[] { "User_Id" });
            RenameColumn(table: "dbo.Blocks", name: "User_Id", newName: "UserId");
            AlterColumn("dbo.Blocks", "UserId", c => c.Int(nullable: false));
            CreateIndex("dbo.Blocks", "UserId");
            AddForeignKey("dbo.Blocks", "UserId", "dbo.Users", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Blocks", "UserId", "dbo.Users");
            DropIndex("dbo.Blocks", new[] { "UserId" });
            AlterColumn("dbo.Blocks", "UserId", c => c.Int());
            RenameColumn(table: "dbo.Blocks", name: "UserId", newName: "User_Id");
            CreateIndex("dbo.Blocks", "User_Id");
            AddForeignKey("dbo.Blocks", "User_Id", "dbo.Users", "Id");
        }
    }
}
