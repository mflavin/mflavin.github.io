(function () {
  $('#search').click(function () {
    $('#load').empty();
    initMap();
  });

  $('.close').click(function () {
    $('figure').fadeOut();
  });

  // Simulates getting geolocation and finding places
  function initMap() {
    // Mock geolocation data
    var geolocation = {
      lat: 1,
      lng: 1,
    };
    // Simulate async geolocation
    setTimeout(function () {
      findThem(geolocation);
    }, 500);
  }

  // Uses mock dat
  function findThem(geolocation) {
    // Mock search type
    var searchFor = ['bar'];
    // Simulate async search for each type
    for (var sf in searchFor) {
      setTimeout(function () {
        callback(mockResults(), 'OK');
      }, 500);
    }
  }

  // Mock callback with fake results
  function callback(results, status) {
    if (status === 'OK') {
      for (var x = 0; x < Math.min(10, results.length); x++) {
        $('#load').append($('<li>' + results[x].name + '</li>'));
      }
      $('figure').fadeIn();
    }
  }

  // Generates mock place results since api is no longer available
  function mockResults() {
    return [
      { name: 'Noon Whistle Brewing' },
      { name: 'Tapville Social' },
      { name: "Maria's Packaged Goods and Community Bar" },
      { name: 'Hook and Ladder' },
      { name: 'Bottom Lounge' },
      { name: "Miller's Ale House" },
      { name: "Kumo's Corner" },
    ];
  }
})();
