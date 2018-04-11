namespace EquityTradingPlatformApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Admins",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserName = c.String(nullable: false),
                        Password = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Blocks",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BlockStatus = c.Int(nullable: false),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.User_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Password = c.String(nullable: false),
                        Approved = c.Boolean(nullable: false),
                        UserName = c.String(nullable: false),
                        EmployeeId = c.Int(nullable: false),
                        Type = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Employees", t => t.EmployeeId, cascadeDelete: true)
                .Index(t => t.EmployeeId);
            
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.CurrentPositions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Date = c.DateTime(nullable: false),
                        PriceExecuted = c.Int(nullable: false),
                        Quantity = c.Int(nullable: false),
                        OrderId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Orders", t => t.OrderId, cascadeDelete: true)
                .Index(t => t.OrderId);
            
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        OrderType = c.Int(nullable: false),
                        OrderSide = c.Int(nullable: false),
                        StockId = c.Int(nullable: false),
                        Quantity = c.Int(nullable: false),
                        OrderStatus = c.Int(nullable: false),
                        VolumeExecuted = c.Int(nullable: false),
                        LimitPrice = c.Int(nullable: false),
                        StopPrice = c.Int(nullable: false),
                        Block_Id = c.Int(),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Blocks", t => t.Block_Id)
                .ForeignKey("dbo.Users", t => t.User_Id)
                .Index(t => t.Block_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Stocks",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Symbol = c.String(nullable: false),
                        Name = c.String(nullable: false),
                        CurrentPrice = c.Int(nullable: false),
                        VolumeAvailable = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CurrentPositions", "OrderId", "dbo.Orders");
            DropForeignKey("dbo.Orders", "User_Id", "dbo.Users");
            DropForeignKey("dbo.Orders", "Block_Id", "dbo.Blocks");
            DropForeignKey("dbo.Blocks", "User_Id", "dbo.Users");
            DropForeignKey("dbo.Users", "EmployeeId", "dbo.Employees");
            DropIndex("dbo.Orders", new[] { "User_Id" });
            DropIndex("dbo.Orders", new[] { "Block_Id" });
            DropIndex("dbo.CurrentPositions", new[] { "OrderId" });
            DropIndex("dbo.Users", new[] { "EmployeeId" });
            DropIndex("dbo.Blocks", new[] { "User_Id" });
            DropTable("dbo.Stocks");
            DropTable("dbo.Orders");
            DropTable("dbo.CurrentPositions");
            DropTable("dbo.Employees");
            DropTable("dbo.Users");
            DropTable("dbo.Blocks");
            DropTable("dbo.Admins");
        }
    }
}
