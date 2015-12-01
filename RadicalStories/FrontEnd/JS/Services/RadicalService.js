var MyApp;
(function (MyApp) {
    var Service;
    (function (Service) {
        var RadicalService = (function () {
            function RadicalService($resource) {
                this.categoryInfo = $resource('/api/characters/:id');
            } //contsructor
            RadicalService.prototype.getCharacters = function () {
                return this.categoryInfo.query();
            };
            RadicalService.prototype.save = function (character) {
                console.log(character);
                return this.categoryInfo.save(character).$promise;
            };
            return RadicalService;
        })();
        Service.RadicalService = RadicalService; //radservice
        angular.module("MyApp").service("radicalService", RadicalService);
    })(Service = MyApp.Service || (MyApp.Service = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=RadicalService.js.map