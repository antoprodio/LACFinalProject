document.addEventListener('DOMContentLoaded', function() {
  
  const serviceTitles = document.querySelectorAll(".service-title");
  
  serviceTitles.forEach(title => {
    title.addEventListener("click", function() {
      const card = title.closest(".service-card");
      const extraText = card.querySelector(".extra-text");
      
      extraText.classList.toggle("hidden");
      extraText.classList.toggle("revealed");
    });
  });

  const faqItems = document.querySelectorAll(".faq-item");
  
  faqItems.forEach(item => {
    item.addEventListener("click", function() {
      const answer = item.querySelector(".faq-answer");
      answer.classList.toggle("hidden");
      answer.classList.toggle("revealed");
    });
  });

}); 