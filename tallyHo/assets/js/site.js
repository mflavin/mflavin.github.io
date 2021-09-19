(async () => {
	// Register service worker
	if ('serviceWorker' in navigator)
		navigator.serviceWorker.register('serviceWorker.js')
			.then(() => console.log('Service Worker Registered'))
			.catch((e) => console.log('idk error ', e));

	// Set menu tabs for food sections
	const sections = {
		"ids": ['appetizers', 'favorites', 'soups']
	}
	document.getElementById('menu').innerHTML = tmpl('menu-tmpl', sections);

	// Get menu data from json files
	const getMenuData = async (section) => {
		const menuData = await fetch(`./assets/js/menu/${section}.json`);
		const data = await menuData.json();
		document.getElementById(section).innerHTML = tmpl('item-card-tmpl', data);
	};
		// Template data for Appetizers
	await getMenuData('appetizers');

	// Template data for Favorites
	await getMenuData('favorites');

	// Template data for Soup, Salad, & Sandwiches
	await getMenuData('soups');
})();
