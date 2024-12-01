window.addEventListener('scroll', function () {
    const parallaxElements = document.querySelectorAll('[data-speed]');
    const scrollTop = window.scrollY;
  
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed')); 
      const offset = scrollTop * speed; 
      el.style.transform = `translateY(${offset}px)`;
    });
  });
  
function changebg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');


    banner.style.background = `url("images/n/${bg}")`;
    banner.style.backgroundPosition = 'center'; 


    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}