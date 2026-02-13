lucide.createIcons();

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("page-loader").classList.add("hidden");
  }, 500);
});
