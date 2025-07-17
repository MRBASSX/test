






let test = document.getElementById("test")
let child = document.createElement("video")

// Type Of Function


// 1. anonymous function
  // let MyFunction = function (event){  console.log("AnonyMous"); child.controls = true;  child.poster = `../image/product-1.jpg`; test.appendChild(child)}


//   2. An Arrow Function 
// let MyArrow = ()=>{   console.log("Arrow") ; test.innerHTML = `${test}`  }


// 3. Function With Name

//  let FunWithName = function NameOfFunction(){  console.log("Name")  }




// Creating A Function




// Calling A Function

// test.addEventListener("click", MyFunction)
// test.onclick = MyFunction
// MyFunction()


// Functions With Parameters


let Engineers = [
  {
    name:"Michelle",
    email:"Michelle@gmail.com",
    password:"Michelle12345"

  },
   {
    name:"Michael",
    email:"Michael@gmail.com",
    password:"Michael12345"

  },
   {
    name:"Mark",
    email:"Mark@gmail.com",
    password:"Mark12345"

  },
   {
    name:"George",
    email:"George@gmail.com",
    password:"George12345"

  }
]

let send = document.getElementById("send")
let form =  document.getElementById("form")

function SendData(event) {

 

event.preventDefault();
let formData = new FormData(form)
let getData =  Object.fromEntries(formData.entries())

console.log(typeof(getData.email))
console.log(typeof(getData.password))

if (SignIn(getData.email,getData.password)) {

  form.innerHTML  = SignIn(getData.email,getData.password)
  
} else {

  alert("Fail Login")
  
}


  
}


send.onclick = SendData
 



function SignIn(email,password) {




   for (let i = 0; i < Engineers.length; i++) {


     try {
      
      if (Engineers[i].email === email  && Engineers[i].password === password ) {
     
      return `<h1 style="color:green">You have login Successfully, Welcome  ${Engineers[i].name}</h1>`;
      
    }
      
     } catch (error) {

        alert(`Fail Login  Reason :${error}`)
      
     }
   
    
   }





 
  
}



try {


  
} catch (error) {


  
}


// Return Functions




// CallBack Function 
