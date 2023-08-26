const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Elements du DOM pour le caroussel
const caroussel = document.querySelectorAll("#banner .banner-img");

// index de la slide courrante
let currentSlideIndex = 0;

// Fonction pour modifier le slide
function carousselSlideChange(index) {

	// boucle pour récupérer toutes les slides
	caroussel.forEach((image, i) => {
		image.src = `./assets/images/slideshow/${slides[index].image}`;
	});

	// Modification du texte 
	const tagLine = document.querySelector('#banner p');
	tagLine.innerHTML = slides[index].tagLine;

	// Modufication des points du slide
	const dots = document.querySelectorAll('#banner .dots .dot');
	dots.forEach((dot, i) => {
	  // Ajout de la classe dot_selected pour le point correspondant à la slide courrante
	  if (i === index) {
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
	});

}

// Fonction pour changer les slides à l'infini
function slidesChanges(sens) {
	
	if (sens === "right") {
		currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	}
	
	if ( sens === "left") {
		currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	}

	carousselSlideChange(currentSlideIndex);
}


// Ajout des listener sur les flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click" , () => {
	slidesChanges("left");
} );

arrowRight.addEventListener("click" , () => {
	slidesChanges("right")
} );

// Affichage de la div des points du Slide
const dotsSlide = document.querySelector(".dots");

slides.forEach( (slide, index) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsSlide.appendChild(dot);

	if ( index === 0 ) {
		dot.classList.add("dot_selected");
	}
} );

// Récupération de tous les points du slide
const dots = document.querySelectorAll("#banner .dots .dot");
dots.forEach((dot, index) => {
  // Ajout des listener sur les points
  dot.addEventListener("click", () => {
    // en fonction de l'index du point cliqué
    currentSlideIndex = index;
    carousselSlideChange(currentSlideIndex);
  });
});