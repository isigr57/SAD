document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("s").addEventListener("click",o1);
document.getElementById("r").addEventListener("click",o2);
document.getElementById("d").addEventListener("click",o3);
document.getElementById("m").addEventListener("click",o4);
document.getElementById("sr").addEventListener("click",showResult);
document.getElementById("cl").addEventListener("click",clear);
document.getElementById("ans").addEventListener("click", res_anterior);
document.getElementById("dl").addEventListener("click", delete_last);
document.getElementById("fa").addEventListener("click", funcions_avansades);
document.getElementById("ft").addEventListener("click", funcions_trigo);

function n1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n1").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n2").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n3").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n4").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n5() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n5").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n6() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n6").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n7() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n7").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n8() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n8").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n9() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n9").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n0() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n0").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("s").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function o2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("r").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function o3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("d").value;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function o4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("m").value;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function showResult() {
	try{
    let ans = mexp.eval(document.getElementById('resultado').innerHTML);
		document.getElementById('resultado').prevalue=ans;
		document.getElementById('resultado').innerHTML=ans;
	}
	catch(e){
		//document.getElementById('resultado').innerHTML="Operació Invalida";
    alert("Operació Invalida");
	}
}
function clear() {
	document.getElementById('resultado').innerHTML="";
}
function res_anterior(){
	let res=document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML=res+document.getElementById('resultado').prevalue;
}
function delete_last(){
	let res=document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML=res.replace(/(\s+)?.$/, '');
}
function funcions_avansades(){
	var checkBox = document.getElementById("fa");
	var fa = document.getElementById("panel_fa");
	if (checkBox.checked == true){
    fa.style.display = "inline";
  } else {
    fa.style.display = "none";
  }
}
function funcions_trigo(){
	var checkBox = document.getElementById("ft");
	var fa = document.getElementById("panel_ft");
	if (checkBox.checked == true){
		fa.style.display = "inline";
	} else {
		fa.style.display = "none";
	}
}
