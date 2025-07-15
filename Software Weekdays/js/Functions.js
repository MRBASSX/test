
let test = document.getElementById("test")
let child = document.createElement("video")

// Type Of Function


// 1. anonymous function
  let MyFunction = function (event){  event.preventDefault(); console.log("AnonyMous"); child.controls = true;  child.poster = `../image/product-1.jpg`; test.appendChild(child)}


//   2. An Arrow Function 
let MyArrow = ()=>{   console.log("Arrow") ; test.innerHTML = `${test}`  }


// 3. Function With Name

 let FunWithName = function NameOfFunction(){  console.log("Name")  }




// Creating A Function




// Calling A Function

test.addEventListener("click", MyFunction)
test.onclick = MyFunction
MyFunction()


// Functions With Parameters




// Return Functions




// CallBack Function 
