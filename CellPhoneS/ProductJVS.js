const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkbox.nextElementSibling.style.backgroundColor = '#bdc3c7';
        } else {
            checkbox.nextElementSibling.style.backgroundColor = 'transparent';
        }
    });
});
