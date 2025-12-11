// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ===== INITIAL PAGE LOAD ANIMATIONS =====
const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });

heroTimeline
    .from(".nav", {
        y: -100,
        opacity: 0,
        duration: 1
    })
    .from(".title-line", {
        y: 100,
        opacity: 0,
        rotationX: -90,
        stagger: 0.2,
        duration: 1.2
    }, "-=0.5")
    .from(".hero-tagline", {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, "-=0.6")
    .from(".hero-cta .btn", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6
    }, "-=0.4")
    .from(".scroll-indicator", {
        opacity: 0,
        y: 20,
        duration: 0.6
    }, "-=0.2");

// ===== FLOATING ANIMATION FOR HERO TITLE =====
gsap.to(".title-line", {
    y: "random(-5, 5)",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: {
        each: 0.3,
        from: "random"
    }
});

// ===== SECTION HEADERS ANIMATION =====
gsap.utils.toArray(".section-header").forEach(header => {
    gsap.from(header, {
        scrollTrigger: {
            trigger: header,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(header.querySelector(".title-underline"), {
        scrollTrigger: {
            trigger: header,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        scaleX: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out"
    });
});

// ===== BAND MEMBERS ANIMATION =====
gsap.utils.toArray(".member-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 80,
        opacity: 0,
        rotation: i % 2 === 0 ? -5 : 5,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out"
    });
});

// ===== GALLERY ANIMATION =====
gsap.utils.toArray(".gallery-item").forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.08,
        ease: "back.out(1.7)"
    });
});

// ===== MERCH ITEMS ANIMATION =====
gsap.utils.toArray(".merch-item").forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.1,
        ease: "power3.out"
    });
});

// ===== CONTACT SECTION ANIMATION =====
gsap.from(".contact-info", {
    scrollTrigger: {
        trigger: ".contact-container",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    x: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".contact-form", {
    scrollTrigger: {
        trigger: ".contact-container",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// ===== FORM INPUTS ANIMATION =====
gsap.utils.toArray(".form-group").forEach((group, i) => {
    gsap.from(group, {
        scrollTrigger: {
            trigger: group,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

// ===== PARALLAX EFFECT FOR HERO =====
gsap.to(".hero-content", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    },
    y: 200,
    opacity: 0.3
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
ScrollTrigger.create({
    trigger: ".hero",
    start: "bottom top+=100",
    end: "bottom top",
    onEnter: () => {
        gsap.to(".nav", {
            background: "rgba(5, 5, 5, 0.98)",
            duration: 0.3
        });
    },
    onLeaveBack: () => {
        gsap.to(".nav", {
            background: "rgba(10, 10, 10, 0.9)",
            duration: 0.3
        });
    }
});

// ===== MAGNETIC BUTTON EFFECT =====
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)"
        });
    });
});

// ===== GLITCH EFFECT ON HOVER FOR SECTION TITLES =====
document.querySelectorAll(".section-title").forEach(title => {
    title.addEventListener("mouseenter", () => {
        gsap.to(title, {
            skewX: 5,
            duration: 0.1,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 3
        });
    });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));

        gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: 80 },
            ease: "power3.inOut"
        });
    });
});

// ===== CURSOR FOLLOWER EFFECT =====
const cursor = document.createElement("div");
cursor.className = "custom-cursor";
cursor.innerHTML = '<div class="cursor-inner"></div>';
document.body.appendChild(cursor);

// Add cursor styles dynamically
const cursorStyles = document.createElement("style");
cursorStyles.textContent = `
    .custom-cursor {
        position: fixed;
        width: 40px;
        height: 40px;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
    }
    .cursor-inner {
        width: 100%;
        height: 100%;
        border: 2px solid #ff0040;
        border-radius: 50%;
        transition: transform 0.1s ease;
    }
    .cursor-inner.hover {
        transform: scale(1.5);
        background: rgba(255, 0, 64, 0.2);
    }
`;
document.head.appendChild(cursorStyles);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

gsap.ticker.add(() => {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    gsap.set(cursor, { x: cursorX - 20, y: cursorY - 20 });
});

// Cursor hover effect
document.querySelectorAll("a, button, .gallery-item, .merch-item, .member-card").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.querySelector(".cursor-inner").classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
        cursor.querySelector(".cursor-inner").classList.remove("hover");
    });
});

// ===== ELECTRIC SPARK EFFECT ON CLICK =====
document.addEventListener("click", (e) => {
    for (let i = 0; i < 8; i++) {
        const spark = document.createElement("div");
        spark.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #ff0040;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
        `;
        document.body.appendChild(spark);

        gsap.to(spark, {
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
            opacity: 0,
            scale: 0,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => spark.remove()
        });
    }
});

// ===== FOOTER ANIMATION =====
gsap.from(".footer-content", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        toggleActions: "play none none reverse"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});

// ===== TEXT REVEAL FOR MEMBER BIOS =====
gsap.utils.toArray(".member-info p").forEach(para => {
    gsap.from(para, {
        scrollTrigger: {
            trigger: para,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    });
});

// ===== STAGGER ANIMATION FOR SOCIAL LINKS =====
gsap.from(".social-link", {
    scrollTrigger: {
        trigger: ".social-links",
        start: "top 85%",
        toggleActions: "play none none reverse"
    },
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out"
});

console.log("⚡ THUNDERSTRIKE website loaded - Rock on! 🤘");
