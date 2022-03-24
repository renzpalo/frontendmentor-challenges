

const faqList = document.querySelector('.faq-list');

const faqs = Array(
    ["How many team members can I invite?" , "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."],
    ["What is the maximum file upload size?" , "No more than 2GB. All files in your account must fit your allotted storage space."],
    ["How do I reset my password?" , "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."],
    ["Can I cancel my subscription?" , "Yes! Send us a message and we’ll process your request no questions asked."],
    ["Do you provide additional support?" , "Chat and email support is available 24/7. Phone lines areopen during normal business hours."]
);

// Generate FAQs
const generateQuestions = () => {
    let questionHtml;

    if(faqs !== null) {
        faqs.forEach((faq, index) => {
            questionHtml = `<div class="faq-item" id="faq-${index}">
                                <div class="faq-question">
                                    <h4>${faq[0]}</h4>
                                    <span class="faq-dropdown"></span>
                                </div>
                                <div class="faq-answer">
                                    <p>${faq[1]}</p>
                                </div>
                            </div>`;

            faqList.insertAdjacentHTML('beforeend', questionHtml);  
        });
    }
};

generateQuestions();

const faqItem = document.querySelector(".faq-list");

faqItem.addEventListener('click', (e) => {

    let targetQuestion;

    if(e.target.parentElement.className == 'faq-question') {
        targetQuestion = e.target.parentNode.parentNode.id;
    } else if(e.target.parentElement.className == 'faq-item') {
        targetQuestion = e.target.parentNode.id;
    } else {
        targetQuestion = null;
    }

    if(targetQuestion) {
        const faqAnswer = document.querySelector('#' + targetQuestion + ' .faq-answer');

        faqAnswer.parentNode.classList.toggle('faq-active');
    }
});