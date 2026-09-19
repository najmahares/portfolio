document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Custom Cursor ---
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  if (cursorDot && cursorOutline) {
    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // Outline follows with a slight delay for smoothness
      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" },
      );
    });

    // Add hover effect to clickable elements
    const clickables = document.querySelectorAll("a, button, .btn");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursorOutline.classList.add("hovering");
      });
      el.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("hovering");
      });
    });
  }

  // --- 2. Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // --- 3. 3D Tilt Effect for Cards ---
  const tiltCards = document.querySelectorAll(".tilt-card");

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // Max 10 degrees
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
    });
  });

  // --- 4. Magnetic Buttons (Slight movement towards cursor) ---
  const magneticButtons = document.querySelectorAll(".magnetic");

  magneticButtons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) * 0.3;
      const moveY = (y - centerY) * 0.3;

      btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = `translate(0, 0)`;
    });
  });
});
