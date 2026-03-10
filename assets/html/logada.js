// Aguarda o HTML carregar
document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // DADOS DOS ARTISTAS
    // =========================
    const artistsData = [
        { name: 'Rap Metal', artist: 'Artist 1',image: '../_img/rap_metal.jpg', audio: '../_music/rap-metal.mp3' },
        { name: 'Tokyo Cafe',artist: 'TVARI', image: '../_img/tvari-tokyo.jpg', audio: '../_music/tvari-tokyo.mp3' },
        { name: 'Alec koff blues',artist: 'Artist 1', image: '../_img/alec_koff-blues.jpg', audio: '../_music/alec_koff-blues.mp3' },
        { name: 'alec koff carnaval',artist: 'Artist 1', image: '../_img/alec_koff-carnaval.jpg', audio: '../_music/alec_koff-carnaval.mp3' },
        { name: 'bransboynd night', artist: 'Artist 1',image: '../_img/bransboynd-night.jpg', audio: '../_music/bransboynd-night.mp3' },
        { name: 'domartistudios-magical',artist: 'Artist 1', image: '../_img/domartistudios-magical.jpg', audio: '../_music/domartistudios-magical.mp3' },
        { name: 'domartistudios-magical',artist: 'Artist 1', image: '../_img/domartistudios-magical.jpg', audio: '../_music/domartistudios-magical.mp3' }
    
    ];

    // =========================
    // DADOS DOS ÁLBUNS
    // =========================
    const albumsData = [
        { name: 'Rap Metal', artist: 'Artist ',image: '../_img/rap_metal.jpg', audio: '../_music/rap-metal.mp3' },
        { name: 'Tvari',artist: 'Artist ', image: '../_img/tvari-tokyo.jpg', audio: '../_music/tvari-tokyo.mp3' },
        { name: 'Alec koff blues',artist: 'Artist', image: '../_img/alec_koff-blues.jpg', audio: '../_music/alec_koff-blues.mp3' },
        { name: 'alec koff carnaval',artist: 'Artist ', image: '../_img/alec_koff-carnaval.jpg', audio: '../_music/alec_koff-carnaval.mp3' },
        { name: 'Tvari tokyo',artist: 'Artist ', image: '../_img/tvari-tokyo.jpg', audio: '../_music/tvari-tokyo.mp3' },
    ];

    // =========================
    // DADOS DAS RÁDIOS
    // =========================
    const radioData = [
        { name: 'Rap ', image: '../_img/1.jpg' },
        { name: 'Rock', image: '../_img/2.jpg' },
        { name: 'Samba', image: '../_img/3.jpg' },
        { name: 'Jazz', image: '../_img/4.jpg' },
        { name: 'Eletronica', image: '../_img/5.jpg' }
    ];

    // =========================
    // GRIDS
    // =========================
    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.album-grid');
    const radioGrid = document.querySelector('.radio-grid');

    // =========================
    // GERAR ARTIST CARDS
    // =========================
    if (artistGrid) {

        artistsData.forEach(artist => {

            const artistCard = document.createElement('div');
            artistCard.classList.add('artist-card');

            artistCard.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}">
                <p>${artist.name}</p>
                <p>${artist.artist}</p>
            `;

            // tocar música ao clicar
            artistCard.addEventListener("click", () => {

                audio.src = artist.audio;
                audio.play();

                cover.src = artist.image;
                title.textContent = artist.name;

            });

            artistGrid.appendChild(artistCard);

        });

    }

    // =========================
    // GERAR ALBUM CARDS
    // =========================
    if (albumsGrid) {

        albumsData.forEach(album => {

            const albumCard = document.createElement('div');
            albumCard.classList.add('album-card');

            albumCard.innerHTML = `
                <img src="${album.image}" alt="${album.name}">
                <p>${album.name}</p> <p> <strong>${album.artist}</strong></p>
            `;

            albumsGrid.appendChild(albumCard);

        });

    }

    // =========================
    // GERAR RADIO CARDS
    // =========================
    if (radioGrid) {

        radioData.forEach(radio => {

            const radioCard = document.createElement('div');
            radioCard.classList.add('radio-card');

            radioCard.innerHTML = `
                <img src="${radio.image}" alt="${radio.name}">
                <p>${radio.name}</p>
            `;

            radioGrid.appendChild(radioCard);

        });

    }

    // =========================
    // SISTEMA DE BUSCA
    // =========================
    const searchInput = document.querySelector('.search-bar input');
    const noResults = document.getElementById("no-results");

    if (searchInput) {

        searchInput.addEventListener('input', () => {

            const searchValue = searchInput.value.toLowerCase();
            const allCards = document.querySelectorAll('.artist-card, .album-card, .radio-card');

            let visible = 0;

            allCards.forEach(card => {

                const text = card.textContent.toLowerCase();

                if (text.includes(searchValue)) {

                    card.style.display = "block";
                    visible++;

                } else {

                    card.style.display = "none";

                }

            });

            // mostrar mensagem se não encontrar resultado
            if (noResults) {

                noResults.style.display = visible === 0 ? "block" : "none";

            }

        });

    }

});

// =========================
// BOTÃO PERFIL
// =========================
const btnPerfil = document.getElementById("btn-perfil");

if (btnPerfil) {

    btnPerfil.addEventListener("click", () => {

        window.open("perfil.html", "_blank");

    });

}