var MyApp;
(function (MyApp) {
    var DrawingController = (function () {
        function DrawingController() {
            this.canvas = document.getElementById('myCanvas');
            var cx = canvas.getContext("2d");
            cx.fillStyle = "#000000";
            cx.fillRect(50, 10, 50, 50);
        }
        return DrawingController;
    })();
    MyApp.DrawingController = DrawingController;
})(MyApp || (MyApp = {}));
