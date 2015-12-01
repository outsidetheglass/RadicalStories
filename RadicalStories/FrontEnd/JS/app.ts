namespace MyApp {
    angular.module("MyApp", ["ngRoute", "ngResource"])
        .config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
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
}
//end namespace