namespace MyApp.Service {
    export class RadicalService {
        private categoryInfo;
        private searchResult;

        constructor($resource: ng.resource.IResourceService) {
            this.categoryInfo = $resource('/api/characters/:id');
            this.searchResult = $resource('/api/characters/search/:id');
        }

        //public search(id:number) {
        //    return this.searchResult.find({ id: id });
        //}

        public getRadicals() {
            return this.categoryInfo.query();
        }
        public get(id: number) {
            return this.categoryInfo.get({ id: id });
        }
        public save(radical) {
            console.log(radical);
            return this.categoryInfo.save(radical).$promise;
        }
        public delete(id: number) {
            return this.categoryInfo.delete({ id: id }).$promise;
        }
    }//radservice
    angular.module("MyApp").service("radicalService", RadicalService);

}