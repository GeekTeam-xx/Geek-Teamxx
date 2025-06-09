<script type="text/javascript">
  var lastScrollTop = 0; // Variable pour stocker la dernière position de défilement
  var navbar = document.getElementById("navbar"); // Récupère la barre de navigation
  window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Position actuelle de défilement
    if (scrollTop > lastScrollTop) {
      // Si on défile vers le bas
      navbar.style.top = "-80px"; // Masque la barre de navigation
    } else {
      // Si on défile vers le haut
      navbar.style.top = "0"; // Affiche la barre de navigation
    }
    lastScrollTop = scrollTop; // Met à jour la dernière position de défilement
  });
</script>
