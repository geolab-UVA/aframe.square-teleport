AFRAME.registerComponent("square-teleport", {
  // A new instance of the component gets created for each <a-entity> the component is attached to
  // The given instance of the component can be accessed using the `this` variable
  // - this.name refers to the string representation of the component name

  init: function () {
    this.throttledDebug = AFRAME.utils.throttle(this.debug, 1000, this);
  },

  tick: function (t, dt) {


    let position = this.el.object3D.position;
    let rotation = this.el.object3D.rotation;
    let x = position.x;
    let y = position.y;
    let z = position.z;
    
  // Teleport function
    switch (true) {
      case z<-5:
        position.x+=-z-10;
        position.z=x;
        rotation.y=rotation.y-Math.PI/2;    
        break;      
    }

    // The following code is responsible for calling the debugging function
    this.throttledDebug(["x = " + x, "z = " + z, "currentFace = " + this.currentFace]);
  },

  /**
   * This is a debugging function
   * It is NOT executed automatically
   * All it does is console.log each element of the array given to it as input
   * If `what` is not an array just console.log `what`
   * @param {Array<any>} what - what to print to the console log
   * @returns {undefined}
   */
  debug: function (what) {
    if (!Array.isArray(what)) {
      console.log(what);
    } else {
      for (msg of what) {
        console.log(msg);
      }
    }
  },
});
