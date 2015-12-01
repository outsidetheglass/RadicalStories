var app;
(function (app) {
    var CategoriesController = (function () {
        function CategoriesController() {
            this.categories = [
                { id: 1, pro: "mu4", character: "木", radicals: "木" },
                { id: 1, pro: "lin2", character: "林", radicals: "木木" },
            ];
        } //end of constructor
        return CategoriesController;
    })(); //end of controller
    angular.module("MyApp").controller("CategoriesController", CategoriesController);
})(app || (app = {})); //end of namespace
