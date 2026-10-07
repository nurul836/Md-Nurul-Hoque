/**
 * Nurul Hoque - WordPress Portfolio Interactive Script
 * Paste into WordPress via WPCode plugin, child theme functions.php, or footer scripts.
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('nh-mobile-toggle');
  const mobileNav = document.getElementById('nh-mobile-drawer');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('hidden');
    });

    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', function () {
        mobileNav.classList.add('hidden');
      });
    });
  }

  // 2. Sticky Header Blur
  const header = document.getElementById('nh-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.nh-faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.nh-faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', function () {
        const isActive = item.classList.contains('active');
        faqItems.forEach((el) => el.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. Project Category Filtering
  const filterBtns = document.querySelectorAll('.nh-project-filter-btn');
  const projectCards = document.querySelectorAll('.nh-project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const category = this.getAttribute('data-category');
      filterBtns.forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'All' || cardCategory === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Contact Form Handler & Clipboard Helper
  const contactForm = document.getElementById('nh-contact-form');
  const successBox = document.getElementById('nh-form-success');
  const copyBtn = document.getElementById('nh-copy-inquiry-btn');

  if (contactForm && successBox) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.classList.add('hidden');
      successBox.classList.remove('hidden');
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      const name = document.getElementById('nh-input-name')?.value || 'Client';
      const email = document.getElementById('nh-input-email')?.value || '';
      const type = document.getElementById('nh-input-type')?.value || '';
      const msg = document.getElementById('nh-input-msg')?.value || '';
      const summary = `Inquiry from ${name} (${email})\nProject: ${type}\nMessage: ${msg}`;

      navigator.clipboard.writeText(summary).then(() => {
        copyBtn.innerText = 'Copied to Clipboard!';
        setTimeout(() => {
          copyBtn.innerText = 'Copy Message Text';
        }, 2500);
      });
    });
  }
});
