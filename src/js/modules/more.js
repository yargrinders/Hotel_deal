export function moRe() {
    const moreBtns = document.querySelectorAll('.moreBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeBtn');

    moreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    });

    closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    });
}
  
export default moRe;
  