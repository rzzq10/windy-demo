// Windy API options
const options = {
    key: "rLrOgP3SCi2u9Q8mZHF9ftvI8TiggHOI", // <-- replace with your actual Windy API key
    verbose: true,
    lat: 4.9031,   // Brunei latitude
    lon: 114.9398, // Brunei longitude
    zoom: 7
};

// Initialize Windy map
windyInit(options, windyAPI => {
    const { map } = windyAPI;

    // Example: popup at the center
    L.popup()
        .setLatLng([options.lat, options.lon])
        .setContent("Hello from Windy Map!")
        .openOn(map);
});
