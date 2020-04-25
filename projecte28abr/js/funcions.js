document.getElementById("sr").addEventListener("click",showResult);
document.getElementById("cl").addEventListener("click",clear);
document.getElementById("ans").addEventListener("click", res_anterior);
document.getElementById("dl").addEventListener("click", delete_last);
document.getElementById("fa").addEventListener("click", funcions_avansades);
document.getElementById("ft").addEventListener("click", funcions_trigo);

function write_res(id){
	let elem = document.getElementById(id);
	let actual_vist = document.getElementById('resultado').innerHTML;
	let actual_real = document.getElementById('resultado').value;
	let nou = elem.innerHTML;
	let calcul = elem.value;
	document.getElementById('resultado').innerHTML = actual_vist + nou;
	if(actual_real === undefined){
			document.getElementById('resultado').value = calcul;
	}else{
			document.getElementById('resultado').value = actual_real + calcul;
	}
}
function showResult() {
	try{
    let ans = mexp.eval(document.getElementById('resultado').value);
		document.getElementById('resultado').prevalue=ans;
		document.getElementById('resultado').innerHTML=ans;
		document.getElementById('resultado').value=ans;
	}
	catch(e){
		//document.getElementById('resultado').innerHTML="Operació Invalida";
    alert("Operació Invalida");
	}
}
function clear() {
	document.getElementById('resultado').innerHTML="";
	document.getElementById('resultado').value="";
}
function res_anterior(){
	let res=document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML=res+document.getElementById('resultado').prevalue;
}
function delete_last(){
	var deletec=1;
	var deletec2=1;
	let vist=document.getElementById('resultado').innerHTML;
	let cal=String(document.getElementById('resultado').value);
	if(vist.charAt(vist.length-1)=="√"){
			deletec = 4;
	}
	else if(vist.charAt(vist.length-1)=="π"){
			deletec = 2;
	}
	else if(vist.charAt(vist.length-1)=="%"){
			deletec = 3;
	}
	else if(vist.substring(vist.length-4,vist.length)=="lg10"){
					deletec = 5;
					deletec2=4;
	}
	else{
			deletec = 1;
	}
	document.getElementById('resultado').innerHTML = vist.substring(0,vist.length-deletec2);
	document.getElementById('resultado').value =cal.substring(0,cal.length-deletec);
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
