const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const errorText = document.querySelector('small')

form.addEventListener('submit', (eve) => {
    eve.preventDefault()
    const inputText = input.value.trim()
    if (inputText.length) {
        ul.innerHTML += `<li>${inputText}</li>`
        input.value = ''
        input.classList.add('success')
        setTimeout(() => {
            input.classList.remove('success')
        }, 2500)
    } else {
        errorText.textContent = 'Iltimos nimadir yozing...'
        input.classList.add('error')
        setTimeout(() => {
            input.classList.remove('error')
            errorText.textContent = ''
        }, 2500)
    }
})