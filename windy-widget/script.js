// Windy API initialization options
const options = {
    key: 'rLrOgP3SCi2u9Q8mZHF9ftvI8TiggHOI',  // Replace with your API key
    verbose: true,              // Optional: log info
    lat: 4.5353,                // Brunei latitude
    lon: 114.7277,              // Brunei longitude
    zoom: 9,                    // Initial zoom level
};

// Initialize Windy
windyInit(options, windyAPI => {
    const { map, picker } = windyAPI;

});
