// example.js
export function accorDion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach((header) => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            header.classList.toggle('active');

            if (header.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });

}

export default accorDion;