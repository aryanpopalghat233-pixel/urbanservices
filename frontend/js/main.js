async function bookService(serviceName) {
    const name = prompt("Enter your name for " + serviceName);
    const address = prompt("Enter your address");

    if (!name || !address) return;

    try {
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customerName: name,
                serviceType: serviceName,
                address: address
            })
        });

        const result = await response.json();
        if (result.success) {
            alert("Booking successful for " + serviceName);
        }
    } catch (err) {
        console.error("Booking failed", err);
    }
}
