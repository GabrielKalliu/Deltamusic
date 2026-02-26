document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Rap Metal', image: '../_img/rap_metal.jpg' },
        { name: 'Artist 2', image: '../_img/artist2.jpg' },
        { name: 'Artist 3', image: '../_img/artist3.jpg' },
        { name: 'Artist 4', image: '../_img/artist4.jpg' },
        { name: 'Artist 5', image: '../_img/artist5.jpg' },
        { name: 'Artist 6', image: '../_img/artist6.jpg' },
        { name: 'Artist 7', image: '../_img/artist7.jpg' },
        { name: 'Artist 8', image: '../_img/artist8.jpg' },
    ];

    const albumsData = [
        { name: 'Album 1', artist: 'Artist 1', image: '../_img/album1.jpg' },
        { name: 'Album 2', artist: 'Artist 2', image: '../_img/album2.jpg' },
        { name: 'Album 3', artist: 'Artist 3', image: '../_img/album3.jpg' },
        { name: 'Album 4', artist: 'Artist 4', image: '../_img/album4.jpg' },
        { name: 'Album 5', artist: 'Artist 5', image: '../_img/album5.jpg' },
        { name: 'Album 6', artist: 'Artist 6', image: '../_img/album6.jpg' },
    ];

    const radioData = [
        { name: 'Rap Metal', image: '../_img/rap_metal.jpg' },
        { name: 'Radio 2', image: '../_img/radio2.jpg' },
        { name: 'Radio 3', image: '../_img/radio3.jpg' },
        { name: 'Radio 4', image: '../_img/radio4.jpg' },
        { name: 'Radio 5', image: '../_img/radio5.jpg' },
        { name: 'Radio 6', image: '../_img/radio6.jpg' },
        { name: 'Radio 7', image: '../_img/radio7.jpg' },
        { name: 'Radio 8', image: '../_img/radio8.jpg' },
    ];

    // Seleciona os grids corretamente
    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid'); // corrigido
    const radioGrid = document.querySelector('.radio-grid');

    // =========================
    // Generate artist cards
    // =========================
    if (artistGrid) {
        artistsData.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.classList.add('artist-card');
            artistCard.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}">
                <p>${artist.name}</p>
            `;
            artistGrid.appendChild(artistCard);
        });
    }

    // =========================
    // Generate radio cards
    // =========================
    if (radioGrid) {
        radioData.forEach(radio => {
            const radioCard = document.createElement('div');
            radioCard.classList.add('radio-card'); // corrigido
            radioCard.innerHTML = `
                <img src="${radio.image}" alt="${radio.name}">
                <p>${radio.name}</p>
            `;
            radioGrid.appendChild(radioCard);
        });
    }

    // =========================
    // Generate album cards
    // =========================
    if (albumsGrid) {
        albumsData.forEach(album => {
            const albumCard = document.createElement('div');
            albumCard.classList.add('album-card');
            albumCard.innerHTML = `
                <img src="${album.image}" alt="${album.name}">
                <p>${album.name} by <strong>${album.artist}</strong></p>
            `;
            albumsGrid.appendChild(albumCard);
        });
    }

});