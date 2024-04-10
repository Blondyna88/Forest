const burgerBtn = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const navItems = document.querySelectorAll(".nav__list-item");
const scrollSpySections = document.querySelectorAll(".section");


//navigation ------------------------------------------

const handleNav = () => {
	navList.classList.toggle("open");
	handleNavItemsAnimation();

	navItems.forEach(item => {
		item.addEventListener("click", resetAnimation);
	});
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	navItems.forEach(item => {
		item.classList.toggle("nav-items-animation");

		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

const resetAnimation = () => {
	navList.classList.remove("open");
	navItems.forEach(item => {
		item.classList.toggle("nav-items-animation");
	});
};

burgerBtn.addEventListener("click", handleNav);

