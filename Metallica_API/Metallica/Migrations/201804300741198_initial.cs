namespace Metallica.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Commodities",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true, defaultValueSql: "newsequentialid()"),
                        Name = c.String(nullable: false),
                        Code = c.String(nullable: false),
                        CurrentPrice = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.CounterParties",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true, defaultValueSql: "newsequentialid()"),
                        Name = c.String(nullable: false),
                        Code = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Locations",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true, defaultValueSql: "newsequentialid()"),
                        Name = c.String(nullable: false),
                        Code = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Trades",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true, defaultValueSql: "newsequentialid()"),
                        Side = c.Int(nullable: false),
                        Status = c.Int(nullable: false),
                        UserId = c.Int(nullable: false),
                        CommodityId = c.Int(nullable: false),
                        CounterPartyId = c.Int(nullable: false),
                        LocationId = c.Int(nullable: false),
                        Price = c.Double(nullable: false),
                        Date = c.DateTime(nullable: false),
                        Quantity = c.Int(nullable: false),
                        commodity_Id = c.Guid(),
                        counterParty_Id = c.Guid(),
                        location_Id = c.Guid(),
                        user_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Commodities", t => t.commodity_Id)
                .ForeignKey("dbo.CounterParties", t => t.counterParty_Id)
                .ForeignKey("dbo.Locations", t => t.location_Id)
                .ForeignKey("dbo.Users", t => t.user_Id)
                .Index(t => t.commodity_Id)
                .Index(t => t.counterParty_Id)
                .Index(t => t.location_Id)
                .Index(t => t.user_Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true, defaultValueSql: "newsequentialid()"),
                        UserName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Trades", "user_Id", "dbo.Users");
            DropForeignKey("dbo.Trades", "location_Id", "dbo.Locations");
            DropForeignKey("dbo.Trades", "counterParty_Id", "dbo.CounterParties");
            DropForeignKey("dbo.Trades", "commodity_Id", "dbo.Commodities");
            DropIndex("dbo.Trades", new[] { "user_Id" });
            DropIndex("dbo.Trades", new[] { "location_Id" });
            DropIndex("dbo.Trades", new[] { "counterParty_Id" });
            DropIndex("dbo.Trades", new[] { "commodity_Id" });
            DropTable("dbo.Users");
            DropTable("dbo.Trades");
            DropTable("dbo.Locations");
            DropTable("dbo.CounterParties");
            DropTable("dbo.Commodities");
        }
    }
}
