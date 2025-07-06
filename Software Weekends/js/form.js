
let send =  document.getElementById("send")
let form = document.getElementById("form")


// console.log(send)


send.onclick = function (event) {

    event.preventDefault();
    const Data = new FormData(form)
    const FinalData = Object.fromEntries(Data.entries())
    // console.log(FinalData.firstname)
    // console.log(FinalData.password)
    // console.log(FinalData.time)
    // console.log(FinalData.date)

   fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(FinalData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Form submitted successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
    });
    form.reset(); // Reset the form after submission
}