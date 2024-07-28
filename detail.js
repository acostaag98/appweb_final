document.addEventListener('DOMContentLoaded', () => {
    const cityId = localStorage.getItem('selectedCity');
    const city = cities.find(c => c.id == cityId);

    document.getElementById('city-title').textContent = city.city;
    document.getElementById('city-img').src = city.img;
    document.getElementById('city-desc').textContent = city.desc;

    const hotelSelect = document.getElementById('hotel-select');
    city.hotels.forEach(hotel => {
        const option = document.createElement('option');
        option.value = hotel.price;
        option.textContent = `${hotel.name} - $${hotel.price} por noche`;
        hotelSelect.appendChild(option);
    });

    document.getElementById('num-people').addEventListener('input', calculateTotal);
    document.getElementById('num-nights').addEventListener('input', calculateTotal);
    hotelSelect.addEventListener('change', calculateTotal);

    calculateTotal();
});

function calculateTotal() {
    const numPeople = parseInt(document.getElementById('num-people').value);
    const numNights = parseInt(document.getElementById('num-nights').value);
    const hotelPrice = parseInt(document.getElementById('hotel-select').value);
    const cityId = localStorage.getItem('selectedCity');
    const city = cities.find(c => c.id == cityId);

    const totalPrice = (parseInt(city.price) + hotelPrice) * numPeople * numNights;
    document.getElementById('total-price').textContent = totalPrice;
}

function saveSelection() {
    const numPeople = document.getElementById('num-people').value;
    const numNights = document.getElementById('num-nights').value;
    const hotelPrice = document.getElementById('hotel-select').value;
    const cityId = localStorage.getItem('selectedCity');

    const travelSelection = {
        cityId: cityId,
        numPeople: numPeople,
        numNights: numNights,
        hotelPrice: hotelPrice
    };

    localStorage.setItem('travelSelection', JSON.stringify(travelSelection));
    window.location.href = 'summary.html';
}
