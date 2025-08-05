<script>
  const words = [
    "Turn Your Restaurant Data Into Profit",
    "Track Sales. Slash Waste. Boost Revenue.",
    "The Data Dish: Analytics for Real Growth"
  ];

  let i = 0;
  let j = 0;
  let currentWord = '';
  let isDeleting = false;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 2000;

  const typewriterElement = document.getElementById("typewriter-text");

  function type() {
    currentWord = words[i];

    if (!isDeleting && j <= currentWord.length) {
      typewriterElement.innerHTML = currentWord.slice(0, j++);
      setTimeout(type, typeSpeed);
    } else if (isDeleting && j >= 0) {
      typewriterElement.innerHTML = currentWord.slice(0, j--);
      setTimeout(type, deleteSpeed);
    } else if (j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, pauseTime);
    } else if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", type);
</script>