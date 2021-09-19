(async () => {
	// Register service worker
	if ('serviceWorker' in navigator)
		navigator.serviceWorker.register('serviceWorker.js')
			.then(() => console.log('Service Worker Registered'))
			.catch((e) => console.log('idk error ', e));

	const getMenuData = (section) => {
		const menuData = await fetch(`./assets/js/menu/${section}.json`);
		const data = await menuData.json();
		document.getElementById(section).innerHTML = tmpl('item-card-tmpl', data);
	};
		// Template data for Appetizers
	getMenuData('appetizers');

	// Template data for Favorites
	getMenuData('favorites');

	// Template data for Soup, Salad, & Sandwiches
	getMenuData('soups');

	// Set menu tabs for food sections
	document.getElementById('menu').innerHTML = tmpl('menu-tmpl', ['appetizers', 'favorites', 'soups']);
})();
