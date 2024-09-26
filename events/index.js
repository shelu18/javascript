document.querySelector('#clickMe').addEventListener('click', function(e) {
    console.log(e)
    alert("button is clicked")    //this is how we can define the events by selectiong the elements by dom    in queryselector we have to pass id like this and in getelebyid we dont need to use #

})
document.getElementById('hoverMe').addEventListener('mouseover',function(){
    console.log("haan bhai kar diya hover aa gaya majaa")
})
document.getElementById('doubleClickMe').addEventListener('dblclick',function(){
    alert("haan bhai ho gya double click")
})


//event object  
// The Event Object:
// The event object is automatically passed to event handler functions when an event occurs. It contains properties and methods that provide information about the event and allow you to control how the event is handled.
// Key Properties and Methods of the Event Object:

// type: The type of event (e.g., "click", "mouseover", "keydown").
// target: The element that triggered the event.
// currentTarget: The element that the event handler is attached to.
// preventDefault(): Prevents the default action associated with the event.
// stopPropagation(): Stops the event from bubbling up the DOM tree.
// timeStamp: The time when the event occurred.
// clientX/clientY: The horizontal/vertical coordinate of the mouse pointer relative to the client area.
// key: The key value for keyboard events.


//preventing the default action: by preventdefault   //here the google link will not redirect to the google website 
document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
    // e.stopPropagation()
    console.log("google is clicked")
})
document.getElementById('images').addEventListener('click',function(e){
    console.log(e)
    if(e.target.tagName=='IMG'){
    //we have to remove the parentNode
    let removeIt = e.target.parentNode
removeIt.remove()
    }
})


