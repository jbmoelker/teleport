# Teleport

**Teleport to any place in the world using your mobile device.**

[Try it now](https://jbmoelker.github.io/teleport/)

## How it works

* When you enter your destination, its address is geocoded into an exact location.
* A 3D world is created, textured with the imagery of that exact location.
* The orientation of your mobile device is then used to look around the 3D world.
* The result is that you can literally look around on your device as if you are on the other side of the world.

## Device requirements

* [WebGL support](http://caniuse.com/#feat=webgl)
* [Device Orientation support](http://caniuse.com/#feat=deviceorientation)

## Used technologies

* [Google Maps API](https://developers.google.com/maps/documentation/javascript/) for imagery of your destination.
* [ThreeJS](http://threejs.org/) to create a 3D world.
* [GSVPano](https://github.com/pnitsch/GSVPano.js) to project the imagery to the 3D world.
* [Full Tilt](https://github.com/adtile/Full-Tilt#full-tilt) to look around the 3D world by moving your device.
* [Doe](https://github.com/richtr/doe) to provide a device emulator when yours doesn't have device orientation support. 