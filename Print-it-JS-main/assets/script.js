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

// Ajout des listener sur les flèches
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click" , slideChangeLeft );
function slideChangeLeft() {
	alert(slideChangeLeft);
}

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click" , slideChangeRight);
function slideChangeRight() {
	alert(slideChangeRight);
}

// Affichage des points du Slide
const dotsSlide = document.querySelector(".dots");

slides.forEach( (slide, index) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsSlide.appendChild(dot);

	if ( index === 0 ) {
		dot.classList.add("dot_selected");
	}
} );