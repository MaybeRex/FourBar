//Mario Solorzano
//ME 415 Kinematics
//October 2015

var math = require('mathjs');

var constants = {
    K1: 0,
    K2: 0,
    K3: 0,
    K4: 0,
    K5: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0
}

var linkage = {
    input: '',
    coupler: '',
    output: '',
    ground: '',
    thetaTwo: '',
    thetaThree: {},
    thetaFour: {},
    vectorInput:'',
    vectorCoupler:'',
    vectorOutput:'',
    vectorGround:''
}

function VectorFourBar(){
    Object.defineProperties(
        this,
        {
            type:{
                enumerable:true,
                writable:false,
                value:'VectorMethod'
            },
            linkageType:{
                enumerable:true,
                writable:false,
                value:getLinkageType
            },
            couplerAngle:{
                enumerable:true,
                writable:false,
                value:getCouplerAngle
            },
            outputAngle:{
                enumerable:true,
                writable:false,
                value:getOutputAngle
            },

        }
    );
}

function getLinkageType(input,coupler,output,ground){
    var temp;
    var swap = true;
    var tempArray = [];
    var j = 0;

    for (var i in arguments){
        tempArray[i] = arguments[i];
    }

    while(swap == true){
        swap = false;
        j++;
        for (var i = 0; i < tempArray.length - j; i++){
            if(tempArray[i] > tempArray[i+1]){
                temp = tempArray[i];
                tempArray[i] = tempArray[i+1];
                tempArray[i+1] = temp;
                swapped = true
            }
        }
    }

    var setup = {
        S : tempArray[0],
        L : tempArray[3],
        Q : tempArray[1],
        P : tempArray[2]
    }

    var cases = {
        one: ((setup.S + setup.L) < (setup.P + setup.Q)),
        two: ((setup.S + setup.L) > (setup.P + setup.Q)),
        three: ((setup.S + setup.L) == (setup.P + setup.Q))
    }

    var general;

    if (cases.one){
        general = 'Case I';
    }else if (cases.two){
        general = 'Case II';
    }else if (cases.three) {
        general = 'Case III';
    }

    console.log(general);

    if(cases.one && (setup.S == ground)){
        return 'Grashof Crank-Crank-Crank';
    }else if (cases.three && (setup.S == setup.L && setup.L == setup.P && setup.P ==setup.Q)) {
        return 'Tripple Change Point';
    }else if (cases.three && (setup.S == setup.L || setup.S == setup.P || setup.S == setup.Q || setup.L == setup.Q || setup.L == setup.P || setup.Q == setup.P)) {
        return 'Double Change Point';
    }else if(cases.one && (setup.S == input)){
        return 'Grashof Crank-Rocker-Rocker';
    }else if(cases.one && (setup.S == coupler)){
        return 'Grashof Rocker-Crank-Rocker';
    }else if(cases.one && (setup.S == output)){
        return 'Grashof Rocker-Rocker-Crank';
    }else if(cases.two && (setup.L == ground)){
        return 'Class 1 Rocker-Rocker-Rocker';
    }else if (cases.two && (setup.L == input)) {
        return 'Class 2 Rocker-Rocker-Rocker';
    }else if (cases.two && (setup.L == coupler)) {
        return 'Class 3 Rocker-Rocker-Rocker';
    }else if (cases.two && (setup.L == output) ) {
        return 'Class 4 Rocker-Rocker-Rocker';
    }else if (cases.three && (setup.S == ground)) {
        return 'Change Point Crank-Crank-Crank';
    }else if (cases.three && (setup.S == input)) {
        return 'Change Point Crank-Rocker-Rocker';
    }else if (cases.three && (setup.S == coupler)) {
        return 'Change Point Rocker-Crank-Rocker';
    }else if (cases.three && (setup.S == output)) {
        return 'Change Point Rocker-Rocker-Crank';
    }else {
        return("Not Part of Barker's 14 " + general);
    }

}

function getCouplerAngle(input,coupler,output,ground,thetaTwo){
    var temp = Object.keys(linkage);
    for(var i in arguments){
        linkage[temp[i]] = arguments[i];
    }

    if(!errorCheck(linkage)){
        return;
    }

    getConstantsK(linkage);
    getConstantsTierD(linkage);

    linkage.thetaThree = modQuadratic(constants.D, constants.E, constants.F);

    return linkage.thetaThree;
}

function getOutputAngle(input,coupler,output,ground,thetaTwo){
    var temp = Object.keys(linkage);
    for(var i in arguments){
        linkage[temp[i]] = arguments[i];
    }

    if(!errorCheck(linkage)){
        return;
    }

    getConstantsK(linkage);
    getConstantsTierA(linkage);

    linkage.thetaFour = modQuadratic(constants.A, constants.B, constants.C);

    return linkage.thetaFour;
}

function getConstantsK(linkage){
    constants.K1 = (linkage.ground/linkage.input);
    constants.K2 = (linkage.ground/linkage.output);
    constants.K3 = ((Math.pow(linkage.input,2)-Math.pow(linkage.coupler,2) + Math.pow(linkage.output,2) + Math.pow(linkage.ground,2))/(2*linkage.input*linkage.output));
    constants.K4 = (linkage.ground/linkage.coupler);
    constants.K5 = ((Math.pow(linkage.output,2)-Math.pow(linkage.ground,2) - Math.pow(linkage.input,2) - Math.pow(linkage.coupler,2))/( 2 * linkage.input * linkage.coupler));
}

function getConstantsTierA(linkage){
    constants.A = ( Math.cos(linkage.thetaTwo) - (constants.K1) - (constants.K2 * Math.cos(linkage.thetaTwo)) + (constants.K3)); // Radians
    constants.B = (-2 * Math.sin(linkage.thetaTwo));
    constants.C = (constants.K1 - ((constants.K2 + 1) * Math.cos(linkage.thetaTwo)) + constants.K3);
}

function getConstantsTierD(linkage){
    constants.D = ( Math.cos(linkage.thetaTwo) - (constants.K1) + (constants.K4 * Math.cos(linkage.thetaTwo)) + (constants.K5)); // Radians
    constants.E = (-2 * Math.sin(linkage.thetaTwo));
    constants.F = (constants.K1 + ((constants.K4 - 1) * Math.cos(linkage.thetaTwo)) + constants.K5);
}

function modQuadratic(A,B,C){

    var temp = {};
    temp.crossed = (2 * Math.atan((-B + Math.sqrt( Math.pow(B,2) - (4 * A * C) ))/( 2 * A)));
    temp.open = (2* Math.atan((-B - Math.sqrt( Math.pow(B,2) - (4 * A * C) ))/( 2 * A)));

    return temp;
}

function errorCheck(linkage){

    if (!linkage.input || !linkage.coupler || !linkage.output || !linkage.ground || !linkage.thetaTwo){
        console.log('Must Provide Linkage Lengths!!');
        return false;
    }else if(
        typeof(linkage.input) !== 'number'
        ||typeof(linkage.coupler) !== 'number'
        ||typeof(linkage.output) !== 'number'
        ||typeof(linkage.ground) !== 'number'
        ||typeof(linkage.thetaTwo) !== 'number'
    ){
        console.log('Legs Must be Numbers!!');
        return false;
    }else {
        return true;
    }
}

module.exports = VectorFourBar;
