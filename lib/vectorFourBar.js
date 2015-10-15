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

function getCouplerAngle(){

}

function getOutputAngle(){

}

module.exports = VectorFourBar;
