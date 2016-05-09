namespace RadicalStories.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class drawli : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Radicals", "Lines");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Radicals", "Lines", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
    }
}
