const input = document.querySelector('input')
const submitButton = document.querySelector('[data-submit]')

async function getData(city) {
    const weatherApiKey = '171cf5d4089515d60f4d9082438dd510'
    const giphyApiKey = 'BlVRxPQsFmQQPQQNeQ0kKmEsq366A9GU'

    const weatherAPI = `api.openweathermap.org/data/2.5/weather?appid=${weatherApiKey}&q=${city}`
    const giphySearchAPI = `api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=clouds ${city}`

    const weatherResult = await fetch(`http://${weatherAPI}`, { mode: 'cors' })
    const weatherResponseJSON = await weatherResult.json()

    const giphyResult = await fetch(`http://${giphySearchAPI}`, {mode: 'cors'})
    const giphyResponseJSON = await giphyResult.json()

    const body = document.querySelector('body')
    const section = document.querySelector('section')
    const list = document.querySelector('dl')
    // const dd = list.querySelectorAll('dd')

    console.log(weatherResponseJSON);

    for (let [key, value] of Object.entries(weatherResponseJSON.main)) {
        let dd = document.querySelector(`#${key}`)
        dd.textContent = value
    }

    list.style.display = 'initial'
    section.style.display = 'none'

    console.log(giphyResponseJSON);

    body.style.backgroundImage = `url('${giphyResponseJSON.data[0].images.original.url}')`
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundSize = 'cover'
}

submitButton.addEventListener('click', () => {getData(input.value)})