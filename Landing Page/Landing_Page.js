const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');

    dropbtn.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });
});

window.addEventListener('click', (event) => {
    dropdowns.forEach(dropdown => {
        if (!event.target.matches('.dropbtn')) {
            dropdown.classList.remove('active');
        }
    });
});