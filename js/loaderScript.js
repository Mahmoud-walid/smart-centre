document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    loader.style.display = "none";
  }, 4000);
});
