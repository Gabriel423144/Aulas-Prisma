const body = document.body;
const btn = document.getElementById('toggle-theme');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Salvar no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
