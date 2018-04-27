namespace Metallica.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Commodities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Code = c.String(nullable: false),
                        CurrentPrice = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.CounterParties",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Code = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Locations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Code = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Trades",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Side = c.Int(nullable: false),
                        Status = c.Int(nullable: false),
                        UserId = c.Int(nullable: false),
                        CommodityId = c.Int(nullable: false),
                        CounterPartyId = c.Int(nullable: false),
                        LocationId = c.Int(nullable: false),
                        Price = c.Double(nullable: false),
                        Date = c.DateTime(nullable: false),
                        Quantity = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Commodities", t => t.CommodityId, cascadeDelete: true)
                .ForeignKey("dbo.CounterParties", t => t.CounterPartyId, cascadeDelete: true)
                .ForeignKey("dbo.Locations", t => t.LocationId, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.CommodityId)
                .Index(t => t.CounterPartyId)
                .Index(t => t.LocationId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Trades", "UserId", "dbo.Users");
            DropForeignKey("dbo.Trades", "LocationId", "dbo.Locations");
            DropForeignKey("dbo.Trades", "CounterPartyId", "dbo.CounterParties");
            DropForeignKey("dbo.Trades", "CommodityId", "dbo.Commodities");
            DropIndex("dbo.Trades", new[] { "LocationId" });
            DropIndex("dbo.Trades", new[] { "CounterPartyId" });
            DropIndex("dbo.Trades", new[] { "CommodityId" });
            DropIndex("dbo.Trades", new[] { "UserId" });
            DropTable("dbo.Users");
            DropTable("dbo.Trades");
            DropTable("dbo.Locations");
            DropTable("dbo.CounterParties");
            DropTable("dbo.Commodities");
        }
    }
}
