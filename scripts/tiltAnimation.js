export default function initTiltEffect() {
  if (typeof VanillaTilt === 'undefined') {
    console.warn("VanillaTilt is not loaded.");
    return;
  }

  VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
    max: 4,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  });
}
