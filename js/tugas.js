document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('judulTugasInput');
    const preview = document.getElementById('judulTugasPreview');
    if (input && preview) {
        input.addEventListener('input', function() {
            preview.textContent = input.value.trim() === '' ? 'Tanpa Judul' : input.value;
        });
    }

    const modulBtn = document.getElementById('modulToggle');
    const tugasBtn = document.getElementById('tugasToggle');
    const buttons = [modulBtn, tugasBtn].filter(Boolean);

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});