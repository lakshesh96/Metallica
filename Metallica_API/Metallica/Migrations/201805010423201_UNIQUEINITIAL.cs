namespace Metallica.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UNIQUEINITIAL : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Trades", "user_Id", "dbo.Users");
            DropIndex("dbo.Trades", new[] { "user_Id" });
            DropColumn("dbo.Trades", "UserId");
            DropColumn("dbo.Trades", "user_Id");
            DropTable("dbo.Users");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        UserName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Trades", "user_Id", c => c.Guid());
            AddColumn("dbo.Trades", "UserId", c => c.Int(nullable: false));
            CreateIndex("dbo.Trades", "user_Id");
            AddForeignKey("dbo.Trades", "user_Id", "dbo.Users", "Id");
        }
    }
}
