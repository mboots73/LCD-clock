
//INPUT
var inputtime ;
var inputsize;

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
    if (index === 3) {

        inputsize = val
    }
    if (index === 2) {
        inputtime = val
    }


});

var spatie = " ";
var horizontal = "-";
if (inputsize === "2") {
    spatie = "   ";
    horizontal= "---"
}
else if (inputsize === "3"){
    spatie = "    ";
    horizontal= "----"
}
else if (inputsize === "4") {
    spatie = "    ";
    horizontal="----"
}
else if (inputsize === "5") {
    spatie = "     ";
    horizontal= "-----"
}
else if (inputsize === "6") {
    spatie = "      ";
    horizontal= "------"
}



var zero =  [ " " + horizontal + " " ,"\n",
    "|" + spatie +  "|","\n",
    " " + spatie +  " ","\n",
    "|" + spatie +  "|","\n",
    " " + horizontal + " ", "\n"];
var one =  [ " " + spatie +  " ", "\n",
    " " + spatie +  "|","\n",
    " " + spatie +  " ","\n",
    " " + spatie +  "|","\n",
    " " + spatie +  " ", "\n"];


var two =  [ " " + horizontal + " " ,"\n",
    " " + spatie +  "|","\n",
    " " + horizontal + " ","\n",
    "|" + spatie +  " ","\n",
    " " + horizontal + " ", "\n"];

var three =  [ " " + horizontal + " " ,"\n",
    " " + spatie +  "|","\n",
    " " + horizontal + " ","\n",
    " " + spatie +  "|","\n",
    " " + horizontal + " ", "\n"];

var four =  [  " " + spatie +  " " ,"\n",
    "|" + spatie +  "|","\n",
    " " + horizontal + " ","\n",
    " " + spatie +  "|","\n",
    " " + spatie +  " ", "\n"];

var five =  [  " " + horizontal + " " ,"\n",
    "|" + spatie +  " ","\n",
    " " + horizontal + " ","\n",
    " " + spatie +  "|","\n",
    " " + horizontal + " ", "\n"];

var six =  [  " " + horizontal + " " ,"\n",
    "|" + spatie +  " ","\n",
    " " + horizontal + " ","\n",
    "|" + spatie +  "|","\n",
    " " + horizontal + " ", "\n"];

var seven =  [  " " + horizontal + " " ,"\n",
    " " + spatie +  "|","\n",
    " " + spatie +  " ","\n",
    " " + spatie +  "|","\n",
    " " + spatie +  " ", "\n"];

var eight =  [ " " + horizontal + " " ,"\n",
    "|" + spatie +  "|","\n",
    " " + horizontal + " ","\n",
    "|" + spatie +  "|","\n",
    " " + horizontal + " ", "\n"];

var nine =  [ " " + horizontal + " " ,"\n",
    "|" + spatie +  "|","\n",
    " " + horizontal + " ","\n",
    " " + spatie +  "|","\n",
    " " + horizontal + " ", "\n"];

var dot =  [ " " + spatie +  " " ,"\n",
    " " + horizontal + " ","\n",
    " " + spatie +  " ","\n",
    " " + horizontal + " ","\n",
    " " + spatie +  " ", "\n"];

if (inputtime === "12") {
    var A = [" " + horizontal + " ", "\n",
        "|" + spatie +  "|", "\n",
        " " + horizontal + " ", "\n",
        "|" + spatie +  "|", "\n",
        " " + spatie +  " ", "\n"];
    var P = [" " + horizontal + " ", "\n",
        "|" + spatie +  "|", "\n",
        " " + horizontal + " ", "\n",
        "|" + spatie +  " ", "\n",
        " " + spatie +  " ", "\n"];

}
else {

    var A = ["", "\n",
        "", "\n",
        "", "\n",
        "", "\n",
        "", "\n"];
    var P =   [ "" ,"\n",
        "","\n",
        "","\n",
        "", "\n",
        "", "\n"];


}

var time = new Date();
hours24  = time.getHours();


if (inputtime === "12") {
    var time = new Date();
    function hoursconverse(date) { return (date.getHours() + 24) % 12 || 12; }
    hours = hoursconverse(time);
}
else {
    hours  = hours24
}


var minutes = time.getMinutes();

function extraZero(timeunit) {
    if (timeunit > 9) {
        var timeunitfirst = timeunit.toString().split("")[0];
        var timeunitsecond = timeunit.toString().split("")[1];
    }
    else {
        var timeunitfirst = "0";
        var timeunitsecond = timeunit.toString().split("")[0];
    }
    return [timeunitfirst, timeunitsecond];
}

if (hours24 < 13) {
    var AorP = "A"
}
else {
    var AorP = "P"
}

var timeunits = [AorP, extraZero(hours)[0], extraZero(hours)[1], extraZero(minutes)[0], extraZero(minutes)[1]];

var timename = [];


digitsToString(timeunits, inputsize);

function digitsToString(timeunits, size) {
for (i = 0; i < timeunits.length; i++ ) {
    if (timeunits[i] === "1") {
        timename[i] = one
    }
    else if (timeunits[i] === "2") {
        timename[i] = two
    }
    else if (timeunits[i] === "3") {
        timename[i] = three
    }
    else if (timeunits[i] === "4") {
        timename[i] = four
    }
    else if (timeunits[i] === "5") {
        timename[i] = five
    }
    else if (timeunits[i] === "6") {
        timename[i] = six
    }
    else if (timeunits[i] === "7") {
        timename[i] = seven
    }
    else if (timeunits[i] === "8") {
        timename[i] = eight
    }
    else if (timeunits[i] === "9") {
        timename[i] = nine;
    }
    else if (timeunits[i] === "0") {
        timename[i] = zero;
    }
    else if (timeunits[i]=== "A") {
        timename[i] = A;
    }
    else if (timeunits[i]=== "P") {
        timename[i] = P;
    }
}
    printLCD(timename, size)
};



function printLCD(timename, size) {
    for (i = 0; i < 9; i++) {
        if (i === 0 || i ===4 || i ===8) {

            process.stdout.write(timename[0][i].concat(timename[1][i]).concat(timename[2][i]).concat(dot[i]).concat(timename[3][i]).concat(timename[4][i]));
            process.stdout.write("\n");
            i++
        }
        else {
            for (j=0 ; j < size; j++) {
                process.stdout.write(timename[0][i].concat(timename[1][i]).concat(timename[2][i]).concat(dot[i]).concat(timename[3][i]).concat(timename[4][i]));
                process.stdout.write("\n");
            }
            i++

        }
    }
};

