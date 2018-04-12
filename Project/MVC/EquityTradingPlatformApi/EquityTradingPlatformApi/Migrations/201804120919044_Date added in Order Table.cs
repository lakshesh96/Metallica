namespace EquityTradingPlatformApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DateaddedinOrderTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Orders", "DateAdded", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Orders", "DateAdded");
        }
    }
}
