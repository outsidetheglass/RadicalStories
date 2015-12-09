namespace RadicalStories.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updtConfig : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Characters", "Meaning", c => c.String());
            DropColumn("dbo.Characters", "Story");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Characters", "Story", c => c.String());
            DropColumn("dbo.Characters", "Meaning");
        }
    }
}
