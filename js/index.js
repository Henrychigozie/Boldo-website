    function toggleMenu() {
      document.querySelector(".nav-links").classList.toggle("show");
    }

const carousel = document.getElementById('carousel');
    const track = document.getElementById('track');

    // 

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


    // Duplicate logos for infinite loop
    const logos = track.innerHTML;
    while (track.scrollWidth < window.innerWidth * 2) {
      track.innerHTML += logos;
    }

    let step = 150;   // how many pixels to move per step
    let delay = 1000; // pause time (ms)

    function stepScroll() {
      carousel.scrollLeft -= step; // move LEFT

      // Loop seamlessly
      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = track.scrollWidth / 2;
      } else if (carousel.scrollLeft >= track.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }
    }

    // Auto scroll with pause
    setInterval(stepScroll, delay);

    // Drag support
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX;
      scrollLeft = carousel.scrollLeft;
      carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
      carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - startX;
      carousel.scrollLeft = scrollLeft - x;

      if (carousel.scrollLeft >= track.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = track.scrollWidth / 2;
      }
    });

    // Touch drag
    carousel.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('touchend', () => {
      isDown = false;
    });

    carousel.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - startX;
      carousel.scrollLeft = scrollLeft - x;

      if (carousel.scrollLeft >= track.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = track.scrollWidth / 2;
      }
    });

  // TESTIMONIAL JS
   const cards = document.getElementById('cards');
    const leftBtn = document.getElementById('left');
    const rightBtn = document.getElementById('right');
    const cardWidth = 320; // card width + gap

    rightBtn.addEventListener('click', () => {
      if (cards.scrollLeft + cards.clientWidth >= cards.scrollWidth - 10) {
        cards.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        cards.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    });

    leftBtn.addEventListener('click', () => {
      if (cards.scrollLeft <= 0) {
        cards.scrollTo({ left: cards.scrollWidth, behavior: 'smooth' });
      } else {
        cards.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    });


  

