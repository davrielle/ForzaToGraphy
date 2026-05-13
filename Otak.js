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
// --- Logic Light/Dark Mode ---
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Cek apakah user sebelumnya udah pilih dark mode
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️'; // Ganti icon jadi matahari
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// --- Logic Lightbox lo yang lama (tetap simpan di bawah) ---
const lightbox = document.getElementById('lightbox');
// ... rest of your gallery code