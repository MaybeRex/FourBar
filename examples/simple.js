var FourBar = require('../lib/vectorFourBar.js');
var four = new FourBar;


var output;
var coupler;

var link1 = 8;
var link2 = 8;
var link3 = 8;
var link4 = 8;
angle = (75 * (Math.PI/180));


output = four.outputAngle(link2, link3, link4, link1, angle);
coupler = four.couplerAngle(link2, link3, link4, link1, angle);

console.log('');
console.log('crossed output angle', (output.crossed * (180/Math.PI)));
console.log('');
console.log('open output angle', (output.open * (180/Math.PI)));
console.log('');

console.log('crossed coupler angle', (coupler.crossed * (180/Math.PI)));
console.log('');
console.log('open coupler angle', (coupler.open * (180/Math.PI)));
console.log('');
console.log('TYPE: ', four.linkageType(link2, link3, link4, link1, angle));
