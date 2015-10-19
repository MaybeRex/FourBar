var FourBar = require('../lib/vectorFourBar.js');
var four = new FourBar;

//This example quickly logs information about a fourbar at angle 0.2 radians

console.log('output angle' ,four.outputAngle(1.5, 4, 4.5, 5, 0.2));
console.log('coupler angles' ,four.outputAngle(1,1.5,1,1.5,0.5));
console.log('outputVector', four.outputVector(1,1.5,1,1.5,0.5));
