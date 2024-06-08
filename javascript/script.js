let email = document.getElementById('email')
let form = document.getElementById('fiilho')
let password = document.getElementById('password')
let textForm = document.getElementById('textForm')

form.addEventListener('submit', (e) => {
    if(email.value == '' && password.value == '') {
        textForm.textContent = 'Você precisa preencher todos os campos!'
    }
    e.preventDefault()
})
