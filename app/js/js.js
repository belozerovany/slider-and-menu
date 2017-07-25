function handler() {
	var menu = document.querySelector('.mobile__menu');
	function openMenu(){
		var mobileMenu = document.querySelector('.mobile-menu');
		console.log('mobileMenu',mobileMenu);
		mobileMenu.classList.toggle('mobile-menu__block');

	}

	menu.addEventListener('click',openMenu);
}
document.addEventListener('DOMContentLoaded',handler);