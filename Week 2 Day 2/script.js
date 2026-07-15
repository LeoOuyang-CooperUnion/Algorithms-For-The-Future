let deckID = null;
const container = document.getElementById('container');

async function OpenDeck() {
    try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        deckID = data.deck_id;
        return deckID;
    } catch (error) {
        console.error('Error fetching deck:', error);
    }
}

async function ensureDeck() {
    if (!deckID) {
        await OpenDeck();
    }
    return deckID;
}

async function drawCard() {
    const currentDeckID = await ensureDeck();

    if (!currentDeckID) {
        console.log("Deck ID isn't set. Please fetch the deck first.");
        return;
    }

    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${currentDeckID}/draw/?count=1`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.success) {
            renderCard(data);
        }
        return data;
    } catch (error) {
        console.error('Error drawing card:', error);
    }
}

async function shuffleDeck() {
    const currentDeckID = await ensureDeck();

    if (!currentDeckID) {
        return;
    }

    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${currentDeckID}/shuffle/?remaining=true`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error shuffling deck:', error);
    }
}

async function createNewDeck() {
    clearContainer();
    await OpenDeck();
    return deckID;
}

function renderCard(data) {
    if (!data || !data.cards || !data.cards[0]) return;

    const image = document.createElement('img');
    image.src = data.cards[0].image;
    image.alt = data.cards[0].code;
    image.classList.add('card-image');
    container.appendChild(image);
}

function clearContainer() {
    if (container) {
        container.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const drawButton = document.getElementById('draw');
    const resetButton = document.getElementById('reset');
    const shuffleButton = document.getElementById('shuffle all');
    const newDeckButton = document.getElementById('new deck');

    if (drawButton) {
        drawButton.addEventListener('click', async () => {
            await drawCard();
        });
    }

    if (resetButton) {
        resetButton.addEventListener('click', async () => {
            await createNewDeck();
        });
    }

    if (shuffleButton) {
        shuffleButton.addEventListener('click', async () => {
            await shuffleDeck();
        });
    }

    if (newDeckButton) {
        newDeckButton.addEventListener('click', async () => {
            await createNewDeck();
        });
    }

    await OpenDeck();
});