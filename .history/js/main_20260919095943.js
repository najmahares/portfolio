document.addEventListener("DOMContentLoaded", () => {
  // ============================================
  // 1. PROJECT PAGE TOGGLE — runs first
  // ============================================
  const projects = document.querySelectorAll(".combined-project");

  if (projects.length > 0) {
    const breadcrumb = document.getElementById("breadcrumb-current");
    const projectTitles = {
      auditerra: "Auditerra",
      "agreement-scanner": "Agreement Risk Scanner",
    };

    function showProject(hash) {
      const targetId = hash.replace("#", "").trim() || "auditerra";
      let found = false;

      projects.forEach((project) => {
        const isTarget = project.id === targetId;
        project.classList.toggle("active", isTarget);
        if (isTarget) {
          found = true;
          if (breadcrumb) {
            breadcrumb.textContent = projectTitles[targetId] || targetId;
          }
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

    // Handle initial hash on page load
    showProject(window.location.hash);

    // Handle hash changes (clicks within the same page)
    window.addEventListener("hashchange", () => {
      showProject(window.location.hash);
    });
  }

  // ============================================
  // 2. Scroll Reveal Animations
  // ============================================
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

  // ============================================
  // 3. 3D Tilt Effect
  // ============================================
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

  // ============================================
  // 4. Magnetic Buttons
  // ============================================
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

  // ============================================
  // 5. Smooth Scrolling for In-Page Anchors
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
