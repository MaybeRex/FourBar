# FourBar
A node.js program for a fourbar position analysis using the vector method. This library encompasses the angles of all the links and their position vectors along with the transmission angle.

#FourBar Position Analysis

This library makes for quick and easy position analysis of a simple four bar linkage. Positions may be put through a simple derivative to obtain velocities and accelerations. For a better understanding of linkages and how to engineer linked mechanisms, see [Robert L. Norton's Design of Machinery](http://www.amazon.com/Design-Machinery-Robert-Norton/dp/0071215778). Inside this text are in depth explanations of linkages and their uses.

##Methods

|Method call|Parameters|Description|
|-----------|----------|-----------|
|type| N/A | 'VectorMethod'|
| linkageType | inputLength, couplerLength, outputLength, groundLength | Returns type of linkage |
|couplerAngle | inputLength, couplerLength, outputLength, groundLength, inputAngle | Returns and __Object__ with __open__ and __crossed__ configuration angles of coupler link from the positive x-axis based on the input link angle in __Radians__ |
|outputAngle | inputLength, couplerLength, outputLength, groundLength, inputAngle | Returns and __Object__ with __open__ and __crossed__ configuration angles of output link from the positive x-axis based on input link angle in __Radians__ |
|couplerVector | inputLength, couplerLength, outputLength, groundLength, inputAngle, deltaAngle | Returns __Objects__ of the real and imaginary components of both the __crossed__ and __open__ configurations based on the input angle in __Radians__ + an optional __delta__ as seen below|
|outputVector | inputLength, couplerLength, outputLength, groundLength, inputAngle, deltaAngle | Returns __Objects__ of the real and imaginary components of both the __crossed__ and __open__ configurations based on the input angle in __Radians__ + an optional __delta__ as seen below|
|inputVector | inputLength, couplerLength, outputLength, groundLength, inputAngle, deltaAngle | Returns the real and imaginary components of the input link + an optional __delta__|


##Parameters


In the image below, _input_ is represented by _s_, the _coupler_ is _p_ and the _output_ is _u_. Driving angle is _Theta 2_ and the _deltas_ are for creating ternary links.

![image](http://i.imgur.com/tF8eoCr.png)


##Example

Below is a vary basic example to show how fast calculations can be made

``` javascript

const FourBar = require('fourbar');
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

```
