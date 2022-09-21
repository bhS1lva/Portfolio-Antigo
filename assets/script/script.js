window.location.hash = '';
function animarScroll(){
	const titulos = document.querySelectorAll(".titulo");
	const windowTop = window.pageYOffset+(window.innerHeight*0.6);
	titulos.forEach(function(elemento){
		if(windowTop > elemento.offsetTop){
			elemento.classList.add("animacao");
    };
  });
};
window.addEventListener("scroll", function(){
	animarScroll();	
});
const aviso = document.getElementById("avisoGmail");
const botao = document.getElementById("botaoGmail");
botao.addEventListener("mouseover", function(){
	aviso.style.visibility = "visible";
	botao.onclick = function(){
		aviso.style.backgroundColor = "#11a611";
		aviso.style.height = "30px";
		aviso.textContent  = "E-mail copiado!";
  		navigator.clipboard.writeText('bh45237@gmail.com');
	};
});
botao.addEventListener("mouseout", function(){
	aviso.style.visibility = "";
	aviso.style.backgroundColor = "";
	aviso.style.height = "";
	aviso.textContent = "Clique aqui para copiar o e-mail para a área de transferência (CTRL+V).";
});	