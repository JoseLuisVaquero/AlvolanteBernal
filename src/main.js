import './style.css'

// Scroll Animations
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Select elements to animate
const animatedElements = document.querySelectorAll('.fade-up, .stagger-in, .slide-in-left, .slide-in-right, .zoom-in');
animatedElements.forEach(el => observer.observe(el));

// Parallax Effect (Disabled on mobile for performance)
if (window.innerWidth > 768) {
  document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX * -0.015);
    const moveY = (e.clientY * -0.015);

    const targets = document.querySelectorAll('.parallax-target');
    targets.forEach(target => {
      target.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
}

// Tilt Effect for Simulator
const tiltTarget = document.querySelector('.tilt-target');
if (tiltTarget) {
  tiltTarget.addEventListener('mousemove', (e) => {
    const rect = tiltTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // Max 10deg
    const rotateY = ((x - centerX) / centerX) * -10;

    tiltTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  tiltTarget.addEventListener('mouseleave', () => {
    tiltTarget.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
  });
}

// Form Handling
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('whatsapp').value;
    const msg = document.getElementById('message').value;

    // Construct WhatsApp URL
    const text = `Hola, mi nombre es ${name}. ${msg}. Tel: ${phone}`;
    const url = `https://wa.me/5491138823750?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all other items
    faqItems.forEach(faq => {
      faq.classList.remove('active');
      faq.querySelector('.faq-answer').style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add('active');
      const answer = item.querySelector('.faq-answer');
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Auto show WhatsApp tooltip after delay
setTimeout(() => {
  const waBtn = document.querySelector('.floating-whatsapp');
  if (waBtn) {
    waBtn.classList.add('show-tooltip');
    // Hide after some time if user doesn't interact, or keep it. Let's keep it visible or pulse it.
    setTimeout(() => {
      waBtn.classList.remove('show-tooltip');
    }, 5000);
  }
}, 3000);

// Gallery Carousel Functionality
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const items = document.querySelectorAll('.gallery-item');

if (track && items.length > 0) {
  let currentIndex = 0;
  const totalItems = items.length;
  // Determine how many items are visible based on screen width
  // Matches CSS breakdown: 3 on desktop, 1 on mobile
  const getVisibleItems = () => window.innerWidth <= 768 ? 1 : 3;

  const updateCarousel = () => {
    const visibleItems = getVisibleItems();
    const itemWidth = items[0].getBoundingClientRect().width;
    // Gap is 20px in CSS
    const gap = 20;
    const moveAmount = (itemWidth + gap) * currentIndex;
    track.style.transform = `translateX(-${moveAmount}px)`;

    // Manage button states (optional, infinite loop is nice too but let's do bounded for now)
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';

    const maxIndex = totalItems - visibleItems;
    nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    nextBtn.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';
  };

  nextBtn.addEventListener('click', () => {
    const visibleItems = getVisibleItems();
    const maxIndex = totalItems - visibleItems;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Recalculate on resize
  window.addEventListener('resize', () => {
    // Reset to 0 to avoid out of bounds
    currentIndex = 0;
    updateCarousel();
  });

  // Initial call
  updateCarousel();
}

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    // Toggle Icon between Menu and Close
    const icon = mobileToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
      icon.classList.remove('bx-menu');
      icon.classList.add('bx-x');
    } else {
      icon.classList.remove('bx-x');
      icon.classList.add('bx-menu');
    }
  });

  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
      const icon = mobileToggle.querySelector('i');
      icon.classList.remove('bx-x');
      icon.classList.add('bx-menu');
    });
  });
}

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

// Check Local Storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  if (themeIcon) {
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Toggle Icon
    if (newTheme === 'dark') {
      themeIcon.classList.remove('bx-moon');
      themeIcon.classList.add('bx-sun');
    } else {
      themeIcon.classList.remove('bx-sun');
      themeIcon.classList.add('bx-moon');
    }
  });
}

// Lead Magnet Logic
const leadMagnet = document.getElementById('leadMagnet');
const closeModal = document.getElementById('closeModal');
const leadForm = document.getElementById('leadForm');

// Show modal after 10 seconds if not already claimed/closed
if (leadMagnet && !localStorage.getItem('leadMagnetSeen')) {
  // Exit Intent logic (Desktop)
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 0 && !leadMagnet.classList.contains('active')) {
      leadMagnet.classList.add('active');
    }
  });

  // Keep the 10 seconds fallback
  setTimeout(() => {
    if (!leadMagnet.classList.contains('active')) {
      leadMagnet.classList.add('active');
    }
  }, 10000);
}

// Close Modal
if (closeModal) {
  closeModal.addEventListener('click', () => {
    leadMagnet.classList.remove('active');
    localStorage.setItem('leadMagnetSeen', 'true'); // Don't show again
  });
}

// Handle Lead Form
if (leadForm) {
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('leadName').value;
    const phone = document.getElementById('leadPhone').value;

    // Construct WhatsApp URL with Discount Code
    const text = `Hola! Soy ${name}. Mi teléfono es ${phone}. Quiero canjear mi cupón de 5% de descuento para mi primera clase.`;
    const url = `https://wa.me/5491138823750?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');

    leadMagnet.classList.remove('active');
    localStorage.setItem('leadMagnetSeen', 'true');
  });
}

// Top Bar Urgency Logic (Show only on Packs section)
const topBar = document.querySelector('.top-bar');
const packsSection = document.getElementById('packs');
const navbar = document.querySelector('.navbar');

if (topBar && packsSection && navbar) {
  window.addEventListener('scroll', () => {
    const packsRect = packsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if packs section is in viewport (partially or fully)
    const isInView = (packsRect.top < windowHeight && packsRect.bottom > 0);

    if (isInView) {
      topBar.classList.add('visible');
      navbar.classList.add('pushed');
    } else {
      topBar.classList.remove('visible');
      navbar.classList.remove('pushed');
    }
  });
}

// Animated Statistics Counter
const stats = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = +entry.target.getAttribute('data-target');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps

      let current = 0;
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          entry.target.innerText = Math.ceil(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          entry.target.innerText = target.toLocaleString(); // Start with + if needed externally, but here pure number
          // If you want the plus sign inside, you can append it:
          // entry.target.innerText = "+" + target.toLocaleString();
        }
      };

      updateCounter();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

stats.forEach(stat => {
  statsObserver.observe(stat);
});

// Scroll To Top Logic
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Scroll Progress Bar
const progressBar = document.getElementById('progressBar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Comparison Table Toggle
const comparisonToggle = document.getElementById('comparisonToggle');
const comparisonTable = document.getElementById('comparisonTable');

if (comparisonToggle && comparisonTable) {
  comparisonToggle.addEventListener('click', () => {
    const isVisible = comparisonTable.style.display === 'block';

    if (isVisible) {
      comparisonTable.style.display = 'none';
      comparisonToggle.innerHTML = '<i class=\'bx bx-chevron-down\'></i> Ver Comparación Detallada';
      comparisonToggle.classList.remove('active');
    } else {
      comparisonTable.style.display = 'block';
      comparisonToggle.innerHTML = '<i class=\'bx bx-chevron-up\'></i> Ocultar Comparación';
      comparisonToggle.classList.add('active');

      // Smooth scroll to table
      setTimeout(() => {
        comparisonTable.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  });
}

// ===== GTM CUSTOM EVENTS TRACKING =====

// Track WhatsApp CTA Clicks
const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
whatsappButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const buttonText = btn.innerText || btn.getAttribute('aria-label') || 'WhatsApp Button';

    // Push event to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'whatsapp_click',
      'button_location': buttonText,
      'button_type': btn.classList.contains('floating-whatsapp') ? 'floating' : 'inline'
    });
  });
});

// Track Pack Reservations
const packButtons = document.querySelectorAll('.pack-card .btn');
packButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const packCard = btn.closest('.pack-card');
    const packName = packCard ? packCard.querySelector('h3')?.innerText : 'Unknown Pack';
    const packPrice = packCard ? packCard.querySelector('.price')?.innerText : 'Unknown Price';

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'pack_reservation',
      'pack_name': packName,
      'pack_price': packPrice
    });
  });
});

// Track Google Reviews Click
const reviewsLink = document.querySelector('.reviews-link');
if (reviewsLink) {
  reviewsLink.addEventListener('click', () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'google_reviews_click',
      'rating': '4.9',
      'review_count': '551'
    });
  });
}

// Track Lead Magnet Conversion
const leadMagnetForm = document.getElementById('leadForm');
if (leadMagnetForm) {
  leadMagnetForm.addEventListener('submit', () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'lead_magnet_conversion',
      'discount_type': '5% descuento'
    });
  });
}

// Track Scroll Depth (25%, 50%, 75%, 100%)
const scrollDepths = [25, 50, 75, 100];
const scrolledDepths = new Set();

window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

  scrollDepths.forEach(depth => {
    if (scrollPercent >= depth && !scrolledDepths.has(depth)) {
      scrolledDepths.add(depth);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'scroll_depth',
        'depth_percentage': depth
      });
    }
  });
});

// Track Section Views (Testimonials, Packs, Simulator)
const trackableSections = [
  { id: 'testimonials', name: 'Testimonials Section' },
  { id: 'packs', name: 'Packs Section' },
  { id: 'simulator', name: 'Simulator Section' },
  { id: 'faq', name: 'FAQ Section' }
];

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionName = entry.target.id;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'section_view',
        'section_name': sectionName
      });
      sectionObserver.unobserve(entry.target); // Only track once
    }
  });
}, { threshold: 0.5 });

trackableSections.forEach(section => {
  const element = document.getElementById(section.id);
  if (element) {
    sectionObserver.observe(element);
  }
});

// Dynamic Spots Logic
const dynamicSpots = document.getElementById('dynamic-spots');
if (dynamicSpots) {
  const dayOfWeek = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  let spots = 2;
  if (dayOfWeek === 1) spots = 4;
  else if (dayOfWeek === 2) spots = 3;
  else if (dayOfWeek === 3 || dayOfWeek === 4) spots = 2;
  else spots = 1;
  dynamicSpots.textContent = spots;
}

// Sticky Mobile CTA Visibility
const stickyMobileCta = document.getElementById('stickyMobileCta');
if (stickyMobileCta) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      stickyMobileCta.classList.add('visible');
    } else {
      stickyMobileCta.classList.remove('visible');
    }
  });
}

// Social Proof Toast Logic
const toast = document.getElementById('socialProofToast');
const toastName = document.getElementById('toastName');
const toastPlan = document.getElementById('toastPlan');
const toastTime = document.getElementById('toastTime');

if (toast) {
  const names = ['María', 'Juan', 'Sofía', 'Lucas', 'Camila', 'Matias', 'Florencia', 'Diego', 'Lucía', 'Agustín', 'Martina', 'Nicolás'];
  const locations = ['de Bernal', 'de Quilmes', 'de Don Bosco', 'de Wilde', 'de Ezpeleta'];
  const plans = ['Plan Inicial', 'Plan Refuerzo', 'Plan Integral', 'Plan Inicial']; // Weighting 'Plan Inicial'
  const times = ['hace 5 minutos', 'hace 12 minutos', 'hace 25 minutos', 'hace 1 hora', 'hace 2 horas'];

  const showRandomToast = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomPlan = plans[Math.floor(Math.random() * plans.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];

    toastName.textContent = `${randomName} ${randomLocation}`;
    toastPlan.textContent = randomPlan;
    toastTime.textContent = randomTime;

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  };

  const initialDelay = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
  
  setTimeout(() => {
    showRandomToast();
    
    // Cycle every 15-25 seconds after the first one
    setInterval(() => {
      if (!toast.classList.contains('show')) {
         showRandomToast();
      }
    }, Math.floor(Math.random() * (25000 - 15000 + 1)) + 15000);
    
  }, initialDelay);
}
