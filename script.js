// =========================== Navbar =======================
const navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("show-bg");
  } else if (window.scrollY < 56) {
    navEl.classList.remove("show-bg");
  }
});

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar-collapse a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".navbar-collapse a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ===================== google maps js =======================
function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(37.830047, 30.527091),
      zoom: 14,
    };
    var map = new google.maps.Map(document.getElementById("googleMaps"), mapProp); 
  }