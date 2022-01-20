export default function initSidenav() {
    const sidenav = document.querySelectorAll('[data-sidenav="option"]');

    if (sidenav.length) {
        sidenav.forEach(option => {
            option.addEventListener('click', () => {
                sidenav.forEach(option => {
                    option.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    }
}