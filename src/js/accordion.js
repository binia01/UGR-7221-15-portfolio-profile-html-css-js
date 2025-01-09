document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const toggleButton = card.querySelector('.drop-button');

        toggleButton.addEventListener('click', (event) => {
            event.stopPropagation(); 
            card.classList.toggle('active');
            toggleButton.classList.toggle('open');
        });

        card.addEventListener('click', (event) => {
            if (!event.target.classList.contains('toggle-button')) {
                card.classList.toggle('active');
                toggleButton.classList.toggle('open');
            }
        });
    });
});