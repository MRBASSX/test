
const DataSet = [{

}];
// JSON.stringify()
// JSON.parse()


const DataSet2 = "I am Cool";




alert("Hi")

localStorage.setItem("key1",JSON.stringify(DataSet))
localStorage.setItem("key2"," I am Nice")
localStorage.setItem("key3"," I am Good")


let MyDataSet = JSON.parse(localStorage.getItem("key1"))
console.log(MyDataSet)

