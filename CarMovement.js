AFRAME.registerComponent("carmovement",{
    init:function(){
      this.run();
    },

    run: function(){
      var els = document.querySelector("#car");
       var car = document.querySelector("#car")
       var position1 = new  THREE.Vector3();
       var position2 = new THREE.Vector3();
       var direction = new THREE.Vector3();
       var cars = els.object3D;
       var obstacle = document.querySelector("#obstacles2").object3D;
       cars.getWorldPosition(position1)
       obstacle.getWorldPosition(position2)

       direction.subVectors(position1,position2).normalize();

       car.setAttribute("velocity",direction.multiplyScalar(-10))
       car.setAttribute("dynamic-body",{
        mass:"0"
       })
      
       
    }
})