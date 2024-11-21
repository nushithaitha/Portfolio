window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    const header = document.querySelector('nav'); // Select the navbar
    setTimeout(() => {
        loading.style.opacity = '0';
        loading.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            loading.style.display = 'none';
            header.style.opacity = '1'; // Make the navbar visible
        }, 500); // Matches the fade-out duration
    }, 1000); // 4 seconds delay
});

/* Scroll to Top Button */
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-250px";
}