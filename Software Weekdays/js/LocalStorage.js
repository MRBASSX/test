
const products  = [

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
// let MyJsonString  = JSON.stringify(DataSet)
// // JSON.parse()

// console.log(MyJsonString)

// localStorage.setItem("key1",MyJsonString)
// localStorage.setItem("key2"," I am Nice")
// localStorage.setItem("key3"," I am Good")
// localStorage.removeItem("key2")
// // localStorage.clear()
// let MyJsonArray = localStorage.getItem("key1")
// console.log(MyJsonString)
// let MyDataSet = JSON.parse(MyJsonArray)
// console.log(MyDataSet)





// const DataList  = localStorage.setItem("new","[]");

if (!localStorage.getItem("cart")) {
  
   localStorage.setItem("cart",JSON.stringify([]))
}
let cart = JSON.parse(localStorage.getItem("cart"));

// 
console.log(cart)


let AddCart  = (productId)=>{

  let product  = products.find(elements => elements.id == productId );
  if (cart.length == 0) {

    cart.push(product)

  }else{
   let checking  = cart.find(elements => elements.id == productId );
   if(checking == undefined){

     cart.push(product)
   }

  }

 
 localStorage.setItem("cart",JSON.stringify(cart))
}
console.log(AddCart(2))

// find  

// function AddCart(productId){
// let product = DataSet.find(product =>product.id == productId)
// let NewDataList = [product]
// // console.log(NewDataList)
// if (localStorage.getItem("cart")== null) {

//     localStorage.setItem("cart",JSON.stringify(NewDataList))

// }else{

//         NewDataList =  JSON.parse(DataList)
//      let ProductExist = NewDataList.find(product =>product.id == productId)
//    if (ProductExist == undefined) {
//      console.log(NewDataList)
//     NewDataList.push(product)
//      localStorage.setItem("new",JSON.stringify(NewDataList))
//    }

  
// }
// // DataList.push(product)
//  return product
// }



// console.log(AddCart(1))
// localStorage.removeItem("cart")

// function Total(prev,next){

//     return prev + next;


// }

let  getEachPrice  = products.map(product => product.price)

let TotalProductPrice = getEachPrice.reduce((prev,next) => prev + next)

console.log(TotalProductPrice)





// filter
// map
// reduce
// for of loop
