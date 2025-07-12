






// Control Statement Example// This is a simple control statement example in JavaScript
// It demonstrates the use of if statements
let condition1 = true; // Change this to false to see the else block in action

if (condition1) {
    console.log("This is the if block again, condition is still true.");
}


 

// Control Statement Example// This is a simple control statement example in JavaScript
// It demonstrates the use of if-else statements
let condition = true; // Change this to false to see the else block in action
if (condition) {
    console.log("Condition is true, executing the if block.");
    
} else {
    console.log("Condition is false, executing the else block.");
  
    
    
}




if (condition) {
    
} else if (!condition) {
    console.log("This is the else if block, condition is false.");  
    
} else if(condition === null) {

    console.log("This is the else if block, condition is null.");
} else if (condition === undefined) {
    console.log("This is the else if block, condition is undefined.");
} else if (condition === 0) {
    console.log("This is the else if block, condition is zero.");
} else if (condition === "") {
    console.log("This is the else if block, condition is an empty string.");
} else if (condition === false) {
    console.log("This is the else if block, condition is false.");
} else if (condition === true) {            
    console.log("This is the else block, condition is neither true nor false.");
} else {
    console.log("This is the final else block, condition is not met.");
}





switch (condition) {
    case true:
        console.log("Switch case: Condition is true.");
        break;              
    case false:
        console.log("Switch case: Condition is false.");
        break;
    case null:
        console.log("Switch case: Condition is null.");
        break;
    case undefined:         
        console.log("Switch case: Condition is undefined.");
        break;
    case Default:
        console.log("Switch case: Default case executed.");
        break;

   
}




