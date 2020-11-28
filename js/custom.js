

function add(){
	let x=document.getElementById("num1").value;
let y=document.getElementById("num2").value;
  let result=Number(x)+Number(y);
  document.getElementById("result").innerHTML="Addition is :" + result;
}
function sub(){
	let x=document.getElementById("num1").value;
let y=document.getElementById("num2").value;
  let result=Number(x)-Number(y);
 document.getElementById("result").innerHTML="Subtraction is :"+result;
}
function mul(){
	let x=document.getElementById("num1").value;
let y=document.getElementById("num2").value;
  let result=Number(x)*Number(y);
  document.getElementById("result").innerHTML="Multiplication is :"+result;
}
function div(){
	let x=document.getElementById("num1").value;
let y=document.getElementById("num2").value;
  let result=Number(x)/Number(y);
  document.getElementById("result").innerHTML="Division is :"+result;
}

