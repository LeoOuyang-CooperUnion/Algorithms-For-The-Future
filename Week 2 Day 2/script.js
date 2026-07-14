let deckID = null 

async function fetchAPI() {
    try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        deckID = data.deck_id
        return deckID
    } catch (error) {
        console.log(error)
    }
}


async function drawCard() {
    if (!deckID) {
        console.log('Deck ID is not set. Please fetch the deck first.')
        return
    }
    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        return data 
    } catch (error) {
        console.log(error)
    }
}

const container = document.getElementById('container')

function renderCard(data) {
    if (!data || !data.cards || !data.cards[0]) return
    const image = document.createElement('img')
    image.src = data.cards[0].image
    image.alt = data.cards[0].code
    image.classList.add('card-image')
    container.appendChild(image) // appends image inside the container div
} 

const drawButton = document.getElementById('draw')
const resetButton = document.getElementById('reset')

drawButton.addEventListener('click', async () => {
    await fetchAPI()
    const cardData = await drawCard() // waits and fetches the promise from the drawCard function and stores it in the variable cardData
    if (cardData) renderCard(cardData)
})

resetButton.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild) // removes all child elements from the container
    }
})
