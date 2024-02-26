const button = document.querySelector("button");

button.addEventListener("click", () => {
	let body = document.body;
	let existingShow = document.getElementById("showDiv");
	if (existingShow) {
		body.removeChild(existingShow);
	}
	let choice = generateNumber(1, 5);
	const show = document.createElement("div");
	show.id = "showDiv";
	show.style.cssText =
		"color: white; font-size: 5rem; font-weight: 500; text-align: center; padding: 2rem";
	if (choice === 1) {
		show.textContent = "It's so over..";
	} else if (choice === 2) {
		show.textContent = "We're so back.";
	} else if (choice === 3) {
		show.textContent = "It's so unbelievably over..";
	} else if (choice == 4) {
		show.textContent = "We're so so so back";
	} else if (choice === 5) {
		show.textContent = "Over status unknown.. you might be lost in the sauce";
	}
	body.appendChild(show);
	button.innerHTML = "&#x21bb";
});

function generateNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
