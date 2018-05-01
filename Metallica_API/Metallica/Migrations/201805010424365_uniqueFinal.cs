namespace Metallica.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class uniqueFinal : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        UserName = c.String(maxLength: 20, unicode: false),
                        Password = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.UserName, unique: true);
            
            AddColumn("dbo.Trades", "UserId", c => c.Int(nullable: false));
            AddColumn("dbo.Trades", "user_Id", c => c.Guid());
            CreateIndex("dbo.Trades", "user_Id");
            AddForeignKey("dbo.Trades", "user_Id", "dbo.Users", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Trades", "user_Id", "dbo.Users");
            DropIndex("dbo.Users", new[] { "UserName" });
            DropIndex("dbo.Trades", new[] { "user_Id" });
            DropColumn("dbo.Trades", "user_Id");
            DropColumn("dbo.Trades", "UserId");
            DropTable("dbo.Users");
        }
    }
}
