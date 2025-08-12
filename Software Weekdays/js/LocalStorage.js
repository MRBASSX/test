
const DataSet = [
    {
        name:"Michael",
        age:120

}, {

}, {

}
];
let MyJsonString  = JSON.stringify(DataSet)
// JSON.parse()
console.log(MyJsonString)

localStorage.setItem("key1",MyJsonString)
localStorage.setItem("key2"," I am Nice")
localStorage.setItem("key3"," I am Good")
localStorage.removeItem("key2")
// localStorage.clear()
let MyJsonArray = localStorage.getItem("key1")
console.log(MyJsonString)
let MyDataSet = JSON.parse(MyJsonArray)
console.log(MyDataSet)



