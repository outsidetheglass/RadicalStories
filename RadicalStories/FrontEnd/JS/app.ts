namespace MyApp {
    angular.module("MyApp", ["ngRoute", "ngResource", "ngAnimate"])
        .config(($routeProvider: angular.route.IRouteProvider, $locationProvider: angular.ILocationProvider) => {
            $routeProvider
                .when("/", {
                    templateUrl: "/FrontEnd/ngView/index.html",
                })
                .when("/delete/:id", {
                    templateUrl: "/FrontEnd/ngView/delete.html",
                    controller: MyApp.RadicalDeleteController,
                    controllerAs: 'vm'
                })
                .when("/edit/:id", {
                    templateUrl: "/FrontEnd/ngView/editRad.html",
                    controller: MyApp.RadicalEditController,
                    controllerAs: 'vm'
                })
                .when("/lyrics", {
                    templateUrl: "/FrontEnd/ngView/lyrics.html",
                    controller: MyApp.LyricsController,
                    controllerAs: 'vm'
                })
                .when("/categories", {
                    templateUrl: "/FrontEnd/ngView/categories.html",
                    controller: MyApp.CategoriesController,
                    controllerAs: 'vm'
                })
                .when("/add", {
                    templateUrl: "/FrontEnd/ngView/add.html",
                    controller: MyApp.RadicalAddController,
                    controllerAs: 'vm'
                })
                .when("/login", {
                    templateUrl: "/FrontEnd/ngView/login.html",
                    controller: MyApp.Controllers.LoginController,
                    controllerAs: 'vm'
                })
                .when("/register", {
                    templateUrl: "/FrontEnd/ngView/register.html",
                    controller: MyApp.Controllers.RegisterController,
                    controllerAs: 'vm'
                })
                .when("/radicalList/:id", {
                    templateUrl: "/FrontEnd/ngView/radicalList.html",
                    controller: MyApp.DrawRads,
                    controllerAs: 'vm'
                })
                .otherwise("/");

            $locationProvider.html5Mode(true);
        });
}
//end namespace