// ========== DONNÉES DES FILMS ==========
const filmsData = {
    'film1': {
        title: 'Le Comte de Monte-Cristo',
        image: 'media/pictures/film1.png',
        rating: '3.8/5',
        year: '2024',
        duration: '2h 58min',
        synopsis: 'Victime d\'un complot, le jeune Edmond Dantès est arrêté le jour de son mariage pour un crime qu\'il n\'a pas commis. Après quatorze ans de détention au château d\'If, il parvient à s\'évader. Devenu riche, il réapparaît à Paris sous l\'identité du comte de Monte-Cristo pour se venger de ceux qui l\'ont trahi.',
        director: 'Alexandre de La Patellière, Matthieu Delaporte',
        genre: 'Aventure, Drame, Histoire',
        actors: 'Pierre Niney, Bastien Bouillon, Anaïs Demoustier',
        price: '4,99 €'
    },
    'film2': {
        title: 'Un p\'tit truc en plus',
        image: 'media/pictures/film2.jpg',
        rating: '4.2/5',
        year: '2024',
        duration: '1h 39min',
        synopsis: 'Pour échapper à la police, un fils et son père en cavale sont contraints de trouver refuge dans une colonie de vacances pour jeunes adultes en situation de handicap, se faisant passer pour un pensionnaire et son éducateur spécialisé. Le début des emmerdes.',
        director: 'Artus',
        genre: 'Comédie',
        actors: 'Artus, Clovis Cornillac, Alice Belaïdi',
        price: '3,99 €'
    },
    'film3': {
        title: 'Film 3',
        image: 'media/pictures/film3.jpg',
        rating: '4.0/5',
        year: '2024',
        duration: '2h 10min',
        synopsis: 'Synopsis du film 3 à compléter...',
        director: 'Réalisateur du film 3',
        genre: 'Genre du film',
        actors: 'Acteur 1, Acteur 2, Acteur 3',
        price: '4,99 €'
    },
    'film4': {
        title: 'Film 4',
        image: 'media/pictures/film4.jpg',
        rating: '3.5/5',
        year: '2024',
        duration: '1h 55min',
        synopsis: 'Synopsis du film 4 à compléter...',
        director: 'Réalisateur du film 4',
        genre: 'Genre du film',
        actors: 'Acteur 1, Acteur 2, Acteur 3',
        price: '5,99 €'
    },
    'film5': {
        title: 'Film 5',
        image: 'media/pictures/film5.jpg',
        rating: '4.5/5',
        year: '2024',
        duration: '2h 20min',
        synopsis: 'Synopsis du film 5 à compléter...',
        director: 'Réalisateur du film 5',
        genre: 'Genre du film',
        actors: 'Acteur 1, Acteur 2, Acteur 3',
        price: '4,99 €'
    },
    'film6': {
        title: 'Film 6',
        image: 'media/pictures/film6.jpg',
        rating: '3.9/5',
        year: '2024',
        duration: '1h 45min',
        synopsis: 'Synopsis du film 6 à compléter...',
        director: 'Réalisateur du film 6',
        genre: 'Genre du film',
        actors: 'Acteur 1, Acteur 2, Acteur 3',
        price: '3,99 €'
    },
    'film7': {
        title: 'Film 7',
        image: 'media/pictures/film7.jpg',
        rating: '4.1/5',
        year: '2024',
        duration: '2h 05min',
        synopsis: 'Synopsis du film 7 à compléter...',
        director: 'Réalisateur du film 7',
        genre: 'Genre du film',
        actors: 'Acteur 1, Acteur 2, Acteur 3',
        price: '4,99 €'
    },
    'film8': {
        title: 'Film 8',
        image: 'media/pictures/film8.jpg',
        rating: '3.7/5',
        year: '2024',
        duration: '1h 50min',
        synopsis: 'Synopsis du film 8 à compléter...',
        director: 'Réalisateur du film 8',
        genre: 'Genre du film',
        actors: 'Acteur 1, Acteur 2, Acteur 3',
        price: '5,99 €'
    }
};

// ========== FONCTION POUR OUVRIR LE MODAL ==========
function openModal(filmId) {
    const modal = document.getElementById('filmModal');
    const film = filmsData[filmId];
    
    if (film) {
        // Remplir les informations du modal
        // document.getElementById('modalImage').src = film.image;
        document.getElementById('modalTitle').textContent = film.title;
        document.getElementById('modalRating').textContent = '⭐ ' + film.rating;
        document.getElementById('modalYear').textContent = film.year;
        document.getElementById('modalDuration').textContent = film.duration;
        document.getElementById('modalSynopsis').textContent = film.synopsis;
        document.getElementById('modalDirector').textContent = film.director;
        document.getElementById('modalGenre').textContent = film.genre;
        document.getElementById('modalActors').textContent = film.actors;
        document.getElementById('modalPrice').textContent = film.price;
        
        // Afficher le modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Empêche le scroll de la page
    } else {
        console.error('Film non trouvé : ' + filmId);
    }
}

// ========== FONCTION POUR FERMER LE MODAL ==========
function closeModal() {
    const modal = document.getElementById('filmModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Rétablit le scroll
}

// ========== FERMER EN CLIQUANT EN DEHORS DU MODAL ==========
window.onclick = function(event) {
    const modal = document.getElementById('filmModal');
    if (event.target === modal) {
        closeModal();
    }
}

// ========== FERMER AVEC LA TOUCHE ÉCHAP ==========
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('filmModal');
        if (modal.classList.contains('active')) {
            closeModal();
        }
    }
});