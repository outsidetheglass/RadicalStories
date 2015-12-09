var MyApp;
(function (MyApp) {
    angular.module("MyApp", ["ngRoute", "ngResource", "ngAnimate"])
        .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "/FrontEnd/ngView/index.html",
            controller: MyApp.Controllers.AccountController,
            controllerAs: 'vm'
        })
            .when("/delete/:id", {
            templateUrl: "/FrontEnd/ngView/delete.html",
            controller: MyApp.CharacterDeleteController,
            controllerAs: 'vm'
        })
            .when("/edit/:id", {
            templateUrl: "/FrontEnd/ngView/editChar.html",
            controller: MyApp.CharacterEditController,
            controllerAs: 'vm'
        })
            .when("/categories", {
            templateUrl: "/FrontEnd/ngView/categories.html",
            controller: MyApp.CategoriesController,
            controllerAs: 'vm'
        })
            .when("/add", {
            templateUrl: "/FrontEnd/ngView/add.html",
            controller: MyApp.CharacterAddController,
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
            .otherwise("/");
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
//end namespace 
//# sourceMappingURL=app.js.map