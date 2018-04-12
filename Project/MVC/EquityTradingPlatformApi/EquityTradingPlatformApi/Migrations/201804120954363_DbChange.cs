namespace EquityTradingPlatformApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DbChange : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Orders", "User_Id", "dbo.Users");
            DropIndex("dbo.Orders", new[] { "User_Id" });
            RenameColumn(table: "dbo.Orders", name: "User_Id", newName: "UserId");
            AddColumn("dbo.Orders", "PMId", c => c.Int(nullable: false));
            AddColumn("dbo.Orders", "BlockId", c => c.Int(nullable: false));
            AlterColumn("dbo.Orders", "UserId", c => c.Int(nullable: false));
            CreateIndex("dbo.Orders", "UserId");
            AddForeignKey("dbo.Orders", "UserId", "dbo.Users", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Orders", "UserId", "dbo.Users");
            DropIndex("dbo.Orders", new[] { "UserId" });
            AlterColumn("dbo.Orders", "UserId", c => c.Int());
            DropColumn("dbo.Orders", "BlockId");
            DropColumn("dbo.Orders", "PMId");
            RenameColumn(table: "dbo.Orders", name: "UserId", newName: "User_Id");
            CreateIndex("dbo.Orders", "User_Id");
            AddForeignKey("dbo.Orders", "User_Id", "dbo.Users", "Id");
        }
    }
}
