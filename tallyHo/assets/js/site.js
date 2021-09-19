(async () => {
	// Register service worker
	if ('serviceWorker' in navigator)
		navigator.serviceWorker.register('serviceWorker.js')
			.then(() => console.log('Service Worker Registered'))
			.catch((e) => console.log('idk error ', e));

	// Get Menu data
	const menuData = await fetch('./assets/js/menu.json');
	const data = await menuData.json();
	// Template data for Appetizers
	const appetizersData = data.find(m => m.title === 'Appetizers');
	document.getElementById('Appetizers').innerHTML = tmpl('item-card-tmpl', appetizersData);

	// Template data for Favorites
	const favoritesData = data.find(m => m.title === 'Favorites');
	document.getElementById('Favorites').innerHTML = tmpl('item-card-tmpl', favoritesData);

	// Template data for Salads
	const saladsData = data.find(m => m.title === 'Salads');
	document.getElementById('Salads').innerHTML = tmpl('item-card-tmpl', saladsData);

	// Template data for Steaks
	const steaksData = data.find(m => m.title === 'Steaks');
	document.getElementById('Steaks').innerHTML = tmpl('item-card-tmpl', steaksData);

	// Template data for Country
	const countryData = data.find(m => m.title === 'Country');
	document.getElementById('Country').innerHTML = tmpl('item-card-tmpl', countryData);
})();
