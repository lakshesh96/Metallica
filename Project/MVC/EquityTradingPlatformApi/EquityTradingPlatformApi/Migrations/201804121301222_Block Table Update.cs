namespace EquityTradingPlatformApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BlockTableUpdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Blocks", "Type", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Blocks", "Type");
        }
    }
}
