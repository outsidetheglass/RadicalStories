var MyApp;
(function (MyApp) {
    angular.module("MyApp", ["ngRoute", "ngResource"])
        .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "/FrontEnd/ngView/index.html",
            controller: MyApp.CategoriesController,
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
            .otherwise("/");
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
//end namespace 
//# sourceMappingURL=app.js.map