
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const toggle = item.querySelector(".faq-toggle");

    question.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";

        answer.style.display = isOpen ? "none" : "block";
        toggle.textContent = isOpen ? "+" : "-";
    });
});


