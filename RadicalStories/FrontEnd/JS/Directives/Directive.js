var MyApp;
(function (MyApp) {
    var Directive;
    (function (Directive) {
        angular.module("MyApp").directive("radicalDirective", [function () {
                return {
                    scope: {
                        radicals: "=bindRadicals",
                        strokes: "@bindStrokes"
                    },
                    templateUrl: "/FrontEnd/ngView/templateDirective.html",
                    link: function (scope) { }
                };
            }]);
    })(Directive = MyApp.Directive || (MyApp.Directive = {}));
})(MyApp || (MyApp = {}));
