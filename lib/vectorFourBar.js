//Mario Solorzano
//ME 415 Kinematics
//October 2015

var math = require('mathjs');

var constants = {
    K1: 0,
    K2: 0,
    K3: 0,
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

function getCouplerAngle(input,coupler,output,ground,thetaTwo){
    var temp = Object.keys(linkage);
    for(var i in arguments){
        linkage[temp[i]] = arguments[i];
    }

    if(!errorCheck(linkage)){
        return;
    }

    getConstantsK(linkage);

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
}

function getConstantsTierA(linkage){
    constants.A = ( Math.cos(linkage.thetaTwo) - (constants.K1) - (constants.K2 * Math.cos(linkage.thetaTwo)) + (constants.K3)); // Radians
    constants.B = (-2 * Math.sin(linkage.thetaTwo));
    constants.C = (constants.K1 - ((constants.K2 +1) * Math.cos(linkage.thetaTwo)) + constants.K3);
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
