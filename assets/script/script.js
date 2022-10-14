const aviso = document.getElementById("areaAvisos");
let contato = [...document.getElementById("contatos").getElementsByTagName("a")];
const botaoGmail = document.getElementById("botaoGmail");
for(let x in contato){
	contato[x].onmouseover = () =>{
		if(x == 0){
			aviso.textContent = "Acesse meus repositórios.";
		}
		else if(x == 1){
			aviso.textContent = "Visualize meu perfil.";
		}
		else if(x == 2){
			aviso.textContent = "Envie-me uma mensagem.";
		};
	};
	contato[x].onmouseout = () =>{
		aviso.textContent = "";
	};
};
botaoGmail.addEventListener("mouseover", function(){
	aviso.textContent = "Clique para copiar o e-mail.";
	this.onclick = () =>{
		navigator.clipboard.writeText('bh45237@gmail.com');
		aviso.style.color = "#46A635";
		aviso.style.fontWeight = "bold";
		aviso.textContent = "E-mail copiado!";
	};
	this.onmouseout = () =>{
    		aviso.style.color = "";
    		aviso.style.fontWeight = "";
		aviso.textContent = "";
	};
});
const botaoEsquerda = document.getElementById("botaoEsquerda");
let conteudo = [...document.getElementById("areaConteudo").getElementsByTagName("section")];
let contador = 0;
function irParaPaginaInicial(){
	contador = 0;
	botaoEsquerda.style.visibility = "hidden";
	conteudo[contador].className = "";
	conteudo[contador+1].className = "desfoco";
	conteudo[contador+2].className = "desfoco";
};
botaoEsquerda.onclick = () =>{
	if(contador == 2){
		conteudo[contador].className = "desfoco";
		conteudo[contador-1].className = "";
		contador--;
	}else{
		irParaPaginaInicial();
	};
};
document.getElementById("botaoDireita").onclick = () =>{
	if(contador < 2){
		conteudo[contador].className = "desfoco";
		conteudo[contador+1].className = "";
    		botaoEsquerda.style.visibility = "visible";
		contador++;
	}else{
		irParaPaginaInicial();
	};
};
