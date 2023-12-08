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

const updateYear = function () {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
};

updateYear();
