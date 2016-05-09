var MyApp;
(function (MyApp) {
    var CategoriesController = (function () {
        function CategoriesController(radicalService, $location) {
            this.radicalService = radicalService;
            this.$location = $location;
            this.numStrokes = [];
            for (var i = 1; i <= 17; i++) {
                this.numStrokes.push(i);
            }
            this.radicals = this.radicalService.getRadicals();
        }
        return CategoriesController;
    }());
    MyApp.CategoriesController = CategoriesController;
    ;
    var RadicalAddController = (function () {
        function RadicalAddController(radicalService, $location) {
            this.radicalService = radicalService;
            this.$location = $location;
        }
        RadicalAddController.prototype.addRadical = function () {
            var _this = this;
            this.radicalService.save(this.radicalToAdd).then(function () {
                _this.$location.path('/categories');
            });
        };
        return RadicalAddController;
    }());
    MyApp.RadicalAddController = RadicalAddController;
    var RadicalDeleteController = (function () {
        function RadicalDeleteController(radicalService, $location, $routeParams) {
            this.radicalService = radicalService;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.radToDelete = radicalService.get($routeParams['id']);
        }
        RadicalDeleteController.prototype.deleteChar = function () {
            var _this = this;
            this.radicalService.delete(this.radToDelete.id).then(function () {
                _this.$location.path('/categories');
            });
        };
        return RadicalDeleteController;
    }());
    MyApp.RadicalDeleteController = RadicalDeleteController;
    var RadicalEditController = (function () {
        function RadicalEditController(radicalService, $location, $routeParams) {
            this.radicalService = radicalService;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.radToEdit = radicalService.get($routeParams['id']);
        }
        RadicalEditController.prototype.editRad = function () {
            var _this = this;
            this.radicalService.save(this.radToEdit).then(function () {
                _this.$location.path('/categories');
            });
        };
        return RadicalEditController;
    }());
    MyApp.RadicalEditController = RadicalEditController;
})(MyApp || (MyApp = {})); //end of namespace
