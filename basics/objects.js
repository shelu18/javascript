
// const mysymb = symbol("key1")

let user ={
    name:"shelu",
    "age":22,                       //by default the key is string and even if we don't define it as string it will automatically converted into the string 
                                    //and can't be accessed by the point or dot 
 email:"shailu@gmail.com",
    // [mysymb]:"mysymbol"
}
console.log(user["name"])
console.log(user.name)

console.log(user["email"])
console.log(user[mysymb])
console.log(user)
