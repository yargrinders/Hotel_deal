export function subscribeEmail() {
    document.addEventListener('DOMContentLoaded', function() {
        const subscribeForm = document.getElementById('subscribeForm');
        const notification = document.getElementById('notification');
    
        subscribeForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const emailInput = document.getElementById('email');
            const email = emailInput.value;
    
            console.log('Email that was entered:', email);
    
            emailInput.value = '';
    
            notification.innerText = 'You have successfully subscribed to our newsletter.';
            notification.style.display = 'block';
    
            setTimeout(function() {
                notification.style.display = 'none';
            }, 5000);
        });
    });
    
}

export default subscribeEmail;