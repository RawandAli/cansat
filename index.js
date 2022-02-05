window.addEventListener("scroll", reveal);
function reveal() {
  const allReveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < allReveals.length; i++) {
    const windowHeight = window.innerHeight;
    const appearHeight = 100;
    if (allReveals[i].getBoundingClientRect().top < windowHeight - 100) {
      allReveals[i].classList.add("active");
    }
    else {
      allReveals[i].classList.remove("active");
    }
  }
}
