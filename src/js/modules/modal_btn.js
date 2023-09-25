// example.js
export function mbTn() {
    var openModalButton = document.getElementById("openModal");
    var closeModalButton = document.getElementById("closeModal");

    var modal = document.getElementById("myModal");

    openModalButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

export default mbTn;