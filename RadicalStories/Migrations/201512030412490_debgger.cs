namespace RadicalStories.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class debgger : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Radical = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Characters", "Category_Id", c => c.Int());
            CreateIndex("dbo.Characters", "Category_Id");
            AddForeignKey("dbo.Characters", "Category_Id", "dbo.Categories", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Characters", "Category_Id", "dbo.Categories");
            DropIndex("dbo.Characters", new[] { "Category_Id" });
            DropColumn("dbo.Characters", "Category_Id");
            DropTable("dbo.Categories");
        }
    }
}
