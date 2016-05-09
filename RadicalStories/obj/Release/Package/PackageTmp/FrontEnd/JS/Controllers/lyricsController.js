var MyApp;
(function (MyApp) {
    var LyricsController = (function () {
        function LyricsController(radicalService, $location, $routeParams) {
            this.radicalService = radicalService;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.radicals = this.radicalService.get($routeParams['id']);
        }
        return LyricsController;
    })();
    MyApp.LyricsController = LyricsController;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=lyricsController.js.map