let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    // break;
  case 3:
    console.log("Wednesday");
    // break;
    case 4:
        console.log("thursday")
        // break;
  default:
    console.log("Not a valid day");
}
//The break statement is used to exit the switch block once a matching case has been found and its code has been executed.
// Without the break statement, JavaScript will continue to execute the following case statements even if they do not match the expression (this is called fall-through behavior).