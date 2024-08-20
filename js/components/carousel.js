document.addEventListener('DOMContentLoaded', () => {
	const images = document.querySelectorAll('#carousel-images img');
	const prevButton = document.querySelector('.carousel-arrow.prev');
	const nextButton = document.querySelector('.carousel-arrow.next');
  
	let currentIndex = 0;
  
	const updateCarousel = () => {
	  images.forEach((img, index) => {
		img.style.display = index === currentIndex ? 'block' : 'none';
	  });
	};
  
	prevButton.addEventListener('click', () => {
	alert('HAHAHHA')
	  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
	  updateCarousel();
	});
  
	nextButton.addEventListener('click', () => {
	  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
	  updateCarousel();
	});
  
	updateCarousel();
});
