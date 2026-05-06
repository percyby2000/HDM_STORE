import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // --- Initial Animations ---
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

  tl.from('.product-side', { x: -100, opacity: 0 })
    .from('.main-title', { y: 50, opacity: 0 }, '-=1')
    .from('.tagline', { y: 30, opacity: 0 }, '-=1.2')
    .from('.btn-comprar', { y: 20, opacity: 0 }, '-=1.2')
    .from('.color-picker', { opacity: 0 }, '-=1');

  // --- Hero Scroll Parallax ---
  gsap.to("#hero-bg-text", {
    scrollTrigger: {
      trigger: ".main-hero",
      start: "top top",
      end: "bottom top",
      scrub: 1
    },
    x: 300,
    ease: "none"
  });

  gsap.to(".hero-parallax-img", {
    scrollTrigger: {
      trigger: ".main-hero",
      start: "top top",
      end: "bottom top",
      scrub: 1
    },
    y: 100,
    scale: 0.9,
    ease: "none"
  });

  // --- Color Switching Logic ---
  const dots = document.querySelectorAll('.dot');
  const imgs = document.querySelectorAll('.product-img');

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const color = dot.getAttribute('data-color');
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      imgs.forEach(img => {
        img.classList.remove('active');
        if (img.id === `img-${color}`) {
          img.classList.add('active');
        }
      });
      const bgColors = {
        negro: '#f9f7f8',
        vino: '#fdf3f3',
        arena: '#fbf9f4',
        militar: '#f5f6f1',
        verde: '#f1f6f2'
      };
      gsap.to('body', { backgroundColor: bgColors[color] || '#f9f7f8', duration: 0.8 });
    });
  });

  // Add to Cart Logic for Hero
  const heroBuyBtn = document.querySelector('.main-hero .btn-comprar');
  heroBuyBtn?.addEventListener('click', () => {
    const activeDot = document.querySelector('.dot.active');
    const colorName = activeDot?.getAttribute('data-color') || 'negro';
    if (window.addToCart) {
      window.addToCart({
        name: `Polo Misiones - ${colorName.charAt(0).toUpperCase() + colorName.slice(1)}`,
        price: 45.00
      });
    }
  });

  // --- 3D Immersive Scroll (Refined) ---
  const floatItems = document.querySelectorAll('.float-item');
  floatItems.forEach((item, index) => {
    const speed = (index + 1) * 60;
    gsap.to(item, {
      scrollTrigger: {
        trigger: '.threed-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      },
      y: (index % 2 === 0 ? -speed : speed),
      rotation: (index % 2 === 0 ? 45 : -45),
      scale: 1.2,
      ease: 'none'
    });
  });

  // --- Enhanced Video Reveal Animation ---
  const videoRevealTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#video-reveal-trigger",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    }
  });

  videoRevealTl
    .to(".video-section-scroll", {
      backgroundColor: "#000000",
      duration: 0.5,
      ease: "none"
    }, 0)
    .to(".video-reveal-box", {
      width: "100%",
      height: "100vh",
      borderRadius: "0px",
      duration: 1,
      ease: "none"
    }, 0)
    .to(".bg-video-reveal", {
      scale: 1,
      duration: 1,
      ease: "none"
    }, 0)
    .to(".reveal-title", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, 0.2)
    .to(".reveal-desc", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, 0.4);

  // --- Polera Grid Parallax ---
  const poleraCards = document.querySelectorAll('.polera-card');
  poleraCards.forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      y: index === 0 ? -40 : 40,
      ease: "none"
    });
  });

  // --- Reveal Animations (Global) ---
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  });
});
