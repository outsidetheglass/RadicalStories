namespace MyApp {

    export class CategoriesController {
        public categories;
        constructor(public radicalService: MyApp.Service.RadicalService,
            private $location: angular.ILocationService) {
            this.categories = this.radicalService.getCharacters();
        }
        //public showRad(contain) {
        //    for (let r = 0; r < this.categories.length; r++) {
        //        if (this.categories[r].radicals.search(contain) != -1) { this.categories[r].character = this.categories[r].radicals; }
        //        else { this.categories[r].character = null; }}
    };
    export class CharacterAddController {
        public characterToAdd;

        constructor(private radicalService: MyApp.Service.RadicalService, private $location: angular.ILocationService) { }

        public addCharacter() {
            this.radicalService.save(this.characterToAdd).then(() => {
                this.$location.path('/categories');
            });
        }

    }
    export class CharacterDeleteController{
        public charToDelete;

        constructor(private radicalService: MyApp.Service.RadicalService, private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService) {
            this.charToDelete = radicalService.get($routeParams['id']);
        }

        public deleteChar() {
            this.radicalService.delete(this.charToDelete.id).then(() => {
                this.$location.path('/categories');
            });
        }
    }

    export class CharacterEditController {
        public charToEdit;
        public editChar() {
            this.radicalService.save(this.charToEdit).then(() => {
                this.$location.path('/categories');
            });
        }

        constructor(
            private radicalService: MyApp.Service.RadicalService,
            private $location: ng.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.charToEdit = radicalService.get($routeParams['id']);
        }
    }

}//end of namespace