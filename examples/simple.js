var FourBar = require('../lib/vectorFourBar.js');
var four = new FourBar;


var output;
var coupler;


output = four.outputAngle(2, 7, 9, 6, 0.523599);
coupler = four.couplerAngle(2, 7, 9, 6, 0.523599);

console.log('');
console.log('crossed output angle', (output.crossed * (180/Math.PI)));
console.log('');
console.log('open output angle', (output.open * (180/Math.PI)));
console.log('');

console.log('crossed coupler angle', (coupler.crossed * (180/Math.PI)));
console.log('');
console.log('open coupler angle', (coupler.open * (180/Math.PI)));
console.log('');
console.log('TYPE: ', four.linkageType(2, 7, 9, 6, 0.523599));
