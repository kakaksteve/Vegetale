// Memastikan script berjalan setelah dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Fungsi Mengatur Tombol Menu Navigasi Aktif
    window.setActive = function(element) {
        // Mengambil semua tombol navigasi di sidebar
        const buttons = document.querySelectorAll('.nav-btn');
        
        // Menghapus kelas 'active' dari semua tombol
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Menambahkan kelas 'active' ke tombol yang baru diklik
        element.classList.add('active');
        
        console.log(`Menu dipilih: ${element.innerText.trim()}`);
    };

    // 2. Fungsi Interaksi Tombol "Beli Lagi"
    const buyAgainButtons = document.querySelectorAll('.btn-buy-again');
    buyAgainButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            alert(`Item ke-${index + 1} berhasil ditambahkan kembali ke keranjang!`);
        });
    });

    // 3. Fungsi Interaksi Tombol "Keluar Akun"
    window.logout = function() {
        const confirmLogout = confirm('Apakah Anda yakin ingin keluar dari akun?');
        if (confirmLogout) {
            alert('Anda telah berhasil keluar.');
            // Tambahkan logika pengalihan halaman di sini jika diperlukan
        }
    };

    // 4. Tombol "Lihat Selengkapnya" Riwayat Pembelian
    const btnViewMore = document.querySelector('.btn-view-more');
    if (btnViewMore) {
        btnViewMore.addEventListener('click', () => {
            alert('Membuka seluruh daftar riwayat pembelian...');
        });
    }

    // 5. Tombol "Edit Alamat"
    const btnEditAddress = document.querySelector('.btn-edit-address');
    if (btnEditAddress) {
        btnEditAddress.addEventListener('click', () => {
            alert('Membuka modal edit alamat pengiriman...');
        });
    }

});