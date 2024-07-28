document.addEventListener('DOMContentLoaded', () => {
    const cityCards = document.getElementById('city-cards');

    cities.forEach(city => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${city.img}" alt="${city.city}">
            <div class="card-body">
                <h2 class="card-title">${city.city}</h2>
                <p class="card-desc">${city.desc}</p>
                <p class="card-price">Desde $${city.price}</p>
                <button class="btn" onclick="selectCity(${city.id})">Seleccionar</button>
            </div>
        `;

        cityCards.appendChild(card);
    });
});

function selectCity(cityId) {
    localStorage.setItem('selectedCity', cityId);
    window.location.href = 'detail.html';
}
