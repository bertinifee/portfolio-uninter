document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("main section");

  // Navegação entre seções
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      sections.forEach(sec => sec.classList.remove("active"));
      const alvo = document.querySelector(link.getAttribute("href"));
      if (alvo) alvo.classList.add("active");

      // Fechar menu no mobile ao clicar
      document.querySelector("nav").classList.remove("ativo");
    });
  });

  if (sections.length > 0) sections[0].classList.add("active");
  if (links.length > 0) links[0].classList.add("active");

  // Menu hambúrguer
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("ativo");
  });
});
