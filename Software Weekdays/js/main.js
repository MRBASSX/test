// let  A = "Orange juice";
// const B = "Water";
// var C =  "Pineaple juice";

// console.log(C +" "+ A+"                          "+ B)


// // This 
// let arrayOfData = [
//     {
//         name:"Mark",
//         age:100
//     },
//      {
//         name:"Michael",
//         age:100
//     }
//     , {
//         name:"George",
//         age:100
//     },
//      {
//         name:"Michelle",
//         age:100
//     }
// ]

// console.log((arrayOfData[3]).name)
// // console.log(arrayOfData);""
// let age = 19;
// let firstname;
// let fullname;
// let secondname ;

// firstname= 120;
// secondname = 120;
// fullname = firstname + secondname +'';
// console.log(typeof(false));
// console.log(typeof(fullname));
// console.log(typeof(1));

// let vote = "Good !! You are "+age+ " years old and Yes!!" + " You can vote";
// let notvote = "You cant vote go Home"
// // 1 .Tenary Operator
// console.log(age >= 18)
// age >= 18 ? console.log(vote) : console.log(notvote)


// let First = 9900;
// let second = 900;
// let third = 300;


// let firstGreat = First > second  && First > third ;
// let secondgreat  = second > First && second > third;
// let thirdgreat = third >First  && third > second ;

// firstGreat ? console.log("First is the biggest") :"";
// secondgreat ? console.log("Second is the biggest") : "";
// thirdgreat ? console.log("Third is the biggest") : "";

// let i = 2;
// i++ //i = i +1  i = 2+1
// i++ //i = i +1  i = 3 +1
// i++  //i = i +1  i = 4 +1
// i++  //i = i +1  i = 5 +1
// i++  //i = i +1  i = 6+1
// i++ //i = i +1  i = 7+1
// i++  //i = i +1  i = 8+1
// i++  //i = i +1  i = 9+1
// console.log(i)


// let a = 2;
// a++ //a = a +1  a = 2+1
// a++ //a = a +1  a = 3 +1
// a++  //a = a +1  a = 4 +1
// a++  //a = a +1  a = 5 +1
// a++  //a = a +1  a = 6+1
// a++ //a = a +1  a = 7+1
// a++  //a = a +1  a = 8+1
// a++  //a = a +1  a = 9+1
// console.log(a)


// let b =  3

// b+=12 // b = b + 12   b = 3 + 12
// b-=12 // b = b - 12   b = 15 - 12

// 2. Comparison Operator
// == !=  ===  >= <=  >  < 
// 3 .Logical Oprerator
// && , ||, !
// 4. incremental and Decremental Operator
    // ++ and  -- ,+=, -=
// 5. Arithmetic Operator
//  +  , / , * , - , % , \

// let send  = document.getElementById("send");
// let form  = document.getElementById("form");


// function GetMyData(event){
 
//    event.preventDefault();
//     // alert("Hi")
//     var formdata = new FormData(form)
//     console.log(formdata.entries())
//    var data   = Object.fromEntries(formdata.entries())
//    console.log(data)

//  console.log(data.firstname)
//   console.log(data.surname)
//   console.log(data.color)

    // console.log("Hi ,I am A function " )
    // alert("123")
    // Test.style.backgroundColor = "red";
    // Test.style.color = "white";
    // Test.style.fontSize = "120px";


// }



let Youtube = document.getElementsByClassName("container");
let Youtube2 = document.querySelector(".container");

let Youtube3 = document.getElementById("container");
let Youtube4 = document.querySelector("#container");
 Youtube4.onsubmit = (event)=>{


    alert("Hi")


 }

// let link = false ? "https://www.youtube.com/embed/qcscUoP8FNk?si=5rGT33uVP8EnCrh" : "https://www.youtube.com/embed/PwhhYceuFjM?si=G4RylpFaJdJqi7GJ"
// Youtube.src  = "none"
// alert(Youtube)
// console.log(Youtube)







Youtube4.addEventListener("click",()=>{


    alert("Hi")


 })














