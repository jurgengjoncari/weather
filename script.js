const input = document.querySelector('input')
const submitButton = document.querySelector('[data-submit]')

async function getData(city) {
    const apiKey = '171cf5d4089515d60f4d9082438dd510'
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`

    const response = await fetch(API, { mode: 'cors' })
    const responseJSON = await response.json()

    return responseJSON.main
}


const section = document.querySelector('section')
const list = document.querySelector('dl')
const dd = list.querySelectorAll('dd')

submitButton.addEventListener('click', async function () {
    const response = await getData(input.value)
    for (let [key, value] of Object.entries(response)) {
        for (let d of dd) {
            if (d.id == key) {
                d.textContent = value
            }
        }
    }
    list.style.display = 'initial'
    section.style.display = 'none'
})