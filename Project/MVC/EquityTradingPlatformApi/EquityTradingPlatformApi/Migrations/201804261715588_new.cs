namespace EquityTradingPlatformApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _new : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TransactionHistories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        Quantity = c.Int(nullable: false),
                        BuyPrice = c.Double(nullable: false),
                        SellPrice = c.Double(nullable: false),
                        StockId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Stocks", t => t.StockId, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.StockId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TransactionHistories", "UserId", "dbo.Users");
            DropForeignKey("dbo.TransactionHistories", "StockId", "dbo.Stocks");
            DropIndex("dbo.TransactionHistories", new[] { "StockId" });
            DropIndex("dbo.TransactionHistories", new[] { "UserId" });
            DropTable("dbo.TransactionHistories");
        }
    }
}
