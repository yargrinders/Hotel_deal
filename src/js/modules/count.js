export function counT() {
    const numbers = document.querySelectorAll('.number');
    const countSection = document.querySelector('.count-section');
    let animationStarted = false;

    const startAnimation = () => {
        if (animationStarted) return;
        animationStarted = true;

        numbers.forEach((number, index) => {
            const target = parseInt(number.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 100);
            let current = 0;

            const updateNumber = () => {
                if (current < target) {
                    current += step;
                    number.textContent = Math.round(current);
                    setTimeout(updateNumber, 10);
                } else {
                    number.textContent = target;
                }
            };

            setTimeout(updateNumber, index * 200);
        });
    };

    const isElementInViewport = el => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    };

    window.addEventListener('scroll', () => isElementInViewport(countSection) && startAnimation());
}

export default counT;