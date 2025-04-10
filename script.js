
document.getElementById('menuBtn').addEventListener('click', function () {
  document.getElementById('menu').classList.toggle('show');
});

const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
  
    document.getElementById('menu').classList.remove('show');
  });
});
let currentIndex = 0;
const members = document.querySelectorAll('.member');

function showSlide(index) {
  members.forEach((member, i) => {
    member.classList.toggle('active', i === index);
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + members.length) % members.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % members.length;
  showSlide(currentIndex);
}
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show");
}