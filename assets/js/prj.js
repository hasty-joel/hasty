const ham = document.querySelector('.ham-menu');

const osm = document.querySelector('header ul');

ham.addEventListener('click', ( )  =>  {
  ham.classList.toggle('active');
  osm.classList.toggle('active');
})