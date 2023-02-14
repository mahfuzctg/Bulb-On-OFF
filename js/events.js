console.log('this is a event js file');
// option one directly set on the html element. it's not recommended


// option two add onclick function
// this option is recommended
function btnBlue(){
    document.body.style.backgroundColor = 'blue'
}

// option 3 
const btnGreen = document.getElementById('btn-green');
//   ekhane just function er name dite hobe 
  btnGreen.onclick = onClickGreen;
  function onClickGreen(){
    document.body.style.backgroundColor = 'green';
  }

//   option 3 another 
const btnPurple = document.getElementById('btn-purple');
btnPurple.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

// option 4 
const btnPink = document.getElementById('btn-pink');
btnPink.addEventListener('click', function makePink() {
 document.body.style.backgroundColor = 'pink';
});

// final option
document.getElementById('btn-goldenrod').addEventListener('click', function(){
  document.body.style.backgroundColor = 'goldenrod';
})

// 
