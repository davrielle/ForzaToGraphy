const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const galleryImages = document.querySelectorAll('.gallery-item');

// Loop setiap gambar di gallery
galleryImages.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img'); // Cari gambar di dalem item ini
        lightbox.classList.add('active');
        lightboxImg.src = img.src; 
    });
});

// Klik tombol close buat nutup
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Klik di area mana saja (selain gambar) buat nutup
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
    }
});