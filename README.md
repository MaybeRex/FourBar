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
