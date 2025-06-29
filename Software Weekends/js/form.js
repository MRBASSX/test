
let send =  document.getElementById("send")
let form = document.getElementById("form")


// console.log(send)


send.onclick = function (event) {


    event.preventDefault();

    const Data = new FormData(form)
    const FinalData = Object.fromEntries(Data.entries())
    
    console.log(FinalData.firstname)
    console.log(FinalData.password)
}