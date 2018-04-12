namespace EquityTradingPlatformApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class removingFKforBlock : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Orders", "Block_Id", "dbo.Blocks");
            DropIndex("dbo.Orders", new[] { "Block_Id" });
            DropColumn("dbo.Orders", "Block_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Orders", "Block_Id", c => c.Int());
            CreateIndex("dbo.Orders", "Block_Id");
            AddForeignKey("dbo.Orders", "Block_Id", "dbo.Blocks", "Id");
        }
    }
}
