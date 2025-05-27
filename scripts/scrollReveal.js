export default function initScrollReveal(targets, config) {
  if (typeof ScrollReveal === 'undefined') {
    console.warn("ScrollReveal is not loaded.");
    return;
  }
  ScrollReveal().reveal(targets, config);
}
