// =========================
// ROLES TYPING EFFECT
// =========================

const roles = [
    "Data Analyst",
    "Business Analyst",
    "Power BI Developer"
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  
  const roleElement = document.getElementById("roles");
  
  function typeRole() {
  
    if (charIndex < roles[roleIndex].length) {
  
      roleElement.innerHTML += roles[roleIndex].charAt(charIndex);
  
      charIndex++;
  
      setTimeout(typeRole, 100);
  
    } else {
  
      setTimeout(eraseRole, 1800);
    }
  }
  
  function eraseRole() {
  
    if (charIndex > 0) {
  
      roleElement.innerHTML =
        roles[roleIndex].substring(0, charIndex - 1);
  
      charIndex--;
  
      setTimeout(eraseRole, 50);
  
    } else {
  
      roleIndex++;
  
      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }
  
      setTimeout(typeRole, 300);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if (roles.length) {
      typeRole();
    }
  });
  
  // =========================
  // ACTIVE NAVBAR HIGHLIGHT
  // =========================
  
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  
  window.addEventListener("scroll", () => {
  
    let current = "";
  
    sections.forEach(section => {
  
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;
  
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
  
    });
  
    navLinks.forEach(link => {
  
      link.classList.remove("active");
  
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
  
    });
  
  });
  
  // =========================
  // SCROLL REVEAL ANIMATION
  // =========================
  
  const revealElements = document.querySelectorAll(
    ".card, .skill-card, .contact-item, .stat-box, .about-image, .about-content"
  );
  
  function revealOnScroll() {
  
    revealElements.forEach(element => {
  
      const windowHeight = window.innerHeight;
  
      const revealTop = element.getBoundingClientRect().top;
  
      const revealPoint = 100;
  
      if (revealTop < windowHeight - revealPoint) {
  
        element.classList.add("show");
  
      }
  
    });
  
  }
  
  window.addEventListener("scroll", revealOnScroll);
  
  revealOnScroll();
  
  // =========================
  // NAVBAR BACKGROUND CHANGE
  // =========================
  
  const navbar = document.querySelector("nav");
  
  window.addEventListener("scroll", () => {
  
    if (window.scrollY > 50) {
  
      navbar.style.background = "rgba(2, 6, 23, 0.98)";
      navbar.style.boxShadow =
        "0 8px 25px rgba(0,0,0,0.3)";
  
    } else {
  
      navbar.style.background = "rgba(2, 6, 23, 0.92)";
      navbar.style.boxShadow = "none";
  
    }
  
  });
  
  // =========================
  // BUTTON HOVER GLOW
  // =========================
  
  const buttons = document.querySelectorAll(
    ".btn, .github-btn, .cert-btn"
  );
  
  buttons.forEach(button => {
  
    button.addEventListener("mousemove", e => {
  
      const x = e.offsetX;
      const y = e.offsetY;
  
      button.style.setProperty("--xPos", x + "px");
      button.style.setProperty("--yPos", y + "px");
  
    });
  
  });
  
  // =========================
  // SKILL CARD CLICK EFFECT
  // =========================
  
  const skillCards = document.querySelectorAll(".skill-card");
  
  skillCards.forEach(card => {
  
    card.addEventListener("click", () => {
  
      card.classList.add("clicked");
  
      setTimeout(() => {
        card.classList.remove("clicked");
      }, 300);
  
    });
  
  });
  
  // =========================
  // SMOOTH SCROLL FIX
  // =========================
  
  document.querySelectorAll('nav a').forEach(anchor => {
  
    anchor.addEventListener('click', function (e) {
  
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
  
      const targetSection = document.querySelector(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
  
    });
  
  });
  
  // =========================
  // PAGE LOAD ANIMATION
  // =========================
  
  window.addEventListener("load", () => {
  
    document.body.classList.add("loaded");
  
  });
  
  // =========================
  // CONSOLE MESSAGE
  // =========================
  
  console.log(
    "Prachi Shete Portfolio Successfully Loaded"
  );