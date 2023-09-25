// example.js
export function mbTn() {
    // Получите элементы кнопки открытия и закрытия модального окна
    var openModalButton = document.getElementById("openModal");
    var closeModalButton = document.getElementById("closeModal");

    // Получите элемент модального окна и элемент body
    var modal = document.getElementById("myModal");
    var body = document.body;

    // Добавьте слушателя события для открытия модального окна
    openModalButton.addEventListener("click", function() {
        modal.style.display = "block";
        body.style.overflow = "hidden"; // Запретить прокрутку страницы
        modal.style.zIndex = "1000"; // Поверх всех окон
    });

    // Добавьте слушателя события для закрытия модального окна
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
        body.style.overflow = "auto"; // Восстановить прокрутку страницы
    });

    // Закройте модальное окно, если пользователь щелкнет вне его области
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.overflow = "auto"; // Восстановить прокрутку страницы
        }
    });

}

export default mbTn;