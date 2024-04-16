let btn = document.querySelector('.fa-eye')

btn.addEventListener('click' , () => {
let inputSenha = document.querySelector('#senha')
if(inputSenha.getAttribute('type') == 'password'){
				inputSenha.setAttribute('type', 'text')
}else{
				inputSenha.setAttribute('type',  'password')
}
})
let btnconfirm = document.querySelector('#confirmsenha')
btnconfirm.addEventListener('click', () =>{
let inputconfirmsenha = document.querySelector('#confirmasenha')
if(inputconfirmsenha.getAttribute('type')=='password'){inputconfirmsenha.setAttribute('type', 'text')}else{
				inputconfirmsenha.setAttribute('type', 'password')}
})
