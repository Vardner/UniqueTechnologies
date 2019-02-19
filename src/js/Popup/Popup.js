const shadow = document.querySelector('.shadow');
const cityBlock = document.querySelector('[data-popup="city"]');

function popupCity () {
  shadow.classList.add('active');
  cityBlock.classList.add('active');
}

function hidePopups (e) {
  let i;
  if (e.target === shadow || e.target.closest('.Popup-close')) {

    for (i = 0; i <shadow.children; i++) {
      children[i].classList.remove('active');
    }

    shadow.classList.remove('active');
  }
}

$('.UserBox-location').click(popupCity);
shadow.onclick = hidePopups;


