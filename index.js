// class create for cylinder
// i write code Rahul Kumar Singh 
class Cylinder {
    constructor(height, radius) 
    {
      this.height  = height;
      this.radius = radius;
    }
    getVolume()
    {
         
        return (Math.PI * this.radius * this.radius * this.height) ;

    }
    
  }

  // class create for sphere 
class Sphere {
    constructor( radius) 
    {
      
      this.radius = radius;
    }
    getVolume()
    {
        
        return (4/3)*Math.PI * this.radius * this.radius * this.radius ;

    }
    
  }

  // class create for cone 
class Cone {
    constructor(height, radius) 
    {
      this.height  = height;
      this.radius = radius;
    }
    getVolume()
    {
         
        return (Math.PI * this.radius * this.radius * this.height/3) ;

    }
    
  }
  
  
function getVolume1()
{
  let h = document.getElementById("height1").value;
  let r = document.getElementById("radius1").value;
  let Cylinder1 = new Cylinder (h , r); //object create for cylinder
  document.getElementById("volume1").innerHTML= Cylinder1.getVolume().toPrecision(5);
}
function getVolume2()
{
  
  let r = document.getElementById("radius2").value;
  let sphere1 = new Sphere ( r); //object create for cylinder
  document.getElementById("volume2").innerHTML= sphere1.getVolume().toPrecision(5);
}
function getVolume3()
{
  let h = document.getElementById("height3").value;
  let r = document.getElementById("radius3").value;
  let cone1 = new Cone (h , r); //object create for cylinder
  document.getElementById("volume3").innerHTML= cone1.getVolume().toPrecision(5);
}