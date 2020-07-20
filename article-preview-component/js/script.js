
const cardAuthor = document.querySelector('.card-author');
const cardAuthorTexts = document.querySelector('.card-author-texts');

const cardShareLinks = document.querySelector('.card-share-links');

const shareButton = document.querySelector('.card-share-button');


shareButton.addEventListener('mouseover', () => {
    cardAuthor.style.backgroundColor = 'hsl(217, 19%, 35%)';
    cardAuthorTexts.style.display = 'none';
    cardShareLinks.style.display = 'flex';
});

shareButton.addEventListener('mouseout', () => {
    cardAuthor.style.backgroundColor = '#FFF';
    cardAuthorTexts.style.display = 'flex';
    cardShareLinks.style.display = 'none';
});