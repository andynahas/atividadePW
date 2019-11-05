var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
function calculaSomar() {
    var r = document.getElementById("Somar");
    var nu1 = Number(n1.value);
    var nu2 = Number(n2.value);
    var res = nu1 + nu2;
    r.innerHTML = 'O Resultado é ' + res + ' !';

}
function calculaDiv(){
	var div = document.getElementById("div");
	var nu1 = Number(n1.value);
	var nu2 = Number(n2.value);
	var r = nu1 / nu2;
	div.innerHTML = 'O Resultado é ' + r + '!';



}
function calculaMetadeDobro(){
	var metade = document.getElementById("metade");
	var dobro = document.getElementById("dobro");
	var nu1 = Number(n1.value);
	var r1 = nu1 / 2;
	var r2 = nu1 * 2;
	metade.innerHTML = 'A metade é '+ r1 +' !';
	dobro.innerHTML = 'O dobro é ' + r2 + '!';

}
function calculaIdade(){
	var nome = document.getElementById("nome");
	var idade30 = document.getElementById("idade");
	var n = String(nome.value);
	var i = Number(n2.value);
	var r = i + 30;
	idade30.innerHTML = n +' daqui a 30 anos você terá '+ r +' anos!';
}

function calculaMedia(){
	var media = document.getElementById("media");
	var no1 = Number(n1.value);
	var no2 = Number(n2.value);
	var no3 = Number(n3.value);
	var rm = (no1+no2+no3) / 3;
	media.innerHTML = 'A média das notas é '+ rm +' !';
}

function calculadora(){
	var soma = document.getElementById("soma");
	var sub1 = document.getElementById("sub1");
	var sub2 = document.getElementById("sub2");
	var prod = document.getElementById("produto");
	var div1 = document.getElementById("div1");
	var quociente = document.getElementById("quociente");
	var resto = document.getElementById("resto");
	var nu1 = Number(n1.value);
	var nu2 = Number(n2.value);
	var rsoma = nu1 + nu2;
	var rsub1 = nu1 - nu2;
	var rsub2 = nu2 - nu1;
	var rprod = nu1 * nu2;
	var rdiv1 = nu1 / nu2;
	var rquo = Math.floor(nu1/nu2);
	var rresto = nu1 % nu2;
	soma.innerHTML = 'A soma é '+ rsoma +' !';
	sub1.innerHTML = 'A 1ª subtração é '+ rsub1 +' !';
	sub2.innerHTML = 'A 2ª subtração é '+ rsub2 +' !';
	prod.innerHTML = 'O produto é '+ rprod +' !';
	div1.innerHTML = 'A divisão é '+ rdiv1 +' !';
	quociente.innerHTML = 'O quociente é '+ rquo +' !';
	resto.innerHTML = 'O resto é '+ rresto +' !';
}