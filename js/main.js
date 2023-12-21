window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-80px";
  }
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};
