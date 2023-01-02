// =========================== Navbar =======================
const navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("show-bg");
  } else if (window.scrollY < 56) {
    navEl.classList.remove("show-bg");
  }
});

const currentLocation = location.href;
const menuItem = document.querySelectorAll(".nav-link");
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].classList.add("active-link");
  }
}


// ===================== google maps js =======================
function initMap() {
  var uluru = {
    lat: 37.830047,
    lng: 30.527091,
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
google.maps.event.addDomListener(window, "load", initMap);
