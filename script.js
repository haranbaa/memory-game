const cardsArray = [
    { name: 'image1', img: 'images/img1.jpg' },
    { name: 'image1', img: 'images/img1.jpg' },
    { name: 'image2', img: 'images/img2.jpg' },
    { name: 'image2', img: 'images/img2.jpg' },
    { name: 'image3', img: 'images/img3.jpg' },
    { name: 'image3', img: 'images/img3.jpg' },
    { name: 'image4', img: 'images/img4.jpg' },
    { name: 'image4', img: 'images/img4.jpg' },
    { name: 'image5', img: 'images/img5.jpg' },
    { name: 'image5', img: 'images/img5.jpg' },
    { name: 'image6', img: 'images/img6.jpg' },
    { name: 'image6', img: 'images/img6.jpg' },
    { name: 'image7', img: 'images/img7.jpg' },
    { name: 'image7', img: 'images/img7.jpg' },
    { name: 'image8', img: 'images/img8.jpg' },
    { name: 'image8', img: 'images/img8.jpg' },
    { name: 'image9', img: 'images/img9.jpg' },
    { name: 'image9', img: 'images/img9.jpg' },
    { name: 'image10', img: 'images/img10.jpg' },
    { name: 'image10', img: 'images/img10.jpg' },
];

let gameBoard = document.getElementById('gameBoard');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
    cardsArray.sort(() => 0.5 - Math.random()); 
    for (let i = 0; i < cardsArray.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.classList.add('flip');
    this.innerHTML = `<img src="${cardsArray[cardId].img}" alt="${cardsArray[cardId].name}">`;

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    let cards = document.querySelectorAll('.card');
    const [firstId, secondId] = cardsChosenId;
    if (cardsChosen[0] === cardsChosen[1] && firstId !== secondId) {
        cards[firstId].removeEventListener('click', flipCard);
        cards[secondId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[firstId].classList.remove('flip');
        cards[secondId].classList.remove('flip');
        cards[firstId].innerHTML = '';
        cards[secondId].innerHTML = '';
    }
    cardsChosen = [];
    cardsChosenId = [];

    if (cardsWon.length === cardsArray.length / 2) {
        alert('Congratulations! You found all the matches!');
    }
}

createBoard();
