lucide.createIcons();

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("page-loader").classList.add("hidden");
  }, 500);
});

document.body.classList.add("loading");

requestAnimationFrame(() => {
  document.getElementById("app").classList.add("ready");
});

window.addEventListener("load", () => {
  document.body.classList.remove("loading");
});
