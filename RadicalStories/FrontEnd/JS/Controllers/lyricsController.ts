namespace MyApp {

    export class LyricsController {
        public radicals;
        constructor (public radicalService: MyApp.Service.RadicalService,
            private $location: angular.ILocationService,
            private $routeParams: angular.route.IRouteParamsService) {
            this.radicals = this.radicalService.get($routeParams['id']);
        }
    }

}