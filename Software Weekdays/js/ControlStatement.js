

// Write a program that checks if soneone is present or not

// Write a program share money base on age ,older get higher amount

// // 1 .Data @what the problem is about
// let age =  17;

// // 2. Logic @true Or false

// let cantVote = (age < 18) ; 

// // console.log("this is " + canVote)


// // 3 .check (control)
// if(cantVote){

//     console.log("You cant vote")

// }else{

//     console.log("You can vote")
// }


// let person = 1;

// let present = person == 1;

// if (present) {

//     console.log("Someone in the Room")
    
// } else {

//     console.log("No One in the Room")
    
// }

let amount = 1000
let Totalpoint = 0

let peoples = [{
    name:"Michael",
    age:20

},{
    name:"Michile",
    age:18

},{
    name:"Mark",
    age:21

},{
    name:"George",
    age:23

}]
// for (const person in peoples) {



//     if (person.age <=18) {
//         Totalpoint = 1
//     }else if(person.age <=20){
//         Totalpoint = 2
//     }else if(person.age <=21){
//         Totalpoint = 3
//     }else if(person.age <=23){
//         Totalpoint = 4
//     }
//     console.log(Totalpoint)
    
// }

for (let person of peoples) {

   


    if (person.age ==18) {
        person.Totalpoint = 1

    }else if(person.age ==20){

        person.Totalpoint = 2

    }else if(person.age ==23){

       person.Totalpoint = 3

    }else if(person.age ==21){

       person.Totalpoint = 4

    }
    
    Totalpoint += person.Totalpoint;

     

   
    
}


for (const person of peoples) {

    console.log(`'name: '${person.name} 'Share:' ${(person.Totalpoint/Totalpoint)*amount}`);
    
}



 




    
