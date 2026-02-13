lucide.createIcons();

console.log("Hello, World!");

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("app").classList.add("ready");
  document.getElementById("loader").classList.add("hide");
  document.body.classList.remove("loading");
});
