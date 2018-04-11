namespace EquityTradingPlatformApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Changes : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.CurrentPositions", "VolumeExecuted", c => c.Int(nullable: false));
            AlterColumn("dbo.CurrentPositions", "PriceExecuted", c => c.Double(nullable: false));
            AlterColumn("dbo.Orders", "LimitPrice", c => c.Double(nullable: false));
            AlterColumn("dbo.Orders", "StopPrice", c => c.Double(nullable: false));
            AlterColumn("dbo.Stocks", "CurrentPrice", c => c.Double(nullable: false));
            DropColumn("dbo.CurrentPositions", "Quantity");
            DropColumn("dbo.Orders", "VolumeExecuted");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Orders", "VolumeExecuted", c => c.Int(nullable: false));
            AddColumn("dbo.CurrentPositions", "Quantity", c => c.Int(nullable: false));
            AlterColumn("dbo.Stocks", "CurrentPrice", c => c.Int(nullable: false));
            AlterColumn("dbo.Orders", "StopPrice", c => c.Int(nullable: false));
            AlterColumn("dbo.Orders", "LimitPrice", c => c.Int(nullable: false));
            AlterColumn("dbo.CurrentPositions", "PriceExecuted", c => c.Int(nullable: false));
            DropColumn("dbo.CurrentPositions", "VolumeExecuted");
        }
    }
}
