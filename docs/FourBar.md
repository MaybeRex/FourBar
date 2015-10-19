#FourBar Position Analysis

This library makes for quick and easy position analysis of a simple four bar linkage. Positions may be put through a simple derivative to obtain velocities and accelerations. For a better understanding of linkages and how to engineer linked mechanisms, see [Robert L. Norton's Design of Machinery](http://www.amazon.com/Design-Machinery-Robert-Norton/dp/0071215778). Inside this text are in depth explanations of linkages and their uses.


##Methods

|Method call|Parameters|Description|
|-----------|----------|-----------|
|type| N/A | 'VectorMethod'|
| linkageType | inputLength, couplerLength, outputLength, groundLength | Returns type of linkage |
|couplerAngle | inputLength, couplerLength, outputLength, groundLength, inputAngle | Returns and __Object__ with __open__ and __crossed__ configuration angles of coupler link from the positive x-axis based on the input link angle in __Radians__ |
|outputAngle | inputLength, couplerLength, outputLength, groundLength, inputAngle | Returns and __Object__ with __open__ and __crossed__ configuration angles of output link from the positive x-axis based on input link angle in __Radians__ |
|couplerVector | inputLength, couplerLength, outputLength, groundLength, inputAngle, deltaAngle | Returns __Objects__ of the real and imaginary components of both the __crossed__ and __open__ configurations based on the input angle in __Radians__ + an optional [delta]()|
|outputVector | inputLength, couplerLength, outputLength, groundLength, inputAngle, deltaAngle | Returns __Objects__ of the real and imaginary components of both the __crossed__ and __open__ configurations based on the input angle in __Radians__ + an optional [delta]()|
|inputVector | inputLength, couplerLength, outputLength, groundLength, inputAngle, deltaAngle | Returns the real and imaginary components of the input link + an optional [delta]()| 
