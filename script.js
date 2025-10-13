function calculateSettingAsThemeString({ localStorageTheme, systemSettingLight }) {
	if (localStorageTheme != null) {
		return localStorageTheme
	}

	if (systemSettingLight.matches) {
		return "light";
	}

	return "dark";
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingLight });

const theme_img = document.querySelector(".theme");

theme_img.addEventListener("click", () => {
	const newTheme = currentThemeSetting === "light" ? "dark" : "light";

	const toggle = newTheme === "light" ? "dark" : "light";
	const src = `assets/${toggle}_mode.svg`

	theme_img.setAttribute("src", src);

	document.querySelector("html").setAttribute("data-theme", newTheme);

	localStorage.setItem("theme", newTheme);

	currentThemeSetting = newTheme;
})


const hamburger = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".offscreen-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	offScreenMenu.classList.toggle("active");
});
