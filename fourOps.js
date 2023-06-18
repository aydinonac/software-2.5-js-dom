var ans = 0;
var num1 = document.getElementById("inp1");
var num2 = document.getElementById("inp2");

function reset () {
  document.getElementById("demoWarnA").innerText = "";
  document.getElementById("demoWarnB").innertext = "";
  document.getElementById("demo").innerText = "";
} 

function processPlus() {
  reset();
  if (isNaN(num1.value) || isNaN(num2.value)) {
    document.getElementById("demoWarnA").innerText = "Your inputs must be numbers. Please try again.";
    } 
  else {
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    ans = n1 + n2;
    document.getElementById("demo").innerHTML = n1 + " + " + n2 + " = " + ans;
  }
}

function processMinus() {
  reset();
  if (isNaN(num1.value) || isNaN(num2.value)) {document.getElementById("demoWarnA").innerText = "Your inputs must be numbers. Please try again."}
  else {
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    ans = n1 - n2;
    document.getElementById("demo").innerHTML = n1 + " - " + n2 + " = " + ans;
  }
}

function processTimes() {
  reset();
  if (isNaN(num1.value) || isNaN(num2.value)) {document.getElementById("demoWarnA").innerText = "Your inputs must be numbers. Please try again."}
  else {
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    ans = n1 * n2;
    document.getElementById("demo").innerHTML = n1 + " x " + n2 + " = " + ans;
  }
}

function processDivide() {
  reset();
  var n1 = Number(num1.value);
  var n2 = Number(num2.value);
  if (isNaN(num1.value) || isNaN(num2.value)) {document.getElementById("demoWarnA").innertext = "Your inputs must be numbers. Please try again."}
  else if (n2 == 0) {document.getElementById("demoWarnB").innerText = "You can't divide by 0. Please change the second number.";}
  else {
    ans = n1 / n2;
    document.getElementById("demo").innerHTML = n1 + " / " + n2 + " = " + ans;
  }
}
