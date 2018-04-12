namespace EquityTradingPlatformApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DbChange2 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Orders", "PMId", c => c.Int());
            AlterColumn("dbo.Orders", "BlockId", c => c.Int());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Orders", "BlockId", c => c.Int(nullable: false));
            AlterColumn("dbo.Orders", "PMId", c => c.Int(nullable: false));
        }
    }
}
