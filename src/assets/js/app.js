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

// lucide.createIcons();

// /* ---------- soft app settle ---------- */

// requestAnimationFrame(() => {
//   document.getElementById("app").classList.add("ready");
// });

// window.addEventListener("load", () => {
//   document.body.classList.remove("loading");
//   document.getElementById("loader").classList.add("hide");
// });

// /* ---------- router ---------- */

// const page = document.getElementById("page");

// const routes = {
//   home: renderHome,
//   blog: renderBlog,
//   product: renderProduct,
//   contact: renderContact,
// };

// document.querySelectorAll("[data-view]").forEach((a) => {
//   a.onclick = (e) => {
//     e.preventDefault();
//     navigate(a.dataset.view);
//   };
// });

// async function navigate(view) {
//   page.classList.remove("active");
//   await delay(180);
//   await routes[view]();
//   page.classList.add("active");
// }

// const delay = (ms) => new Promise((r) => setTimeout(r, ms));

// /* ---------- views ---------- */

// function renderHome() {
//   page.innerHTML = `
//   <section class="grid-2">
//     <div>
//       <h1>Kruiden & Regulatie</h1>
//       <p>Botanische kennis — ECS — herstel.</p>
//     </div>
//     <div class="skeleton"></div>
//   </section>`;
// }

// function renderBlog() {
//   page.innerHTML = `
//   <article class="blog">
//     <h1>Markdown Blog Titel</h1>
//     <p>Longform leesweergave zoals Substack.</p>
//     <p>Rustige typografie, geen ruis, boekgevoel.</p>
//   </article>`;
// }

// function renderProduct() {
//   page.innerHTML = `
//   <section class="grid-2">
//     <div class="card">
//       <h2>CBD Zalf</h2>
//       <p>Recept + berekening</p>
//     </div>

//     <div class="card">
//       <label>CBD mg</label>
//       <input id="mg" type="number">

//       <label>Gram totaal</label>
//       <input id="g" type="number">

//       <button onclick="calc()">Bereken</button>

//       <div id="out"></div>
//     </div>
//   </section>`;
// }

// function calc() {
//   out.innerText = (mg.value / g.value).toFixed(1) + " mg/g";
// }

// function renderContact() {
//   page.innerHTML = `
//   <section class="grid-2">
//     <div>
//       <h2>Contact</h2>
//       <p>Vragen over kruiden of recepten.</p>
//     </div>

//     <form class="card">
//       <label>Naam</label>
//       <input>

//       <label>Email</label>
//       <input>

//       <label>Bericht</label>
//       <textarea rows="4"></textarea>

//       <button>Verzend</button>
//     </form>
//   </section>`;
// }

// /* ---------- start ---------- */

// navigate("home");
