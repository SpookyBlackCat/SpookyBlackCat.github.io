var elem = [];

// assign the entire table row for hole 1-18 to a variable, elem
for(var j = 0; j < 18; j++) {
  var x = j+1;
  elem[j] = document.getElementById(x);
  }

//assign "19" to totals id
elem[18] = document.getElementById("totals");
console.log(elem[18]);
// assign add1, minus1, clear, over functions to the 
//corresponding buttons for each hole
for (let n = 0; n < 18; n++) {
elem[n].children[4].children[0].onclick 
  = function(){add1(elem[n]);over(elem[n]);};
elem[n].children[4].children[1].onclick 
  = function(){minus1(elem[n]);over(elem[n]);};
elem[n].children[4].children[2].onclick
    = function(){clear(elem[n]);};  
}


//call totals
elem[18].children[4].children[0].onclick 
  = function(){scoreTotal();parTotal();overTotal();};
//clear totals
elem[18].children[4].children[1].onclick 
  = function(){clear(elem[18]);parClear(elem[18]);};



// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    if (elem.children[2].innerHTML > 8) {
      elem.children[2].innerHTML = 8;
    }
  }
}

//minus button
function minus1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "-";
  else {
    let cScore = elem.children[2].innerHTML;
    cScore = Number.parseInt(cScore);
    elem.children[2].innerHTML = cScore - 1; 
    if (elem.children[2].innerHTML < 0) {
      elem.children[2].innerHTML = "-";
    }
  }
}

//function to calculate over column
function over (elem) {
  if(elem.children[2].innerHTML == "-") {
    elem.children[3].innerHTML = "-";
  }
  else {
    elem.children[3].innerHTML = elem.children[2].innerHTML - elem.children[1].innerHTML;
}
}

//function for clear button
  function clear (elem) {
  elem.children[2].innerHTML = "-";
   elem.children[3].innerHTML = "-";
}

//function for par clear
  function parClear (elem) {
    elem.children[1].innerHTML = "-";
  }

//function for total score
  function scoreTotal() {
    //GAMEPLAN: create an array that has all the scores for each hole then sum the array
    elem[18].children[2].innerHTML = 0;
    let score = [];
    for(var i = 0; i < 19; i++) {
      if (elem[i].children[2].innerHTML == "-") {
        score[i] = 0;
      }
      if (elem[i].children[2].innerHTML != "-") {
      score[i] = elem[i].children[2].innerHTML;
      }
    }
    // Getting sum of numbers
    var sum = 0;
    for(var j = 0; j < score.length; j++){
      score[j] = Number.parseInt(score[j]);
      sum = sum + score[j]; 
      }
    
  return elem[18].children[2].innerHTML = sum;
  } 
//function for par totals
function parTotal() {
  //same as score totals but par column
    let score = [];
    for(var i = 0; i < 19; i++) {
      if (elem[i].children[1].innerHTML == "-") {
        score[i] = 0;
      }
      if (elem[i].children[1].innerHTML != "-") {
      score[i] = elem[i].children[1].innerHTML;
      }
    }
    // Getting sum of numbers
    var sum = 0;
    for(var j = 0; j < score.length; j++){
      score[j] = Number.parseInt(score[j]);
      sum = sum + score[j]; 
      }
    
  return elem[18].children[1].innerHTML = sum;
  } 
//function for over totals
function overTotal() {
    //GAMEPLAN: create an array that has all the scores for each hole then      sum the array
    elem[18].children[3].innerHTML = 0;
    let score = [];
    for(var i = 0; i < 19; i++) {
      if (elem[i].children[3].innerHTML == "-") {
        score[i] = 0;
      }
      if (elem[i].children[3].innerHTML != "-") {
      score[i] = elem[i].children[3].innerHTML;
      }
    }
    // Getting sum of numbers
    var sum = 0;
    for(var j = 0; j < score.length; j++){
      score[j] = Number.parseInt(score[j]);
      sum = sum + score[j]; 
      }
    
  return elem[18].children[3].innerHTML = sum;
  } 
