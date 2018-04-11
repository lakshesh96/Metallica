namespace EquityTradingPlatformApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class StockChange : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Orders", "StocksId", c => c.Int(nullable: false));
            CreateIndex("dbo.Orders", "StocksId");
            AddForeignKey("dbo.Orders", "StocksId", "dbo.Stocks", "Id", cascadeDelete: true);
            DropColumn("dbo.Orders", "StockId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Orders", "StockId", c => c.Int(nullable: false));
            DropForeignKey("dbo.Orders", "StocksId", "dbo.Stocks");
            DropIndex("dbo.Orders", new[] { "StocksId" });
            DropColumn("dbo.Orders", "StocksId");
        }
    }
}
