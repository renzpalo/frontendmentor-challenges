
// NAVIGATION
const navigation = document.querySelector('.nav');
const hamburgerMenu = document.querySelector('.nav .nav-hamburger');

hamburgerMenu.addEventListener('click', (e) => {
  navigation.classList.toggle('nav-active');
});

const faqs = [
  {
    question: 'What is Bookmark?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
  },
  {
    question: 'How can I request a new browser?',
    answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
  },
  {
    question: 'What about other Chromium browsers?',
    answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
  }
];

// FAQS
const generateFaqs = () => {
  let faqItems = '';

  faqs.forEach((faq) => {
    faqItems += `<div class="faq">
                  <div class="faq__question">
                    <h5>${faq.question}</h5>
                    <img src="images/icon-arrow.svg" alt="Arrow Icon">
                  </div>
                  <p class="faq__answer">${faq.answer}</p>
                </div>`;
  });

  document.querySelector('#faq-section .faqs').innerHTML = faqItems;
};

generateFaqs();

// Expand and collapse FAQs
const faqElements = document.querySelectorAll('#faq-section .faqs .faq');

faqElements.forEach((faqElement) => {
  faqElement.addEventListener('click', (e) => {
    const faqAnswer = e.currentTarget;

    if(!faqAnswer.classList.contains('faq-active')) {
      collapseAllFaqs();

      faqAnswer.classList.add('faq-active');
    } else {
      faqAnswer.classList.remove('faq-active');
    }
  });
});

// Collapse all other faq accordions
const collapseAllFaqs = () => {
  faqElements.forEach((faqElement) => {
    faqElement.classList.remove('faq-active');
  });
};

// TABS > Features Tabs
const tabButtons = document.querySelectorAll('#features-section .features .tabs .tab-button');
const tabContents = document.querySelectorAll('#features-section .features .tab-contents .tab-content');

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', (e) => {
    tabButtons.forEach((tabButton) => {
      tabButton.classList.remove('tab-active');
    });
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('tab-active');
    });

    e.currentTarget.classList.add('tab-active');
    tabContents[index].classList.add('tab-active');
  });
});