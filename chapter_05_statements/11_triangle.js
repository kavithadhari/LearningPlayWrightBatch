let sidea=10.5;
let sideb=10.1;
let sidec=10.4; 
if(sidea==sideb && sidea==sidec && sideb==sidec)
  {
   console.log("The triangle is equilateral"); 
  }
    else if(sidea==sideb || sidea==sidec || sideb==sidec)
    {
      console.log("The triangle is isosceles");
    }
    else
    {
      console.log("The triangle is scalene");
    } 