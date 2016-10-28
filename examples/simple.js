//This example makes quick work out of a fourbar position homework
//Simply diaplays one scenario of a linkage at an angle of 75 degrees
//All input angles must be provided in radians

const FourBar = require('../vectorFourBar.js');
const four = new FourBar;


let output;
let coupler;
let transmission;

const link1 = 20;
const link2 = 10;
const link3 = 10;
const link4 = 10;
angle = (75 * (Math.PI/180));


output = four.outputAngle(link2, link3, link4, link1, angle);
coupler = four.couplerAngle(link2, link3, link4, link1, angle);
transmission = four.transmissionAngle(link2, link3, link4, link1, angle);

console.log(`Crossed output angle ${(output.crossed * (180/Math.PI))} \n`);
console.log(`Open output angle ${(output.open * (180/Math.PI))} \n`);
console.log(`Crossed coupler angle ${(coupler.crossed * (180/Math.PI))} \n`);
console.log(`Open coupler angle, ${(coupler.open * (180/Math.PI))} \n`);
console.log(`TYPE: ${four.linkageType(link2, link3, link4, link1, angle)} \n`);
console.log(`Crossed transmission angle ${(transmission.crossed * (180/Math.PI))} \n`);
console.log(`Open transmission angle ${(transmission.open * (180/Math.PI))} \n`);
