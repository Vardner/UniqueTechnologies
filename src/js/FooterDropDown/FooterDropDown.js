const footer = document.querySelector('.Footer');

footer.onclick = function (e) {
  if (e.target.closest('.Footer-listCaption')) {
    e = e.target.closest('.Footer-listCaption');
    e.firstElementChild.classList.toggle('active');
    e.nextElementSibling.classList.toggle('active');
  }
};