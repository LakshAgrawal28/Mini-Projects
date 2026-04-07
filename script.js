document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");

  // Force show hero content regardless of observer if it's in the initial viewport
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) heroContent.classList.add("is-visible");

  if (!prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    revealItems.forEach((item, index) => {
      // Don't delay the hero items, they should be instant
      if (!item.closest('.hero')) {
        item.style.transitionDelay = `${(index % 3) * 100}ms`;
      }
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });
  }
});
