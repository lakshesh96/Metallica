namespace Metallica.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BasePrice : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Commodities", "BasePrice", c => c.Double(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Commodities", "BasePrice");
        }
    }
}
