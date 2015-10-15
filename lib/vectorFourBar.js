//Mario Solorzano
//ME 415 Kinematics
//October 2015

var math = require('mathjs');

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

function getCouplerAngle(a,b,c,d){
    if (!a || !b || !c || !d){
        console.log('Must Provide Leg Lengths!!');
        return;
    }

    if(
        typeof(a) !== 'number'
        ||typeof(b) !== 'number'
        ||typeof(c) !== 'number'
        ||typeof(d) !== 'number'
    ){
        console.log('Legs Must be Numbers!!');
        return;
    }

    console.log(a,b,c,d);
}

function getOutputAngle(){

}

module.exports = VectorFourBar;
