const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', valueChange);

const bulb = document.getElementById('bulb');

function valueChange(event) {
    if (checkbox.checked) {
        bulb.classList.add('derk');
    } else {
        bulb.classList.remove('derk');
    }
}