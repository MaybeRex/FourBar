//This example makes quick work out of a fourbar position homework
//Simply diaplays one scenario of a linkage at an angle of 75 degrees
//All input angles must be provided in radians

var FourBar = require('../lib/vectorFourBar.js');
var four = new FourBar;


var output;
var coupler;
var transmission;

var link1 = 20;
var link2 = 10;
var link3 = 10;
var link4 = 10;
angle = (75 * (Math.PI/180));


output = four.outputAngle(link2, link3, link4, link1, angle);
coupler = four.couplerAngle(link2, link3, link4, link1, angle);
transmission = four.transmissionAngle(link2, link3, link4, link1, angle);

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
console.log('');
console.log('crossed transmission angle', (transmission.crossed * (180/Math.PI)));
console.log('');
console.log('open transmission angle', (transmission.open * (180/Math.PI)));
console.log('');
