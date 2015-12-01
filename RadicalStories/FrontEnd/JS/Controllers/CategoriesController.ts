namespace MyApp {
    export class CategoriesController {
        public categories;
        constructor(public radicalService: MyApp.Service.RadicalService) {
            this.categories = this.radicalService.getCharacters();
        }
        //public showRad(contain) {
        //    for (let r = 0; r < this.categories.length; r++) {
        //        if (this.categories[r].radicals.search(contain) != -1) { this.categories[r].character = this.categories[r].radicals; }
        //        else { this.categories[r].character = null; }}
    
};
    
    

//end of controller
export class CharacterAddController {
    public characterToAdd;

    constructor(private radicalService: MyApp.Service.RadicalService, private $location: ng.ILocationService) { }

    public addCharacter() {
        this.radicalService.save(this.characterToAdd).then(() => {
            console.log(this.characterToAdd);
            this.$location.path('/categories');
        }, () => {
            //if it fails, this runs.
        }

        );
    }
}
}//end of namespace