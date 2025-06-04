// Activer le lien courant dans la navigation (si besoin avec l'attribut aria-current)
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
  
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.setAttribute('aria-current', 'page');
        link.style.fontWeight = 'bold';
        link.style.textDecoration = 'underline';
      }
    });
  });
  
  // Comportement pour ouvrir WhatsApp avec un message prédéfini
  function commanderSurWhatsapp() {
    const numero = '2250545087014';
    const message = "Bonjour, je souhaite commander le livre 'L'Esprit de Résilience'";
    const lien = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(lien, '_blank');
  }
  