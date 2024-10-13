document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact-popup').style.display = 'block';
});

window.onclick = function(event) {
    var popup = document.getElementById('contact-popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}
