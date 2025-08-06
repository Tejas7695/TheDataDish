<script>
  const backToTop = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
</script>
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});