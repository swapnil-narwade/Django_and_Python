// var firstName = prompt("enter your first name")
// var lastName = prompt("enter your last name")
// var height = prompt("enter your Height in centimeters")
// var age = prompt("enter your age")
// var petName = prompt("enter your pet name")
//
// if(firstName[0] === lastName[0]) {
//   if (height >170) {
//     if (age >20 && age <30) {
//       if (petName[petName.length-1] === "y")  {
//         console.log("You have successfully entered");
//       }else {
//         console.log("Access is denied")
//       }
//     }else {
//       console.log("Access is denied")
//     }
//
//   }else {
//     console.log("Access is denied")
//   }
//
// }else {
//   console.log("Access is denied")
// }
// var answer = prompt("do you want to start the roster app")
// var roster=[]
// while (answer ==="y") {
//   input = prompt("What do you want to do add,remove,display,quit")
//   if(input ==="add"){
//     add(roster)
//   }else if (input === "remove") {
//     remove(roster)
//   }else if (input ==="display") {
//     display(roster)
//   }else if(input === "quits"){
//     quits()
//   }
// }
// function add(roster){
//   x = prompt("enter the value that you want to add")
//   roster.push(x)
// }
// function remove(roster) {
//   x = prompt("enter the value that you want to remove")
//   roster.pop(x)
// }
// function display(roster) {
//   return roster
// }
// function quits() {
//   var answer = prompt("do you want to start the roster apjhmhvp")
// }
// ====================================================================================
// var element = document.getElementById('event')
// //var paragraph = document.getElementsByTagName('p')[1]
// var msg = element.childNodes[0]
// //var msg1 = paragraph.length
// alert(msg.childNodes.nodeName)
// ========================================================
function checkDate() {
  if(!document.getElementById || !document.createTextNode) {return;}
  var dateField = document.getElementById('date');
  if (!dateField) {return ;}
  var errorContainer = dateField.parentNode.getElementsByTagName('span')[0];
  if (!errorContainer) {return;}
  var checkPattern = new RegExp("\\d{2}/\\d{2}/\\d{4}");
  var errorMessage = '';
  errorContainer.firstChild.nodeValue=''
  var dateValue = dateField.value;
  if(dateValue==''){
    errorMessage="please enter the date";
  }else if (!checkPattern.test(dateValue)) {
    errorMessage = "please provide the date in defined format";
  }
  if (errorMessage!='') {
    errorContainer.firstChild.nodeValue=errorMessage;
    dateField.focus();
  }
  else {
    return true;
  }

}
