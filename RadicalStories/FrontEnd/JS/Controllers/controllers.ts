namespace MyApp {

    export class CategoriesController {
        public radicals;
        constructor(public radicalService: MyApp.Service.RadicalService,
            private $location: angular.ILocationService) {
            this.radicals = this.radicalService.getRadicals();
        }
        //public showRad(contain) {
        //    for (let r = 0; r < this.categories.length; r++) {
        //        if (this.categories[r].radicals.search(contain) != -1) { this.categories[r].character = this.categories[r].radicals; }
        //        else { this.categories[r].character = null; }}
    };

    export class RadicalListController {
        public radicals;
        public forvoPronun;
        public playZh() {
            let word = this.radicals.symbol;
            this.$http.jsonp(`http://apifree.forvo.com/key/a8ca345ac18682c035b493319f774026/format/json/action/standard-pronunciation/word/${word}/language/zh/?callback=JSON_CALLBACK`
            ).then((results: any) => {
                if (results.data.items.length) {
                    this.forvoPronun = results.data.items[0].pathmp3;
                    let audioSample = new Audio(this.$sce.trustAsUrl(`${this.forvoPronun}`));
                    audioSample.play();
                }
            });

        }

        constructor(public radicalService: MyApp.Service.RadicalService,
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService, private $http: ng.IHttpService, private $sce: ng.ISCEService) {
            this.radicals = this.radicalService.get($routeParams['id']);

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
            private $routeParams: ng.route.IRouteParamsService) {
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
            private $location: ng.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.radToEdit = radicalService.get($routeParams['id']);
        }
    }

}//end of namespace