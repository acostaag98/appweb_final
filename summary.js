document.addEventListener('DOMContentLoaded', () => {
    const travelSelection = JSON.parse(localStorage.getItem('travelSelection'));
    const city = cities.find(c => c.id == travelSelection.cityId);

    const travelDetails = document.getElementById('travel-details');
    
    travelDetails.innerHTML = `
        <h2>${city.city}</h2>
        <p>Hotel: ${city.hotels.find(h => h.price == travelSelection.hotelPrice).name}</p>
        <p>Cantidad de Personas: ${travelSelection.numPeople}</p>
        <p>Cantidad de Noches: ${travelSelection.numNights}</p>
        <p>Total: $${(parseInt(city.price) + parseInt(travelSelection.hotelPrice)) * parseInt(travelSelection.numPeople) * parseInt(travelSelection.numNights)}</p>
    `;
    
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const travelData = {
            city: city.city,
            hotel: city.hotels.find(h => h.price == travelSelection.hotelPrice).name,
            numPeople: travelSelection.numPeople,
            numNights: travelSelection.numNights,
            totalPrice: (parseInt(city.price) + parseInt(travelSelection.hotelPrice)) * parseInt(travelSelection.numPeople) * parseInt(travelSelection.numNights),
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };

        console.log(JSON.stringify(travelData, null, 2));
        alert('Viaje confirmado');
    });
});

function cancelTrip() {
    localStorage.removeItem('selectedCity');
    localStorage.removeItem('travelSelection');
    window.location.href = 'index.html';
}
