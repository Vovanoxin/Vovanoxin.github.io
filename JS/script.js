$(document).ready(function(){
  $('.landscape-carousel').add('.hotel-cards-carousel').slick({
    slidesToShow: 1,
    centerPadding: 20,
    arrows: false,
    dots: false,
    centerMode: true,
    mobileFirst: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 3
        }
      }
    ]
  });
});

function toggleCard(el) {
  el.closest('.card').classList.toggle('card-expanded');
}

function toggleModal(id, event) {
  const modalEl = document.getElementById(id);
  
  if (modalEl) {
    modalEl.classList.toggle('opened');
  }
  
  event.stopPropagation();
}

function toggleMenu(id) {
  const modalEl = document.getElementById(id);
  
  if (modalEl) {
    modalEl.classList.toggle('opened');
  }
}

window.onclick = function(event) {
  if (!event.target.closest('.popup')) {
    document.querySelectorAll('.popup-wrapper.opened').forEach(el => {
      el.classList.remove('opened');
    });
  }
}