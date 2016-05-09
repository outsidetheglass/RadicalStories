namespace RadicalStories.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class drawlin : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Radicals", "Lines", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Radicals", "Lines");
        }
    }
}
