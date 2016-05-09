var MyApp;
(function (MyApp) {
    var DrawRads = (function () {
        function DrawRads(radicalService, $location, $routeParams, $http, $sce) {
            this.radicalService = radicalService;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.$http = $http;
            this.$sce = $sce;
            this.radicals = this.radicalService.get($routeParams['id']);
            console.log("lines: " + this.radicals.lines);
            var canvasR = document.getElementById('myCanvas'), cr = canvasR.getContext("2d"), cw = canvasR.width * 0.5, ch = canvasR.height * 0.5, ca = [0, canvasR.width * .25], cb = [canvasR.width * .25, canvasR.width * .5], cc = [canvasR.width * .5, canvasR.width * .75], cd = [canvasR.width * .75, canvasR.width], ra = [0, canvasR.height * .25], rb = [canvasR.height * .25, canvasR.height * .5], rc = [canvasR.height * .5, canvasR.height * .75], rd = [canvasR.height * .75, canvasR.height];
            cr.lineWidth = 1;
            cr.strokeStyle = '#a4a4a4';
            cr.beginPath();
            cr.moveTo(ca[0], rb[0]);
            cr.lineTo(cd[1], rb[0]);
            cr.stroke();
            cr.beginPath();
            cr.moveTo(ca[0], rc[0]);
            cr.lineTo(cd[1], rc[0]);
            cr.stroke();
            cr.beginPath();
            cr.moveTo(ca[0], rd[0]);
            cr.lineTo(cd[1], rd[0]);
            cr.stroke();
            cr.beginPath();
            cr.moveTo(ca[1], ra[0]);
            cr.lineTo(ca[1], rd[1]);
            cr.stroke();
            cr.beginPath();
            cr.moveTo(cc[1], ra[0]);
            cr.lineTo(cc[1], rd[1]);
            cr.stroke();
            cr.beginPath();
            cr.moveTo(cb[1], ra[0]);
            cr.lineTo(cb[1], rd[1]);
            cr.stroke();
        }
        DrawRads.prototype.available = function () {
            if (this.radicals.id == 1 || this.radicals.id == 2 || this.radicals.id == 3 || this.radicals.id == 4 || this.radicals.id == 5 || this.radicals.id == 6 || this.radicals.id == 7 || this.radicals.id == 66) {
                return false;
            }
            else {
                return true;
            }
        };
        DrawRads.prototype.method = function () {
            var canvasR = document.getElementById('myCanvas'), cr = canvasR.getContext("2d"), startPos, makeItPretty, endPos, numOfSteps = 60, stepSize, newXEnd, newYEnd, radVariation, radLength, currentLine = 0, skipTheEnd = false, i, line, lines, radLines, gun = [1.01, 0.2, .98, 1.7], yi = [0.3, 0.9, 1.8, 0.90], zhu = [0.8, 0.8, .95, .96], fu = [1.01, 0.2, .75, 1.7], San = {
                radVariation1: 100,
                lines: [0.40, 0.50, 1.65, 0.50,
                    0.50, 1.00, 1.50, 1.00,
                    0.30, 1.50, 1.70, 1.50],
                heavyLine: false
            }, er1 = [0.40, 0.60, 1.65, 0.61], er2 = [0.30, 1.50, 1.70, 1.50], pu1 = [0.9999, 0.2, 1, 0.9], pu2 = [1.0001, (0.2 + yi[1] / 2), yi[2] + .05, (.2 + yi[3] / 2)], pu3 = [yi[0], yi[1], yi[2], yi[3]], pu4 = [yi[2], yi[3], (yi[0] - .05), (yi[1] * 2)], pu5 = [yi[0], yi[1], (yi[2] + .05), (yi[3] * 2)], yiYin1 = [0.3, 0.32, 1.2, 0.30001], yiYin2 = [1.17, 0.36, 0.2, 1.7];
            if (this.radicals.id == 1) {
                var Yi = (function () {
                    function Yi() {
                        //一
                        //彡
                        this.radVariation1 = 100;
                        this.lines = [yi[0], yi[1], yi[2], yi[3]];
                    }
                    return Yi;
                }());
                radLines = new Yi();
            }
            else if (this.radicals.id == 2) {
                var Gun = (function () {
                    function Gun() {
                        this.radVariation1 = 100;
                        this.lines = [gun[0], gun[1], gun[2], gun[3]];
                    }
                    ;
                    return Gun;
                }());
                radLines = new Gun();
            }
            else if (this.radicals.id == 3) {
                var Zhu = (function () {
                    function Zhu() {
                        this.radVariation1 = 100;
                        this.lines = [zhu[0], zhu[1], zhu[2], zhu[3]];
                    }
                    return Zhu;
                }());
                radLines = new Zhu();
            }
            else if (this.radicals.id == 4) {
                var Fu = (function () {
                    function Fu() {
                        this.radVariation1 = 100;
                        this.lines = [fu[0], fu[1], fu[2], fu[3]];
                        this.heavyWeight = -110;
                        this.heavyPoint = { x: null, y: 50 };
                        this.heavyLine = [0];
                    }
                    return Fu;
                }());
                radLines = new Fu();
            }
            else if (this.radicals.id == 5) {
                var YiYin = (function () {
                    function YiYin() {
                        this.radVariation1 = 100;
                        this.lines = [yiYin1[0], yiYin1[1], yiYin1[2], yiYin1[3],
                            yiYin2[0], yiYin2[1], yiYin2[2], yiYin2[3]];
                        this.heavyWeight = 40;
                        this.heavyPoint = { x: null, y: 110 };
                        this.heavyLine = [1];
                    }
                    return YiYin;
                }());
                radLines = new YiYin();
            }
            else if (this.radicals.id == 6) {
                var Zhu = (function () {
                    function Zhu() {
                        this.radVariation1 = 100;
                        this.lines = [zhu[0], zhu[1], zhu[2], zhu[3]];
                    }
                    return Zhu;
                }());
                radLines = new Zhu();
            }
            else if (this.radicals.id == 66) {
                var Pu = (function () {
                    function Pu() {
                        this.radVariation1 = 100;
                        this.heavyWeight = -110;
                        this.heavyPoint = { x: 20, y: null };
                        this.lines = [pu1[0], pu1[1], pu1[2], pu1[3],
                            pu2[0], pu2[1], pu2[2], pu2[3],
                            pu3[0], pu3[1], pu3[2], pu3[3],
                            pu4[0], pu4[1], pu4[2], pu4[3],
                            pu5[0], pu5[1], pu5[2], pu5[3]
                        ];
                        this.heavyLine = [3, 4];
                    }
                    return Pu;
                }());
                radLines = new Pu();
            }
            else if (this.radicals.id == 7) {
                var Er = (function () {
                    function Er() {
                        this.radVariation1 = 100;
                        this.lines = [er1[0], er1[1], er1[2], er1[3],
                            er2[0], er2[1], er2[2], er2[3]];
                    }
                    return Er;
                }());
                radLines = new Er();
            }
            if (radLines.lines.length == 4) {
                line = radLines.lines;
            }
            else {
                line = radLines.lines.slice(0, 5);
            }
            radVariation = radLines.radVariation1;
            startPos = { x: line[0] * radVariation, y: line[1] * radVariation };
            endPos = { x: line[2] * radVariation, y: line[3] * radVariation };
            makeItPretty = { x: (endPos.x - startPos.x) / 20, y: (endPos.y - startPos.y) / 20 };
            stepSize = { x: ((endPos.x - startPos.x) / numOfSteps), y: ((endPos.y - startPos.y) / numOfSteps) };
            //modify to work with accepting a meaning to equal the character instead of the pinyin
            var intervalDraw = window.setInterval(drawLine, 25, radLines);
            function drawLine(radClass) {
                //to make it curve, alter the stepSize as it goes
                if (radClass.heavyLine) {
                    for (var i_1 = 0; i_1 < radClass.heavyLine.length; i_1++) {
                        if (radClass.heavyLine[i_1] == currentLine) {
                            if (radClass.heavyPoint.x) {
                                if (startPos.x <= radClass.heavyPoint.x) {
                                    stepSize.x += stepSize.x / radClass.heavyWeight;
                                }
                                else {
                                    stepSize.x -= stepSize.x / radClass.heavyWeight;
                                }
                            }
                            else if (radClass.heavyPoint.y) {
                                if (startPos.y <= radClass.heavyPoint.y) {
                                    stepSize.y += stepSize.y / radClass.heavyWeight;
                                }
                                else {
                                    stepSize.y -= stepSize.x / radClass.heavyWeight;
                                }
                            }
                        }
                    }
                }
                cr.lineWidth = 5;
                cr.strokeStyle = '#ffffff';
                cr.beginPath();
                cr.moveTo(startPos.x - makeItPretty.x, startPos.y - makeItPretty.y);
                if (stepSize.x > 0 && startPos.x > endPos.x) {
                    skipTheEnd = true;
                }
                else if (stepSize.x < 0 && startPos.x < endPos.x) {
                    skipTheEnd = true;
                }
                if (startPos.x == endPos.x || skipTheEnd) {
                    clearInterval(intervalDraw);
                    currentLine++;
                    line = radClass.lines.slice(0 + currentLine * 4, 5 + currentLine * 4);
                    radVariation = radClass.radVariation1;
                    skipTheEnd = false;
                    startPos = { x: line[0] * radVariation, y: line[1] * radVariation };
                    endPos = { x: line[2] * radVariation, y: line[3] * radVariation };
                    makeItPretty = { x: (endPos.x - startPos.x) / 20, y: (endPos.y - startPos.y) / 20 };
                    stepSize = { x: ((endPos.x - startPos.x) / numOfSteps), y: ((endPos.y - startPos.y) / numOfSteps) };
                    intervalDraw = window.setInterval(drawLine, 25, radClass);
                }
                else {
                    //if the slope is negative
                    if (stepSize.x < 0) {
                        if (stepSize.y >= 0) {
                            newXEnd = stepSize.x + startPos.x;
                            newYEnd = stepSize.y + startPos.y;
                        }
                        if (startPos.x <= endPos.x) {
                            if (radClass.heavyLine) {
                                for (var i_2 = 0; i_2 < radClass.heavyLine.length; i_2++) {
                                    if (radClass.heavyLine[i_2] == currentLine) {
                                        skipTheEnd = true;
                                    }
                                }
                            }
                            else {
                                newXEnd = endPos.x;
                            }
                            if (stepSize.y < 0) {
                                newYEnd = startPos.y - stepSize.y;
                            }
                            else {
                                newYEnd = startPos.y + stepSize.y;
                            }
                        }
                    }
                    else if (stepSize.x >= 0) {
                        //all of this is the same as the above block, but with positive instead of negative.
                        if (stepSize.y >= 0) {
                            newXEnd = stepSize.x + startPos.x;
                            newYEnd = stepSize.y + startPos.y;
                        }
                        else if (stepSize.y < 0) {
                            newXEnd = stepSize.x + startPos.x;
                            newYEnd = stepSize.y + startPos.y;
                        }
                        if (startPos.x >= endPos.x) {
                            if (radClass.heavyLine) {
                                for (var i_3 = 0; i_3 < radClass.heavyLine.length; i_3++) {
                                    if (radClass.heavyLine[i_3] == currentLine) {
                                        skipTheEnd = true;
                                    }
                                }
                            }
                            else {
                                newXEnd = endPos.x;
                            }
                            if (stepSize.y < 0) {
                                newYEnd = startPos.y - stepSize.y;
                            }
                            else {
                                newYEnd = startPos.y + stepSize.y;
                            }
                        }
                    }
                    //new start position is the numbers calculated above.
                    startPos = { x: newXEnd, y: newYEnd };
                    //draw the line to the new coordinates.
                    if (!skipTheEnd) {
                        cr.lineTo(newXEnd, newYEnd);
                        cr.stroke();
                    }
                }
            }
        };
        DrawRads.prototype.playZh = function () {
            var _this = this;
            var word = this.radicals.symbol;
            this.$http.jsonp("http://apifree.forvo.com/key/a8ca345ac18682c035b493319f774026/format/json/action/standard-pronunciation/word/" + word + "/language/zh/?callback=JSON_CALLBACK").then(function (results) {
                if (results.data.items.length) {
                    _this.forvoPronun = results.data.items[0].pathmp3;
                    var audioSample = new Audio(_this.$sce.trustAsUrl("" + _this.forvoPronun));
                    audioSample.play();
                }
            });
        };
        return DrawRads;
    }());
    MyApp.DrawRads = DrawRads;
    ;
})(MyApp || (MyApp = {}));
