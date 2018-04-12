namespace EquityTradingPlatformApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Dbchange3 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Blocks", "Side", c => c.Int(nullable: false));
            AddColumn("dbo.Blocks", "StocksId", c => c.Int(nullable: false));
            CreateIndex("dbo.Blocks", "StocksId");
            AddForeignKey("dbo.Blocks", "StocksId", "dbo.Stocks", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Blocks", "StocksId", "dbo.Stocks");
            DropIndex("dbo.Blocks", new[] { "StocksId" });
            DropColumn("dbo.Blocks", "StocksId");
            DropColumn("dbo.Blocks", "Side");
        }
    }
}
