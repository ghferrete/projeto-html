let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validnome = false

let usuario = document.querySelector('#usuario')
let labelusuario = document.querySelector('#labelusuario')
let validusuario = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')
let validsenha = false

let confirmasenha = document.querySelector('#confirmasenha')
let labelconfirmasenha = document.querySelector('#labelconfirmasenha')
let validconfirmasenha = false

let sucesso = document.querySelector('#sucesso')
let erro = document.querySelector('#erro')


nome.addEventListener('keyup', () =>{
				if(nome.value.length <= 2){
								labelnome.setAttribute('style', 'color: red')
								labelnome.innerHTML ='Nome*Por favor insira nome compativel'
								nome.setAttribute('style', 'border-color: red')
								validnome = false
				} else {
								labelnome.setAttribute('style', 'color: #00ffa0')
								labelnome.innerHTML ='Nome'
								nome.setAttribute('style', 'border-color: #00ffa0')
								validnome = true
				}
})
usuario.addEventListener('keyup', () =>{
				if(usuario.value.length <=4){
								labelusuario.setAttribute('style', 'color: red')
								labelusuario.innerHTML ='Usuario*Por favor, insira um usuario valido'
								usuario.setAttribute('style', 'border-color: red')
								validusuario = false
				} else {
								labelusuario.setAttribute('style', 'color: #00ffa0')
								labelusuario.innerHTML ='Nome'
								usuario.setAttribute('style', 'border-color: #00ffa0')
								validusuario = true
				}
})
senha.addEventListener('keyup',() =>{
				if(senha.value.length <=5){
								labelsenha.setAttribute('style', 'color: red')
								labelsenha.innerHTML = 'Senha* Insira ao menos 6 caractere'
								senha.setAttribute('style', 'border-color: red')
								validsenha = false
				} else{
								labelsenha.setAttribute('style', 'color: #00ffa0')
								labelsenha.innerHTML ='Senha'
								senha.setAttribute('style', 'border-color: #00ffa0')
								validsenha = true
				}
})
confirmasenha.addEventListener('keyup', () =>{
				if(confirmasenha.value.length <= 2){
								labelconfirmasenha.setAttribute('style', 'color: red')
								labelconfirmasenha.innerHTML ='Nome*Por favor insira nome compativel'
								confirmasenha.setAttribute('style', 'border-color: red')
								validconfirmasenha = false
				} else {
								labelconfirmasenha.setAttribute('style', 'color: #00ffa0')
								labelconfirmasenha.innerHTML ='Nome'
								confirmasenha.setAttribute('style', 'border-color: #00ffa0')
								validconfirmasenha = true
				}
})


function cadastrar() {
if(validnome&&validusuario&&validsenha&& validconfirmasenha){
				alert('cadastrado')
} else {
	alert('erro')
}
})