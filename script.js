const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
const contactForm = document.getElementById('contact-form');
const formNotice = document.getElementById('form-notice');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
  menuToggle.setAttribute(
    'aria-label',
    mainNav.classList.contains('active') ? 'Close navigation' : 'Open navigation'
  );
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formNotice.textContent = 'Please complete all fields before sending.';
    return;
  }

  formNotice.textContent = `Thanks, ${name}! Your message has been received.`;
  contactForm.reset();
});
