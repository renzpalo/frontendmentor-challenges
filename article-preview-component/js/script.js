
const cardAuthor = document.querySelector('.card-author');
const cardAuthorTexts = document.querySelector('.card-author-texts');

const cardShareLinks = document.querySelector('.card-share-links');

const shareButton = document.querySelector('.card-share-button');


shareButton.addEventListener('click', () => {
    if(cardAuthorTexts.style.display == 'flex' || cardAuthorTexts.style.display == '') {
        cardAuthor.style.backgroundColor = 'hsl(217, 19%, 35%)';
        cardAuthorTexts.style.display = 'none';
        cardShareLinks.style.display = 'flex';
    } else if(cardAuthorTexts.style.display == 'none') {
        cardAuthor.style.backgroundColor = '#FFF';
        cardAuthorTexts.style.display = 'flex';
        cardShareLinks.style.display = 'none';
    }
});