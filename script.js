
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

function val(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function openWhatsAppFromContact(e) {
  e.preventDefault();
  const message = `Hallo NOVARA STUDIO,%0A%0AName: ${encodeURIComponent(val('name'))}%0AUnternehmen: ${encodeURIComponent(val('company'))}%0AE-Mail: ${encodeURIComponent(val('email'))}%0ATelefon: ${encodeURIComponent(val('phone'))}%0AInteresse: ${encodeURIComponent(val('interest'))}%0A%0ANachricht:%0A${encodeURIComponent(val('message'))}`;
  window.open('https://wa.me/436601234567?text=' + message, '_blank');
}
function openMailFromContact() {
  const subject = encodeURIComponent('Projektanfrage an NOVARA STUDIO');
  const body = encodeURIComponent(`Name: ${val('name')}
Unternehmen: ${val('company')}
E-Mail: ${val('email')}
Telefon: ${val('phone')}
Interesse: ${val('interest')}

Nachricht:
${val('message')}`);
  window.location.href = 'mailto:office@novara-studio.at?subject=' + subject + '&body=' + body;
}
function bookingWhatsApp(e) {
  e.preventDefault();
  const message = `Hallo NOVARA STUDIO,%0Aich möchte einen Beratungstermin anfragen.%0A%0AName: ${encodeURIComponent(val('bname'))}%0AUnternehmen: ${encodeURIComponent(val('bcompany'))}%0AE-Mail: ${encodeURIComponent(val('bemail'))}%0ATelefon: ${encodeURIComponent(val('bphone'))}%0ADatum: ${encodeURIComponent(val('bdate'))}%0AZeit: ${encodeURIComponent(val('btime'))}%0AThema: ${encodeURIComponent(val('btopic'))}`;
  window.open('https://wa.me/436601234567?text=' + message, '_blank');
}
const dateInput = document.getElementById('bdate');
if (dateInput) {
  const d = new Date();
  d.setDate(d.getDate()+1);
  dateInput.min = d.toISOString().split('T')[0];
}

const revealTargets = document.querySelectorAll('.section-head, .card, .service-card, .industry-card, .project-card, .step, .benefit, .split-copy, .split-image, .info-item, .footer-grid > div, .metric, .showcase-card, .case-cover, .case-panel, .list-card, .dual-gallery .preview-image, .cta-row > div');
revealTargets.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.setProperty('--delay', `${Math.min(i % 8, 7) * 70}ms`);
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
revealTargets.forEach(el => observer.observe(el));



