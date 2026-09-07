  <script>
    lucide.createIcons();
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.nav-links');
    menuButton.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', open); menuButton.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}"></i>`; lucide.createIcons(); });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
    document.querySelector('#enquiry-form').addEventListener('submit', event => { event.preventDefault(); event.currentTarget.querySelector('.form-message').style.display = 'block'; event.currentTarget.reset(); });
  </script>