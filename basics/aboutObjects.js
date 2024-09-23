//singleton initialization of tyhe object 
let user =new Object()
console.log("given is the user object initialise by the constructor",user)
let user2 ={}
// console.log(user2)


//passing the objectd inside the object 
let instauser ={
    name:"sp",
    email:"sp@gmail.com",
    fullname:"shailendra parihar"
}

let user3 ={
    name:"shailendra",
    email:"shelu@gmail.com",
    username:{
        userfullname:{
            firstname:"shelu",
            lastname:"parihar"
        }
    }
}
// console.log(user3.username.userfullname) //bhai dekh ese hogi ye distructuring or accessing of the object ,like you can directly access by the object name and letter on by further destructuring by .



//object combining by spread operator 
let obj1 ={1:'a',2:'b'};
let obj2 ={3:'a',4:'b'};

let obj3 ={...obj1, ...obj2}
console.log(obj3 );


//array of objects .

const uusers =[
    {
        id:"1",
        name:"aaaaa"
    
    },
    {
        id:"2",
        name:"bbbbbb"
    
    }, 
    {
        id:"3",
        name:"ccccc"
    
    }
]
console.log(uusers[1].name)     // and this is how we can access the values from array of objects 

                                  //we can also access the keys and values of the object 
console.log(object.keys( instauser));  // we have to pass the object whose keys we are trying to accessing 
