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

/* Set Current Year */
const updateYear = function () {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
};

/* Make mobile Navigation functional */
const toggleMobileNavMenu = function () {
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const HeaderEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", () =>
    HeaderEl.classList.toggle("nav-open")
  );
};

/* Smooth scrolling */

const smoothScrolling = function () {
  const allLinks = document.querySelectorAll("a:link");
  allLinks.forEach((link) =>
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = e.target.closest("a:link");

      if (!target) return;

      const href = target.getAttribute("href");
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      /**Scroll to other links */
      if (href != "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({
          behavior: "smooth",
        });
      }

      const HeaderEl = document.querySelector(".header");
      /**Close mobile Navigation */
      if (target.classList.contains("main-nav-link"))
        HeaderEl.classList.toggle("nav-open");
    })
  );
};

/**Sticky Navigation */

const stickyNav = function () {
  const sectionHeroEl = document.querySelector(".section-hero");

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      }

      if (ent.isIntersecting) {
        document.body.classList.remove("sticky");
      }
    },
    {
      //In the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  obs.observe(sectionHeroEl);
};

const init = function () {
  updateYear();
  toggleMobileNavMenu();
  smoothScrolling();
  stickyNav();
};

init();
