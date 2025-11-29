// Tanggal spesial: 30 November 2005
const SPECIAL_DATE = '30112005';

// Form login handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const specialDay = document.getElementById('specialDay').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    const loginCard = document.querySelector('.login-card');
    
    // Sembunyikan pesan error/sukses sebelumnya
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    
    // Bersihkan input dari karakter non-digit
    const cleanInput = specialDay.replace(/\D/g, '');
    
    // Validasi input
    if (cleanInput === SPECIAL_DATE) {
        // Login berhasil
        successMessage.style.display = 'block';
        loginCard.style.animation = 'success 0.5s ease';
        
        // Simpan status login di localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('birthDate', cleanInput);
        localStorage.setItem('loginTime', new Date().toISOString());
        
        // Redirect ke halaman utama setelah 2 detik
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 2000);
        
    } else {
        // Login gagal
        errorMessage.style.display = 'block';
        loginCard.style.animation = 'shake 0.5s';
        
        // Reset animasi setelah selesai
        setTimeout(function() {
            loginCard.style.animation = '';
        }, 500);
        
        // Clear input setelah error
        document.getElementById('specialDay').value = '';
        document.getElementById('specialDay').focus();
    }
});

// Format input otomatis
document.getElementById('specialDay').addEventListener('input', function(e) {
    let input = e.target.value.replace(/\D/g, '');
    
    // Format: DD/MM/YYYY
    if (input.length > 2 && input.length <= 4) {
        input = input.substring(0, 2) + '/' + input.substring(2);
    } else if (input.length > 4) {
        input = input.substring(0, 2) + '/' + input.substring(2, 4) + '/' + input.substring(4, 8);
    }
    
    e.target.value = input;
});

// Validasi input real-time
document.getElementById('specialDay').addEventListener('blur', function(e) {
    const input = e.target.value.replace(/\D/g, '');
    
    if (input.length > 0 && input.length !== 8) {
        e.target.style.borderColor = '#ff6b6b';
    } else {
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    }
});

// Focus ke input ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('specialDay').focus();
});

// Keyboard shortcut untuk development (Ctrl+Shift+L untuk auto-fill)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        document.getElementById('specialDay').value = '30/11/2005';
    }
});

// Cek jika sudah login
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginTime = localStorage.getItem('loginTime');
    
    if (isLoggedIn === 'true' && loginTime) {
        const loginDate = new Date(loginTime);
        const now = new Date();
        const diffHours = (now - loginDate) / (1000 * 60 * 60);
    }
}

// Jalankan pengecekan status login
checkLoginStatus();