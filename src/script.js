const menu = document.getElementById('menu');
const toggleMenuButton = document.getElementById('toggleMenu');

// Toggle menu visibility
toggleMenuButton.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggleMenuButton.contains(event.target)) {
        menu.style.display = 'none';
    }
});