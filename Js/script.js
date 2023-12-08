/**Fixing flexbox gap property missing in some safari versions */

function checkFlexGap() {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flex-gap");
}

checkFlexGap();

//https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/**Set Current Year */
const updateYear = function () {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
};

/**Make mobile Navigation functional */
const toggleMobileNavMenu = function () {
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const HeaderEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", () =>
    HeaderEl.classList.toggle("nav-open")
  );
};

const init = function () {
  updateYear();
  toggleMobileNavMenu();
};

init();
