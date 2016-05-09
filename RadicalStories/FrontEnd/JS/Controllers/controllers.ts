namespace MyApp {

    export class CategoriesController {
        public radicals;
        public numStrokes = [];
        constructor(public radicalService: MyApp.Service.RadicalService,
            private $location: angular.ILocationService) {
            for (let i = 1; i <= 17; i++) {
                this.numStrokes.push(i);
            }
            this.radicals = this.radicalService.getRadicals();
        }
    };
    

    export class RadicalAddController {
        public radicalToAdd;

        constructor(private radicalService: MyApp.Service.RadicalService, private $location: angular.ILocationService) { }

        public addRadical() {
            this.radicalService.save(this.radicalToAdd).then(() => {
                this.$location.path('/categories');
            });
        }

    }
    export class RadicalDeleteController {
        public radToDelete;

        constructor(private radicalService: MyApp.Service.RadicalService, private $location: angular.ILocationService,
            private $routeParams: angular.route.IRouteParamsService) {
            this.radToDelete = radicalService.get($routeParams['id']);
        }

        public deleteChar() {
            this.radicalService.delete(this.radToDelete.id).then(() => {
                this.$location.path('/categories');
            });
        }
    }

    export class RadicalEditController {
        public radToEdit;
        public editRad() {
            this.radicalService.save(this.radToEdit).then(() => {
                this.$location.path('/categories');
            });
        }

        constructor(
            private radicalService: MyApp.Service.RadicalService,
            private $location: angular.ILocationService,
            private $routeParams: angular.route.IRouteParamsService
        ) {
            this.radToEdit = radicalService.get($routeParams['id']);
        }
    }

}//end of namespace