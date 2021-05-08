let isleOfWight = document.getElementById("isleofwight");
let isleOfWightLink = document.getElementById("isleofwight-link");
let graduate = document.getElementById("graduate");
let graduateLink = document.getElementById("graduate-link");
let spain = document.getElementById("spain");
let spainLink = document.getElementById("spain-link");
let cakes = document.getElementById("cakes");
let cakesLink = document.getElementById("cakes-link");
let beach = document.getElementById("beach");
let beachLink = document.getElementById("beach-link");
let swimming = document.getElementById("swimming");
let swimmingLink = document.getElementById("swimming-link");
let darkLayer = document.getElementById("dark-layer");

let photos = [isleOfWight, graduate, spain, cakes, beach, swimming];

function makeVisible(target) {
	target.style.display = "flex";
	darkLayer.style.display = "inline";
}

function makeInvisible() {
	darkLayer.style.display = "none";
	for (let i = 0; i < photos.length; i++) {
		if (photos[i].style.display == "flex") {
			photos[i].style.display = "none";
		}
	}
}

isleOfWightLink.onclick = function () {
	makeVisible(isleOfWight);
};

graduateLink.onclick = function () {
	makeVisible(graduate);
};

spainLink.onclick = function () {
	makeVisible(spain);
};

cakesLink.onclick = function () {
	makeVisible(cakes);
};

beachLink.onclick = function () {
	makeVisible(beach);
};

swimmingLink.onclick = function () {
	makeVisible(swimming);
};

darkLayer.onclick = function () {
	makeInvisible();
};
