//Mario Solorzano
//ME 415 Kinematics
//October 2015

var math = require('mathjs');

var constants = {
    K1: 0,
    K2: 0,
    K3: 0,
}

var linkage = {
    input: '',
    coupler: '',
    output: '',
    ground: '',
    thetaTwo: '',
    thetaThree: '',
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

exports.VectorFourBar = VectorFourBar;

function getCouplerAngle(input,coupler,output,ground,thetaTwo){
    var temp = Object.keys(linkage);
    for(var i in arguments){
        linkage[temp[i]] = arguments[i];
    }
    

    if(!errorCheck(linkage)){
        return;
    }
}

function getOutputAngle(input,coupler,output,ground,thetaTwo){
    var temp = Object.keys(linkage);
    for(var i in arguments){
        linkage[temp[i]] = arguments[i];
    }

    if(!errorCheck(linkage)){
        return;
    }
}


function errorCheck(linkage){

    if (!linkage.input || !linkage.coupler || !linkage.output || !linkage.ground || !linkage.thetaTwo){
        console.log('Must Provide Linkage Lengths!!');
        return false;
    }

    if(
        typeof(linkage.input) !== 'number'
        ||typeof(linkage.coupler) !== 'number'
        ||typeof(linkage.output) !== 'number'
        ||typeof(linkage.ground) !== 'number'
        ||typeof(linkage.thetaTwo) !== 'number'
    ){
        console.log('Legs Must be Numbers!!');
        return false;
    }

}

module.exports = VectorFourBar;
