

let  Engineer = [10 ,20,30,40,50]

console.log(Engineer.length)

var parent = document.getElementById("parent");
var child  = document.createElement("div")


// For LOOP


fetch('https://jsonplaceholder.typicode.com/posts/1/comments',
        {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        } }


)
.then(response => response.json())
.then(data => {
    

   
   
// ForEach LOOP
data.forEach(data => {

    child.innerHTML =` <div class="box">
          <div class="img"><img src="images/product-1.jpg" alt="" height="100%" width="100%" ></div>
          <h1>${data.title}</h1>
          <p>${data.body}</p>
        </div>`
       
        parent.appendChild(child);
        child = document.createElement("div")
              
        
    
});


       
        
        
    
    

  })
 .catch(error => console.error('Error:', error));
  




// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }





// Whlie LOOPtrue

// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i = i +1
// }


// Do While LOOP


// do {

   
    
// } while (i != 10);



// ForEach LOOP
Engineer.forEach(element => {
    
});

// For IN LOOP
for (const key in Engineer) {
   
        const element = Engineer[key];
        
 
}


// For OF LOOOP
for (const element of Engineer) {
    
}

