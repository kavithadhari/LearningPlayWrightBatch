
function scopeTest()
 {
  
  // console.log(y);// undefined (due to hoisting)
  if (true) {
    var x = "I am function-scoped";
    let y = "I am block-scoped";
    
    console.log(x); // Works: "I am function-scoped"
    console.log(y); // Works: "I am block-scoped"
  }
  
  console.log(x); 
  console.log(y); 
}
scopeTest();