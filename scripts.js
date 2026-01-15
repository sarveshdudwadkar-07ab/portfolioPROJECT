// Scroll reveal animation
const sections = document.querySelectorAll(".section");

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Make entire project cards clickable
const githubLink = "https://github.com/sarveshdudwadkar-07ab";

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    window.open(githubLink, "_blank");
  });
});
