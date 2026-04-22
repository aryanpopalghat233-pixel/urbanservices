// Initialize the map once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if map div exists
    if (document.getElementById('map')) {
        // Mock coordinates for the user and the worker
        const userLoc = [18.5204, 73.8567]; // Pune, India (Your location)
        const workerLoc = [18.5280, 73.8600]; // Nearby worker

        // Set up Leaflet Map
        const map = L.map('map').setView(userLoc, 14);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        // Add markers
        L.marker(userLoc).addTo(map)
            .bindPopup('<b>Your Location</b>')
            .openPopup();

        const workerMarker = L.marker(workerLoc).addTo(map)
            .bindPopup('<b>Your Worker</b><br>Arriving soon.');

        // Simple animation to simulate worker moving
        let lat = workerLoc[0];
        let lng = workerLoc[1];
        
        setInterval(() => {
            lat -= 0.0001; // Move slightly towards user
            lng -= 0.0001;
            workerMarker.setLatLng([lat, lng]);
        }, 2000);
    }
});
