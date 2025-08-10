




const Movies = [
    {
        title:"Help me !!!!",
        duration:"2hr",
        image:"help.jpg",
        genre:"Mr Hell"
    },
     {
        title:"Help me !!!!",
        duration:"2hr",
        image:"help.jpg",
        genre:"Mr Hell"
    },
     {
        title:"Help me !!!!",
        duration:"2hr",
        image:"help.jpg",
        genre:"Mr Hell"
    }
    ,
     {
        title:"Help me !!!!",
        duration:"2hr",
        image:"help.jpg",
        genre:"Mr Hell"
    }
    ,
     {
        title:"Help me !!!!",
        duration:"2hr",
        image:"help.jpg",
        genre:"Mr Hell"
    }
]



let MovieConvertedToString =  JSON.stringify(Movies)



localStorage.setItem("Mubarack",MovieConvertedToString);
localStorage.setItem("hi",MovieConvertedToString);
const MyData = JSON.parse(localStorage.getItem("Mubarack")) ;
console.log(MyData);

MyData.push(
   {
        title:"Danger Solved",
        duration:"3hr",
        image:"danger.jpg",
        genre:"Mr Danger"
    }
)

localStorage.removeItem("hi")
localStorage.removeItem("Mubarack")


console.log(MyData);



