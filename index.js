// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Initialize contact section visibility immediately when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-section");
  if (contactSection) {
    contactSection.style.opacity = "1";
    contactSection.style.visibility = "visible";
    contactSection.style.display = "block";

    const methods = contactSection.querySelectorAll(".contact-method");
    methods.forEach((method) => {
      method.style.opacity = "1";
      method.style.visibility = "visible";
      method.style.transform = "translateX(0)";
    });

    const contactInfo = contactSection.querySelector(".contact-info");
    const contactForm = contactSection.querySelector(".contact-form");
    if (contactInfo) {
      contactInfo.style.opacity = "1";
      contactInfo.style.visibility = "visible";
    }
    if (contactForm) {
      contactForm.style.opacity = "1";
      contactForm.style.visibility = "visible";
    }
  }
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Hero animations
const tl = gsap.timeline();

tl.from(".greeting", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: "power3.out",
})
  .from(
    ".hero-name",
    {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5"
  )
  .from(
    ".hero-title",
    {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5"
  )
  .from(
    ".hero-description",
    {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.4"
  )
  .from(
    ".hero-buttons",
    {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.4"
  )
  .from(
    ".social-links",
    {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.4"
  );

// Floating orbs animation
gsap.to(".orb-1", {
  x: 100,
  y: 100,
  duration: 20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".orb-2", {
  x: -80,
  y: -80,
  duration: 25,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".orb-3", {
  x: 60,
  y: -60,
  duration: 18,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// Section animations - ensure all sections are visible
gsap.utils.toArray("section").forEach((section, index) => {
  if (index === 0) return; // Skip hero section

  // Ensure section is visible
  gsap.set(section, { opacity: 1, visibility: "visible" });

  const header = section.querySelector(".section-header");
  if (header) {
    gsap.set(header, { opacity: 1 });
    gsap.from(header, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none none",
        once: false,
      },
    });
  }
});

// About section animation
gsap.from(".about-intro", {
  opacity: 0,
  x: -50,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 70%",
    toggleActions: "play none none none",
  },
});

gsap.from(".about-image", {
  opacity: 0,
  x: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 70%",
    toggleActions: "play none none none",
  },
});

gsap.from(".about-stats", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".stat-item",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

// Skills section animation - ensure visibility
gsap.set(".skills-section", {
  opacity: 1,
  visibility: "visible",
  display: "block",
});
gsap.set(".skill-category", { opacity: 1, visibility: "visible" });
gsap.set(".skills-grid", { opacity: 1, visibility: "visible" });

// Animate skill categories on scroll
gsap.from(".skill-category", {
  opacity: 0.3,
  y: 50,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".skills-section",
    start: "top 85%",
    end: "top 30%",
    toggleActions: "play none none reverse",
    once: false,
  },
});

// Animate skill bars - ensure they animate properly
const skillBars = document.querySelectorAll(".skill-progress");
if (skillBars.length > 0) {
  skillBars.forEach((bar, index) => {
    const width = bar.getAttribute("data-width");
    if (width) {
      // Set initial width to 0
      gsap.set(bar, { width: "0%" });

      ScrollTrigger.create({
        trigger: ".skills-section",
        start: "top 85%",
        onEnter: () => {
          gsap.to(bar, {
            width: width + "%",
            duration: 1.5,
            delay: index * 0.1,
            ease: "power3.out",
          });
        },
      });
    }
  });
}

// Projects section animation - ensure visibility
gsap.set(".projects-section", {
  opacity: 1,
  visibility: "visible",
  display: "block",
});
gsap.set(".project-card", { opacity: 1, visibility: "visible" });
gsap.set(".projects-grid", { opacity: 1, visibility: "visible" });

// Animate project cards on scroll
gsap.from(".project-card", {
  opacity: 0.3,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top 85%",
    end: "top 30%",
    toggleActions: "play none none reverse",
    once: false,
  },
});

// Contact section animation - ensure visibility first (run immediately)
(function () {
  gsap.set(".contact-section", {
    opacity: 1,
    visibility: "visible",
    display: "block",
  });
  gsap.set(".contact-info", { opacity: 1, visibility: "visible" });
  gsap.set(".contact-form", { opacity: 1, visibility: "visible" });
  gsap.set(".contact-method", { opacity: 1, visibility: "visible", x: 0 });
  gsap.set(".contact-methods", { opacity: 1, visibility: "visible" });

  // Also set via DOM immediately for faster rendering
  const contactSection = document.querySelector(".contact-section");
  if (contactSection) {
    contactSection.style.opacity = "1";
    contactSection.style.visibility = "visible";
    contactSection.style.display = "block";

    const methods = contactSection.querySelectorAll(".contact-method");
    methods.forEach((method) => {
      method.style.opacity = "1";
      method.style.visibility = "visible";
      method.style.transform = "translateX(0)";
    });
  }
})();

// Contact section animation - faster and earlier trigger
gsap.from(".contact-info", {
  opacity: 0.3,
  x: -30,
  duration: 0.6,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 85%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    once: false,
  },
});

gsap.from(".contact-form", {
  opacity: 0.3,
  x: 30,
  duration: 0.6,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 85%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    once: false,
  },
});

// Contact methods - faster animation with earlier trigger
gsap.from(".contact-method", {
  opacity: 0.4,
  x: -20,
  duration: 0.5,
  stagger: 0.08,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 85%",
    end: "top 60%",
    toggleActions: "play none none reverse",
    once: false,
  },
});

// Contact form submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simple form validation
  const inputs = contactForm.querySelectorAll("input, textarea");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = "#ef4444";
    } else {
      input.style.borderColor = "#10b981";
    }
  });

  if (isValid) {
    // Show success message (you can replace this with actual form submission)
    const btn = contactForm.querySelector("button");
    const originalText = btn.innerHTML;
    btn.innerHTML =
      '<span>Đã gửi thành công!</span><i class="fas fa-check"></i>';
    btn.style.background = "linear-gradient(135deg, #10b981, #059669)";

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = "";
      contactForm.reset();
      inputs.forEach((input) => {
        input.style.borderColor = "";
      });
    }, 3000);
  }
});

// Parallax effect for hero image
gsap.to(".hero-image", {
  y: -50,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});

// Cursor effect (optional enhancement)
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".custom-cursor");
  if (cursor) {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: "power2.out",
    });
  }
});

// Initialize opacity for fade-in
gsap.set("body", { opacity: 1 });

// Add loading animation and ensure all sections are visible on load
window.addEventListener("load", () => {
  // Fade in body
  gsap.to("body", {
    opacity: 1,
    duration: 0.5,
  });

  // Force visibility of skills and projects sections
  const skillsSection = document.querySelector(".skills-section");
  const projectsSection = document.querySelector(".projects-section");

  if (skillsSection) {
    skillsSection.style.opacity = "1";
    skillsSection.style.visibility = "visible";
    skillsSection.style.display = "block";

    // Ensure all children are visible
    const skillCategories = skillsSection.querySelectorAll(".skill-category");
    skillCategories.forEach((card) => {
      card.style.opacity = "1";
      card.style.visibility = "visible";
    });
  }

  if (projectsSection) {
    projectsSection.style.opacity = "1";
    projectsSection.style.visibility = "visible";
    projectsSection.style.display = "block";

    // Ensure all children are visible
    const projectCards = projectsSection.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      card.style.opacity = "1";
      card.style.visibility = "visible";
    });
  }

  // Force visibility of contact section and methods
  const contactSection = document.querySelector(".contact-section");
  if (contactSection) {
    contactSection.style.opacity = "1";
    contactSection.style.visibility = "visible";
    contactSection.style.display = "block";

    // Ensure contact methods are visible immediately
    const contactMethods = contactSection.querySelectorAll(".contact-method");
    contactMethods.forEach((method) => {
      method.style.opacity = "1";
      method.style.visibility = "visible";
    });

    // Ensure contact info and form are visible
    const contactInfo = contactSection.querySelector(".contact-info");
    const contactForm = contactSection.querySelector(".contact-form");
    if (contactInfo) {
      contactInfo.style.opacity = "1";
      contactInfo.style.visibility = "visible";
    }
    if (contactForm) {
      contactForm.style.opacity = "1";
      contactForm.style.visibility = "visible";
    }
  }

  // Refresh ScrollTrigger to ensure animations work
  ScrollTrigger.refresh();
});
