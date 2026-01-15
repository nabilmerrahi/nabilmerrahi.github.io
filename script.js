// Smooth scroll, active link highlighting, mobile nav, and reveal animations
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const nav = document.getElementById("navbar");
    const toggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-links");
    const blockEvent = event => event.preventDefault();

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) return;
            target.scrollIntoView({ behavior: "smooth" });
            navMenu.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });

    // Mobile nav toggle
    toggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Scroll spy using Intersection Observer
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute("id");
                const link = document.querySelector(`.nav-link[href="#${id}"]`);
                if (!link) return;
                if (entry.isIntersecting) {
                    navLinks.forEach(l => l.classList.remove("active"));
                    link.classList.add("active");
                }
            });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach(sec => observer.observe(sec));

    // Navbar compress on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    });

    // Reveal on scroll
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );
    revealEls.forEach(el => revealObserver.observe(el));

    // Work carousel arrows (seamless loop with enough clones for viewport)
    const workTrack = document.querySelector(".work-track");
    const workArrows = document.querySelectorAll(".work-arrow");
    if (workTrack && workArrows.length) {
        const baseCards = Array.from(workTrack.querySelectorAll(".card"));
        if (baseCards.length) {
            let step = 0;
            let visible = 1;
            let index = 0;
            const viewport = workTrack.closest(".work-carousel") || workTrack.parentElement;

            const rebuild = () => {
                workTrack.innerHTML = "";
                const middle = baseCards.map(card => card.cloneNode(true));
                middle.forEach(card => workTrack.appendChild(card));

                const styles = getComputedStyle(workTrack);
                const gap = parseFloat(styles.columnGap || styles.gap || 0) || 0;
                const firstCard = workTrack.querySelector(".card");
                if (!firstCard || !viewport) return;
                step = firstCard.getBoundingClientRect().width + gap;
                const viewportWidth = viewport.clientWidth;
                visible = Math.min(baseCards.length, Math.max(1, Math.floor((viewportWidth + gap) / step)));

                // Clone head/tail to cover visible width and avoid gaps
                const prefix = baseCards.slice(-visible).map(c => c.cloneNode(true));
                const suffix = baseCards.slice(0, visible).map(c => c.cloneNode(true));
                prefix.reverse().forEach(clone => workTrack.insertBefore(clone, workTrack.firstChild));
                suffix.forEach(clone => workTrack.appendChild(clone));

                workTrack.querySelectorAll(".card").forEach(card => card.classList.add("visible"));

                index = visible;
                workTrack.style.transition = "none";
                workTrack.style.transform = `translateX(${-index * step}px)`;
                requestAnimationFrame(() => {
                    workTrack.style.transition = "transform 0.35s ease";
                });
            };

            const snapIfLooped = () => {
                const total = baseCards.length;
                if (index < visible) {
                    index += total;
                    workTrack.style.transition = "none";
                    workTrack.style.transform = `translateX(${-index * step}px)`;
                    requestAnimationFrame(() => {
                        workTrack.style.transition = "transform 0.35s ease";
                    });
                } else if (index >= total + visible) {
                    index -= total;
                    workTrack.style.transition = "none";
                    workTrack.style.transform = `translateX(${-index * step}px)`;
                    requestAnimationFrame(() => {
                        workTrack.style.transition = "transform 0.35s ease";
                    });
                }
            };

            const move = dir => {
                index += dir;
                workTrack.style.transform = `translateX(${-index * step}px)`;
            };

            workTrack.addEventListener("transitionend", snapIfLooped);
            workArrows.forEach(btn => {
                btn.addEventListener("click", () => {
                    const dir = btn.dataset.dir === "next" ? 1 : -1;
                    move(dir);
                });
            });

            rebuild();
            window.addEventListener("resize", rebuild);
        }
    }

    // Light friction against saving/downloading asset images
    const installAssetGuards = () => {
        const assetImages = document.querySelectorAll('img[src^="assets/"]');
        assetImages.forEach(img => {
            img.setAttribute("draggable", "false");
            img.addEventListener("contextmenu", blockEvent);
            img.addEventListener("dragstart", blockEvent);

            const parent = img.parentElement;
            if (!parent) return;
            parent.classList.add("asset-guard");

            const hasOverlay = parent.querySelector(".asset-guard-overlay");
            if (hasOverlay) return;

            const overlay = document.createElement("span");
            overlay.className = "asset-guard-overlay";
            overlay.setAttribute("aria-hidden", "true");
            overlay.addEventListener("contextmenu", blockEvent);
            overlay.addEventListener("dragstart", blockEvent);
            parent.appendChild(overlay);
        });
    };

    installAssetGuards();
});
