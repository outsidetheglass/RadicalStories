//if it is a certain variation on the radical, draw it that varied way so that 木 can be drawn both ways in 林
//if radLength is full, then draw it like a normal character, if it is one of the variations as it appears in another character draw it there, maybe by where in the character it appears, with numbers given to separate instances of the grid being taken up by the radical in question. If numbers are given to the parts of the hole that it takes up and those numbers don't equal the available number of parts in the whole character then fill out the size of the radical to meet the size of the full character
function initGrid() {
    cr.lineWidth = 1;
    cr.strokeStyle = '#000000';
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
var canvasR = document.getElementById('myCanvas'), cr = canvasR.getContext("2d"), 
//defaultOptions = [500, 500, 700, 700],
cw = canvasR.width * 0.5, ch = canvasR.height * 0.5, ca = [0, canvasR.width * .25], cb = [canvasR.width * .25, canvasR.width * .5], cc = [canvasR.width * .5, canvasR.width * .75], cd = [canvasR.width * .75, canvasR.width], ra = [0, canvasR.height * .25], rb = [canvasR.height * .25, canvasR.height * .5], rc = [canvasR.height * .5, canvasR.height * .75], rd = [canvasR.height * .75, canvasR.height], startPos, endPos, numOfSteps = 60, stepSize, newXEnd, newYEnd, radVariation, radClass, radLength, skipTheEnd = false, currentLine = 0, 
//一
cYi = [0.3, 0.9, 1.8, 0.90], 
//二
cEr = [0.40, 0.60, 1.65, 0.61,
    0.30, 1.50, 1.70, 1.50], 
//三
cSan = [0.40, 0.50, 1.65, 0.50,
    0.50, 1.00, 1.50, 1.00,
    0.30, 1.50, 1.70, 1.50], 
//彡
cShan = [0.65, 0.90, 1.5, 0.40,
    0.60, 1.3, 1.49, 0.80,
    0.55, 1.7, 1.55, 1.2], i, line, lines;
initGrid();
var Yi = (function () {
    function Yi() {
        this.radVariation1 = 100;
        this.lines = [cYi[0], cYi[1], cYi[2], cYi[3]];
    }
    return Yi;
})();
var Er = (function () {
    function Er() {
        this.radVariation1 = 100;
        this.lines = [cEr[0], cEr[1], cEr[2], cEr[3],
            cEr[4], cEr[5], cEr[6], cEr[7]];
    }
    return Er;
})();
var San = (function () {
    function San() {
        this.radVariation1 = 100;
        this.lines = [cSan[0], cSan[1], cSan[2], cSan[3],
            cSan[4], cSan[5], cSan[6], cSan[7],
            cSan[8], cSan[9], cSan[10], cSan[11]];
    }
    return San;
})();
var Shan = (function () {
    function Shan() {
        this.radVariation1 = 100;
        //heavyPoint is where the curve is at its steepest difference from the original linear line
        this.heavyPoint = { x: 20, y: null };
        //heavyWeight is how steep the curve is
        this.heavyWeight = 110;
        this.lines = [cShan[0], cShan[1], cShan[2], cShan[3],
            cShan[4], cShan[5], cShan[6], cShan[7],
            cShan[8], cShan[9], cShan[10], cShan[11]];
        this.heavyLine = [0, 1, 2];
    }
    return Shan;
})();
var Gun = (function () {
    function Gun() {
        this.radVariation1 = 100;
        this.lines = [1.01, 0.2, .98, 1.7];
    }
    return Gun;
})();
var Zhu = (function () {
    function Zhu() {
        this.radVariation1 = 100;
        this.lines = [0.8, 0.8, .95, .96];
    }
    return Zhu;
})();
var Pu = (function () {
    function Pu() {
        this.radVariation1 = 100;
        this.heavyWeight = -110;
        this.heavyPoint = { x: 20, y: null };
        this.lines = [1.0001, 0.2, 1, cYi[3],
            1.0001, (0.2 + cYi[1] / 2), cYi[2] + .05, (.2 + cYi[3] / 2),
            cYi[0], cYi[1], cYi[2], cYi[3],
            cYi[2], cYi[3], (cYi[0] - .05), (cYi[1] * 2),
            cYi[0], cYi[1], (cYi[2] + .05), (cYi[3] * 2)
        ];
        this.heavyLine = [3, 4];
    }
    return Pu;
})();
var Fu = (function () {
    function Fu() {
        this.radVariation1 = 100;
        this.heavyWeight = -200;
    }
    return Fu;
})();
var yiFull = new Yi();
var erFull = new Er();
var sanFull = new San();
var shanFull = new Shan();
var gunFull = new Gun();
var zhuFull = new Zhu();
var puFull = new Pu();
var fuFull = new Fu();
radClass = zhuFull;
var intervalDraw = window.setInterval(drawLine, 25, radClass);
line = radClass.lines.slice(0, 5);
radVariation = radClass.radVariation1;
startPos = { x: line[0] * radVariation, y: line[1] * radVariation };
endPos = { x: line[2] * radVariation, y: line[3] * radVariation };
stepSize = { x: ((endPos.x - startPos.x) / numOfSteps), y: ((endPos.y - startPos.y) / numOfSteps) };
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
    cr.strokeStyle = '#000000';
    cr.beginPath();
    cr.moveTo(startPos.x, startPos.y);
    //don't forget to change this to work with negatives
    if (startPos.x == endPos.x || skipTheEnd) {
        clearInterval(intervalDraw);
        currentLine++;
        line = radClass.lines.slice(0 + currentLine * 4, 5 + currentLine * 4);
        radVariation = radClass.radVariation1;
        skipTheEnd = false;
        startPos = { x: line[0] * radVariation, y: line[1] * radVariation };
        endPos = { x: line[2] * radVariation, y: line[3] * radVariation };
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
            if (startPos.x - stepSize.x <= endPos.x) {
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
            if (startPos.x + stepSize.x >= endPos.x) {
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
