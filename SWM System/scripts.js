document.addEventListener('DOMContentLoaded', function() {
    // Photo slider logic
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const dots = Array.from(slides).map((_, i) => `<span class="dot${i === 0 ? ' active' : ''}" data-slide="${i}"></span>`);
  
    dotsContainer.innerHTML = dots.join('');
  
    let currentIndex = 0;
  
    const setActiveSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
    };
  
    const updateDots = (index) => {
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    };
  
    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      setActiveSlide(currentIndex);
      updateDots(currentIndex);
    };
  
    setInterval(nextSlide, 5000); // Auto slide every 5 seconds
  
    dotsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('dot')) {
        currentIndex = parseInt(e.target.dataset.slide);
        setActiveSlide(currentIndex);
        updateDots(currentIndex);
      }
    });
  });
  