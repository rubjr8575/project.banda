/*
	Student Name: Ruben Banda
	File Name: script.js
	Date: 11/12/2023
*/

// Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}

/// Function to display a Bible verse
function displayVerse() {
    var verseText = "Philippians 4:13 - I Can Do All Things Through Christ Who Strengthens Me (NKJV)";
    var verseElement = document.getElementById("bibleVerse");
    verseElement.innerText = verseText;
    verseElement.style.color = "green";
    verseElement.style.fontSize = "1em";
	verseElement.style.textAlign = "center";
}