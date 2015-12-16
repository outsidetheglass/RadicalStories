var MyApp;
(function (MyApp) {
    var Service;
    (function (Service) {
        var RadicalService = (function () {
            function RadicalService($resource) {
                this.categoryInfo = $resource('/api/characters/:id');
                this.searchResult = $resource('/api/characters/search/:id');
            }
            //public search(id:number) {
            //    return this.searchResult.find({ id: id });
            //}
            RadicalService.prototype.getRadicals = function () {
                return this.categoryInfo.query();
            };
            RadicalService.prototype.get = function (id) {
                return this.categoryInfo.get({ id: id });
            };
            RadicalService.prototype.save = function (radical) {
                console.log(radical);
                return this.categoryInfo.save(radical).$promise;
            };
            RadicalService.prototype.delete = function (id) {
                return this.categoryInfo.delete({ id: id }).$promise;
            };
            return RadicalService;
        })();
        Service.RadicalService = RadicalService; //radservice
        angular.module("MyApp").service("radicalService", RadicalService);
    })(Service = MyApp.Service || (MyApp.Service = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=RadicalService.js.map