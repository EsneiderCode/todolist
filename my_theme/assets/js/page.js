let indice = 1;
muestraSlides(indice);
function avanzaSlide(n) {
  muestraSlides((indice += n));
}
// setInterval(function tiempo(){
//     muestraSlides(indice+=1)
// },4000);
function muestraSlides(n) {
  let i;
  let slides = document.getElementsByClassName("miSlider");
  let barras = document.getElementsByClassName("barra");
  if (n > slides.length) {
    indice = 1;
  }
  if (n < 1) {
    indice = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < barras.length; i++) {
    barras[i].className = barras[i].className.replace(" active", "");
  }
  slides[indice - 1].style.display = "block";
  barras[indice - 1].className += " active";
}

// Share functionality
const shareButton = document.querySelector(".share-bottom");
shareButton.addEventListener("click", (e) => {
  e.preventDefault();
  const shareOptions = document.querySelector(".share-options");
  shareOptions.style.display = "block";
});

clicks = 0;
function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}
