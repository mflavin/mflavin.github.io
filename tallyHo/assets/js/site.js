(async () => {
	try {
		const d = await fetch('./assets/js/employees.json');
		console.log('d', d);
		const data = await d.json()
		console.log('data', data);
	} catch (e) {
		console.log('error , ', e);
	}

	// Register service worker
	if ('serviceWorker' in navigator)
		navigator.serviceWorker.register('serviceWorker.js')
			.then(() => console.log('Service Worker Registered'))
			.catch((e) => console.log('idk error ', e));


	// Template data for Appetizers
	const appetizersData = {
	  title: 'Appetizers',
	  menu: [
			{
				name: 'Nachos',
				description: 'Homemade torilla chips topped with choice of beef or chicken, onion, tamato, and shredded cheese. Served with salsa and sour cream on the side.',
				price: '14.00'
			},
		]
	};
	document.getElementById('Appetizers').innerHTML = tmpl('item-card-tmpl', appetizersData);

	// Template data for Favorites
	const favoritesData = {
	  title: 'Favorites',
	  menu: [
			{
				name: 'Nachos',
				description: 'Homemade torilla chips topped with choice of beef or chicken, onion, tamato, and shredded cheese. Served with salsa and sour cream on the side.',
				price: '14.00'
			},
		]
	};
	document.getElementById('Favorites').innerHTML = tmpl('item-card-tmpl', favoritesData);

	// Template data for Salads
	const saladsData = {
		title: 'Salads',
		menu: [
			{
				name: 'Nachos',
				description: 'Homemade torilla chips topped with choice of beef or chicken, onion, tamato, and shredded cheese. Served with salsa and sour cream on the side.',
				price: '14.00'
			},
		]
	};
	document.getElementById('Salads').innerHTML = tmpl('item-card-tmpl', saladsData);

	// Template data for Steaks
	const steaksData = {
		title: 'Steaks',
		menu: [
			{
				name: 'Nachos',
				description: 'Homemade torilla chips topped with choice of beef or chicken, onion, tamato, and shredded cheese. Served with salsa and sour cream on the side.',
				price: '14.00'
			},
		]
	};
	document.getElementById('Steaks').innerHTML = tmpl('item-card-tmpl', steaksData);

	// Template data for Country
	const countryData = {
		title: 'Country',
		menu: [
			{
				name: 'Nachos',
				description: 'Homemade torilla chips topped with choice of beef or chicken, onion, tamato, and shredded cheese. Served with salsa and sour cream on the side.',
				price: '14.00'
			},
		]
	};
	document.getElementById('Country').innerHTML = tmpl('item-card-tmpl', countryData);
})();
