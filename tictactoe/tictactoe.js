var restart = document.querySelector("#restarts");
var squares = document.querySelectorAll('td');

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}
restart.addEventListener('click',clearBoard)

// var clickOne = document.querySelector("#one")
//
// clickOne.addEventListener('click',function() {
//   if (clickOne.textContent === '') {
//     clickOne.textContent = 'X';
//   }else if (clickOne.textContent==='X') {
//     clickOne.textContent = 'O';
//   }else {
//     clickOne.textContent = '';
//   }
// })
//
// var clickTwo = document.querySelector("#two")
//
// clickTwo.addEventListener('click',function() {
//   if (clickTwo.textContent === '') {
//     clickTwo.textContent = 'X';
//   }else if (clickTwo.textContent==='X') {
//     clickTwo.textContent = 'O';
//   }else {
//     clickTwo.textContent = '';
//   }
// })
// var clickThree = document.querySelector("#three")
// clickThree.addEventListener('click',function() {
//   if (clickThree.textContent === '') {
//     clickThree.textContent = 'X';
//   }else if (clickThree.textContent==='X') {
//     clickThree.textContent = 'O';
//   }else {
//     clickThree.textContent = '';
//   }
// })
// var clickFour = document.querySelector("#four")
// clickFour.addEventListener('click',function() {
//   if (clickFour.textContent === '') {
//     clickFour.textContent = 'X';
//   }else if (clickFour.textContent==='X') {
//     clickFour.textContent = 'O';
//   }else {
//     clickFour.textContent = '';
//   }
// })
// var clickFive = document.querySelector("#five")
//
// clickFive.addEventListener('click',function() {
//   if (clickFive.textContent === '') {
//     clickFive.textContent = 'X';
//   }else if (clickFive.textContent==='X') {
//     clickFive.textContent = 'O';
//   }else {
//     clickFive.textContent = '';
//   }
// })
// var clickSix = document.querySelector("#six")
//
// clickSix.addEventListener('click',function() {
//   if (clickSix.textContent === '') {
//     clickSix.textContent = 'X';
//   }else if (clickSix.textContent==='X') {
//     clickSix.textContent = 'O';
//   }else {
//     clickSix.textContent = '';
//   }
// })
// var clickSeven = document.querySelector("#seven")
//
// clickSeven.addEventListener('click',function() {
//   if (clickSeven.textContent === '') {
//     clickSeven.textContent = 'X';
//   }else if (clickSeven.textContent==='X') {
//     clickSeven.textContent = 'O';
//   }else {
//     clickSeven.textContent = '';
//   }
// })
// var clickEight = document.querySelector("#eight")
//
// clickEight.addEventListener('click',function() {
//   if (clickEight.textContent === '') {
//     clickEight.textContent = 'X';
//   }else if (clickEight.textContent==='X') {
//     clickEight.textContent = 'O';
//   }else {
//     clickEight.textContent = '';
//   }
// })
// var clickNine = document.querySelector("#nine")
//
// clickNine.addEventListener('click',function() {
//   if (clickNine.textContent === '') {
//     clickNine.textContent = 'X';
//   }else if (clickNine.textContent==='X') {
//     clickNine.textContent = 'O';
//   }else {
//     clickNine.textContent = '';
//   }
// })
function changeMaker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMaker)
}
