/* =========================
   ICON INIT
   ========================= */

if (window.lucide) {
  lucide.createIcons();
}

/* =========================
   DEBUG
   ========================= */

console.log("App JS loaded");

/* =========================
   APP SHELL READY
   ========================= */

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const loader = document.getElementById("loader");

  if (app) app.classList.add("ready");
  if (loader) loader.classList.add("hide");

  document.body.classList.remove("loading");
});
