// check-In.js
export function checkIn() {
    // Инициализация Flatpickr для полей ввода даты
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');

    flatpickr(checkinInput, {
        enableTime: false,
        dateFormat: "D, d M Y",
        defaultDate: "today",
    });

    flatpickr(checkoutInput, {
        enableTime: false,
        dateFormat: "D, d M Y",
        defaultDate: "today",
    });

    // Обработчик нажатия кнопки "Check Availability"
    const checkAvailabilityBtn = document.getElementById('checkAvailabilityBtn');
    const modal = document.getElementById('myModalcheck');
    const modalCheckinDate = document.getElementById('modalCheckinDate');
    const modalCheckoutDate = document.getElementById('modalCheckoutDate');
    const modalGuests = document.getElementById('modalGuests');
    const modalClose = document.getElementById('modalClose');

    checkAvailabilityBtn.addEventListener('click', function () {
        modal.style.display = 'block';
        modalCheckinDate.textContent = checkinInput.value;
        modalCheckoutDate.textContent = checkoutInput.value;
        modalGuests.textContent = document.getElementById('guests').value;
    });

    // Закрытие модального окна при клике на "X"
    modalClose.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

export default checkIn;