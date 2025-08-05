
let Product = [

     {
    id:1,
    name:"Makeups",
    price:310,
    image:"product-1.jpg",
    color:"brown",
    desc:"Makeups for beauty"

  },
   {
    id:2,
    name:"Hair Dye",
    price:320,
    image:"product-2.jpg",
    color:"brown",
    desc:"Makeups for beauty"

  },
   {
    id:3,
    name:"Nails Long",
    price:330,
    image:"product-3.jpg",
    color:"brown",
    desc:"Makeups for beauty"

  },
   {
    id:4,
    name:"Wig Long",
    price:340,
    image:"product-4.jpg",
    color:"brown",
    desc:"Makeups for beauty"

  }

]

let Cart = []



localStorage.setItem("product",JSON.stringify(Product))

if (localStorage.getItem("cart") == null) {

    localStorage.setItem("cart","[]")
    
} 

    var product = JSON.parse(localStorage.getItem("product"))
    var cart = JSON.parse(localStorage.getItem("cart"))

    console.log(product)
        console.log(cart)
    





function AddCart(productId) {



    let items = product.find( products => {return products.id ===productId} )
    if (localStorage.getItem("cart") == null) {

    localStorage.setItem("cart",JSON.stringify(item))
    
} else{

        let item = cart.find( products => {return products.id === productId} )

        if(item==undefined){

            cart.push(items)

        }

}
    
    
}

AddCart(2)  
// map 
// filter
// find
// reduce
// Push
// pop


// localStorage


