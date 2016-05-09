namespace MyApp.Directive{



    angular.module("MyApp").directive("radicalDirective", [() => {
        return {
            scope: {
                radicals: "=bindRadicals",
                strokes: "@bindStrokes"
            },
            templateUrl: "/FrontEnd/ngView/templateDirective.html",
            link: (scope) => { }
        }
    }]);

}