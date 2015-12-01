var MyApp;
(function (MyApp) {
    var CategoriesController = (function () {
        function CategoriesController(radicalService) {
            this.radicalService = radicalService;
            this.categories = this.radicalService.getCharacters();
        }
        return CategoriesController;
    })();
    MyApp.CategoriesController = CategoriesController;
    ;
    //end of controller
    var CharacterAddController = (function () {
        function CharacterAddController(radicalService, $location) {
            this.radicalService = radicalService;
            this.$location = $location;
        }
        CharacterAddController.prototype.addCharacter = function () {
            var _this = this;
            this.radicalService.save(this.characterToAdd).then(function () {
                console.log(_this.characterToAdd);
                _this.$location.path('/categories');
            }, function () {
                //if it fails, this runs.
            });
        };
        return CharacterAddController;
    })();
    MyApp.CharacterAddController = CharacterAddController;
})(MyApp || (MyApp = {})); //end of namespace
//# sourceMappingURL=CategoriesController.js.map