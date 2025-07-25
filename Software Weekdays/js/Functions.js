








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

// let getMyReturn = 

// console.log(getMyReturn(1,2))


let Product = [
  {
    id:"001",
    name:"Makeups",
    price:310,
    image:"product-1.jpg",
    color:"brown",
    desc:"Makeups for beauty"

  },
   {
    id:"002",
    name:"Hair Dye",
    price:320,
    image:"product-2.jpg",
    color:"brown",
    desc:"Makeups for beauty"

  },
   {
    id:"003",
    name:"Nails Long",
    price:330,
    image:"product-3.jpg",
    color:"brown",
    desc:"Makeups for beauty"

  },
   {
    id:"004",
    name:"Wig Long",
    price:340,
    image:"product-4.jpg",
    color:"brown",
    desc:"Makeups for beauty"

  }
]

var content = document.getElementById("content");
let children  = document.createElement("div")

 let range = document.getElementById("range")
 let rangevalue = document.getElementById('rangevalue')


  let Myfilter  = (Product,price)=>{

   return  Product.price <=0 &&  Product.price <= price

  }

function Updatedproduct(price) {


  let FilteredProduct = Product.filter(Myfilter(price))


  FilteredProduct

.map((george,index) => {

children.innerHTML = ""

children.innerHTML = `<div class="box" key="${index}" onclick="DoSomething(${george.id})">
            <div class="img">
               <img src="images/${george.image}" alt="" height="100%" width="100%">
           </div>
            <h1   >${george.name}</h1>
             <small>Ghc ${george.price}</small>
            <p> ${george.desc}</p>

   
          </div>`


    content.appendChild(children)
    children  = document.createElement("div")

  
 })
  
}


Updatedproduct(range.value)


function DoSomething(id) {


let Detail = Product.find(key=>{

  let code = "00"+id 

  if (code == (key.id)) {

  //  console.log(key)
   return key;
    
  }
  

})

 console.log(Detail)
  
 }







 range.addEventListener("input",(event)=>{

  event.preventDefault();

  rangevalue.innerHTML = range.value
  Updatedproduct(range.value)



 })




