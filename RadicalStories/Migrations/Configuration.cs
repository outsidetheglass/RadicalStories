namespace RadicalStories.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Claims;

    internal sealed class Configuration : DbMigrationsConfiguration<RadicalStories.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(RadicalStories.Models.ApplicationDbContext context){
            var categories = new Category[] {
                new Category
                {
                    Radical = "一",
                    Characters = new Character[]
                    {
                        new Character {Symbol = "一" }
                    }
                },
                new Category
                {
                    Radical = "木",
                    Characters = new Character[]
                    {
                        new Character {Symbol = "木" },
                        new Character {Symbol = "林" }
                    }
                }
            };

            context.Categories.AddOrUpdate(m => m.Radical, categories);

            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);

            var user = userManager.FindByEmail("outsidetheglass93@gmail.com");
            if (user == null) {
                user = new ApplicationUser {
                    UserName = "outsidetheglass93@gmail.com",
                    Email = "outsidetheglass93@gmail.com"
                };
                userManager.Create(user, "Secret123!");
                userManager.AddClaim(user.Id, new Claim("CanAddCharacters", "true"));
            }
            context.Users.AddOrUpdate(m => m.UserName, user);

        }
    }
}
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //