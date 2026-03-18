(() => {
  const playground = document.getElementById("pet-playground");
  const canvas = document.getElementById("pixel-pet");

  if (!playground || !canvas) return;

  const context = canvas.getContext("2d");
  const petWidth = 32;
  const step = 16;

  let hasMoved = false;
  let direction = -1;
  let frame = 0;
  let x = 0;

  function syncPlayground() {
    if (!hasMoved) x = Math.max(0, playground.clientWidth - petWidth - 16);
    updatePosition();
    updateVisibility();
  }

  function drawPet() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();

    if (direction < 0) {
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
    }

    context.fillStyle = "#111827";
    context.fillRect(4, 6, 8, 5);
    context.fillRect(10, 3, 6, 6);
    context.fillRect(10, 1, 2, 3);
    context.fillRect(14, 1, 2, 3);
    context.fillRect(1, frame ? 5 : 4, 3, 2);
    context.fillRect(0, frame ? 3 : 2, 2, 3);

    if (frame === 0) {
      context.fillRect(5, 10, 2, 4);
      context.fillRect(10, 10, 2, 4);
    } else {
      context.fillRect(6, 10, 2, 4);
      context.fillRect(11, 10, 2, 4);
    }

    context.fillStyle = "#00A86B";
    context.fillRect(10, 6, 1, 3);

    context.fillStyle = "#FFC819";
    context.fillRect(13, 4, 1, 1);

    context.fillStyle = "#FF8A00";
    context.fillRect(15, 6, 1, 1);

    context.restore();
  }

  function updatePosition() {
    canvas.style.transform = `translate3d(${x}px, 0, 0)`;
  }

  function updateVisibility() {
    const width = playground.clientWidth;
    const visible = x > -petWidth && x < width;
    playground.classList.toggle("is-active", visible);
  }

  function movePet(nextDirection) {
    const width = playground.clientWidth;
    const hiddenDistance = Math.max(160, width * 0.4);
    hasMoved = true;

    direction = nextDirection;
    x += nextDirection * step;

    if (x > width + hiddenDistance) {
      x = -petWidth;
    } else if (x < -petWidth - hiddenDistance) {
      x = width;
    }

    frame = frame === 0 ? 1 : 0;
    drawPet();
    updatePosition();
    updateVisibility();
  }

  window.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.target instanceof Element && event.target.matches("input, textarea, select, button, [contenteditable='true']")) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      movePet(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      movePet(1);
    }
  });

  window.addEventListener("resize", syncPlayground);
  syncPlayground();
  drawPet();
})();
