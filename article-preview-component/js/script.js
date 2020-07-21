

const cardAuthorTexts = document.querySelector('.card-author-texts');
const cardShare = document.querySelector('.card-share');
const cardShareLinks = document.querySelector('.card-share-links');

const shareButton = document.querySelector('.card-share-button');

console.log(cardShareLinks.style.visibility);
shareButton.addEventListener('click', () => {
    if(cardShareLinks.style.visibility == 'hidden' || cardShareLinks.style.visibility == '') {
        cardShareLinks.style.visibility = 'visible';
    } else if(cardShareLinks.style.visibility == 'visible') {
        cardShareLinks.style.visibility = 'hidden';
    }
    console.log(cardShareLinks.style.visibility);
});