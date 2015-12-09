namespace MyApp.Service {
    export class RadicalService {
        private categoryInfo;

        constructor($resource: ng.resource.IResourceService) {
            this.categoryInfo = $resource('/api/characters/:id');
        }//contsructor

        public getCharacters() {
            return this.categoryInfo.query();
        }
        public get(id: number) {
            return this.categoryInfo.get({ id: id });
        }
        public save(character) {
            console.log(character);
            return this.categoryInfo.save(character).$promise;
        }
        public delete(id: number) {
            return this.categoryInfo.delete({ id: id }).$promise;
        }
    }//radservice
    angular.module("MyApp").service("radicalService", RadicalService);

}