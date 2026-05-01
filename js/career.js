document.querySelectorAll('.faqQuestion').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const item = btn.closest('.faqItem'); // ini sudah benar
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faqItem').forEach(i => i.classList.remove('open'));

        if (!isOpen) item.classList.add('open');
    });
});