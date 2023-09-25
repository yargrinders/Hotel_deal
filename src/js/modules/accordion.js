// example.js
export function accorDion() {
    // Получить все элементы заголовков аккордеона
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Добавить обработчик события для каждого заголовка
    accordionHeaders.forEach((header) => {
        header.addEventListener('click', () => {
            // Получить следующий элемент (контент) после заголовка
            const content = header.nextElementSibling;

            // Переключить класс "active" для заголовка
            header.classList.toggle('active');

            // Переключить отображение контента с использованием стиля "display"
            if (header.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });

}

export default accorDion;