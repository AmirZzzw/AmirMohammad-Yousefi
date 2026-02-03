// اسکرول نرم برای دکمه‌هایی که data-scroll دارند
document.querySelectorAll('[data-scroll]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const target = btn.getAttribute('data-scroll');
        const el = document.querySelector(target);
        if (el) {
            e.preventDefault();
            window.scrollTo({
                top: el.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
