namespace Metallica.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class GUIDinTrade : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Trades", "commodity_Id", "dbo.Commodities");
            DropForeignKey("dbo.Trades", "counterParty_Id", "dbo.CounterParties");
            DropForeignKey("dbo.Trades", "location_Id", "dbo.Locations");
            DropForeignKey("dbo.Trades", "user_Id", "dbo.Users");
            DropIndex("dbo.Trades", new[] { "commodity_Id" });
            DropIndex("dbo.Trades", new[] { "counterParty_Id" });
            DropIndex("dbo.Trades", new[] { "location_Id" });
            DropIndex("dbo.Trades", new[] { "user_Id" });
            DropColumn("dbo.Trades", "CommodityId");
            DropColumn("dbo.Trades", "CounterPartyId");
            DropColumn("dbo.Trades", "LocationId");
            DropColumn("dbo.Trades", "UserId");
            RenameColumn(table: "dbo.Trades", name: "commodity_Id", newName: "CommodityId");
            RenameColumn(table: "dbo.Trades", name: "counterParty_Id", newName: "CounterPartyId");
            RenameColumn(table: "dbo.Trades", name: "location_Id", newName: "LocationId");
            RenameColumn(table: "dbo.Trades", name: "user_Id", newName: "UserId");
            AlterColumn("dbo.Trades", "UserId", c => c.Guid(nullable: false));
            AlterColumn("dbo.Trades", "CommodityId", c => c.Guid(nullable: false));
            AlterColumn("dbo.Trades", "CounterPartyId", c => c.Guid(nullable: false));
            AlterColumn("dbo.Trades", "LocationId", c => c.Guid(nullable: false));
            AlterColumn("dbo.Trades", "CommodityId", c => c.Guid(nullable: false));
            AlterColumn("dbo.Trades", "CounterPartyId", c => c.Guid(nullable: false));
            AlterColumn("dbo.Trades", "LocationId", c => c.Guid(nullable: false));
            AlterColumn("dbo.Trades", "UserId", c => c.Guid(nullable: false));
            CreateIndex("dbo.Trades", "UserId");
            CreateIndex("dbo.Trades", "CommodityId");
            CreateIndex("dbo.Trades", "CounterPartyId");
            CreateIndex("dbo.Trades", "LocationId");
            AddForeignKey("dbo.Trades", "CommodityId", "dbo.Commodities", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Trades", "CounterPartyId", "dbo.CounterParties", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Trades", "LocationId", "dbo.Locations", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Trades", "UserId", "dbo.Users", "Id", cascadeDelete: true);
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
            AlterColumn("dbo.Trades", "UserId", c => c.Guid());
            AlterColumn("dbo.Trades", "LocationId", c => c.Guid());
            AlterColumn("dbo.Trades", "CounterPartyId", c => c.Guid());
            AlterColumn("dbo.Trades", "CommodityId", c => c.Guid());
            AlterColumn("dbo.Trades", "LocationId", c => c.Int(nullable: false));
            AlterColumn("dbo.Trades", "CounterPartyId", c => c.Int(nullable: false));
            AlterColumn("dbo.Trades", "CommodityId", c => c.Int(nullable: false));
            AlterColumn("dbo.Trades", "UserId", c => c.Int(nullable: false));
            RenameColumn(table: "dbo.Trades", name: "UserId", newName: "user_Id");
            RenameColumn(table: "dbo.Trades", name: "LocationId", newName: "location_Id");
            RenameColumn(table: "dbo.Trades", name: "CounterPartyId", newName: "counterParty_Id");
            RenameColumn(table: "dbo.Trades", name: "CommodityId", newName: "commodity_Id");
            AddColumn("dbo.Trades", "UserId", c => c.Int(nullable: false));
            AddColumn("dbo.Trades", "LocationId", c => c.Int(nullable: false));
            AddColumn("dbo.Trades", "CounterPartyId", c => c.Int(nullable: false));
            AddColumn("dbo.Trades", "CommodityId", c => c.Int(nullable: false));
            CreateIndex("dbo.Trades", "user_Id");
            CreateIndex("dbo.Trades", "location_Id");
            CreateIndex("dbo.Trades", "counterParty_Id");
            CreateIndex("dbo.Trades", "commodity_Id");
            AddForeignKey("dbo.Trades", "user_Id", "dbo.Users", "Id");
            AddForeignKey("dbo.Trades", "location_Id", "dbo.Locations", "Id");
            AddForeignKey("dbo.Trades", "counterParty_Id", "dbo.CounterParties", "Id");
            AddForeignKey("dbo.Trades", "commodity_Id", "dbo.Commodities", "Id");
        }
    }
}
