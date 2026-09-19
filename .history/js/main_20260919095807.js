document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // --- 2. 3D Tilt Effect ---
  const tiltCards = document.querySelectorAll(".tilt-card");
  tiltCards.forEach((card) => {
    const baseRotate = card.dataset.rotate
      ? parseFloat(card.dataset.rotate)
      : 0;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(${baseRotate}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) rotate(${baseRotate}deg) scale(1)`;
    });
  });

  // --- 3. Magnetic Buttons ---
  const magneticButtons = document.querySelectorAll(".magnetic");
  magneticButtons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) * 0.2;
      const moveY = (y - centerY) * 0.2;

      btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = `translate(0, 0)`;
    });
  });

  // --- 4. Smooth Scrolling for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // --- 5. Project Page Toggle (show only one project) ---
  const projects = document.querySelectorAll(".combined-project");
  if (projects.length === 0) return;

  const breadcrumb = document.getElementById("breadcrumb-current");

  const projectTitles = {
    auditerra: "Auditerra",
    "agreement-scanner": "Agreement Risk Scanner",
  };

  function showProject(hash) {
    const targetId = hash.replace("#", "") || "auditerra";
    let found = false;

    projects.forEach((project) => {
      if (project.id === targetId) {
        project.classList.add("active");
        found = true;
        if (breadcrumb) {
          breadcrumb.textContent = projectTitles[targetId] || targetId;
        }
      } else {
        project.classList.remove("active");
      }
    });

    if (!found && projects[0]) {
      projects[0].classList.add("active");
      if (breadcrumb) {
        breadcrumb.textContent =
          projectTitles[projects[0].id] || projects[0].id;
      }
    }
  }

  showProject(window.location.hash);

  window.addEventListener("hashchange", () => {
    showProject(window.location.hash);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
