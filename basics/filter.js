const num = [1,2,3,4,5,6]
const newNum = num.filter((num) =>{
     return num>3})      //explicit and emplicit return whenever we are using the { } the we must have to use the return keyword......
// console.log(newNum)
//Purpose:
/*filter: Used to filter out elements based on a condition.
map: Used to transform each element in the array.
Return Value:
filter: Returns a new array with elements that pass the test.
map: Returns a new array with transformed elements.
Function Output:
filter: The function should return a boolean (true or false).
map: The function should return the transformed value.*/

//we can do the same work via forEach
const n=[1,2,3,4,5]
const newN=[];
// n.forEach((items)=>{  
//     if(items>2){
//          newN.push(items)
//     }
//     })
//         console.log(newN)
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  const userbook =books.filter((bks)=>{
    return bks.genre==='Non-Fiction'
  })
  console.log(userbook)
