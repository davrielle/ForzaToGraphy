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
// Tambahkan console log buat ngetes tombolnya fungsi atau nggak
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    console.log("Tombol diklik!"); // Muncul di inspect element console
    const root = document.documentElement;
    if (root.hasAttribute('data-theme')) {
        root.removeAttribute('data-theme');
        console.log("Mode Terang");
    } else {
        root.setAttribute('data-theme', 'dark');
        console.log("Mode Gelap");
    }
});