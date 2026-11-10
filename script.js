document.addEventListener("DOMContentLoaded", () => {
    const CALENDLY_URL = "";
    const EMAIL = "nabil.elmerrahi@gmail.com";

    const translations = {
        en: {
            "nav.home": "Home",
            "nav.services": "Services",
            "nav.method": "Method",
            "nav.work": "Case studies",
            "nav.about": "About",
            "nav.contact": "Contact",
            "hero.brand": "STRATEKICK · Independent consulting",
            "hero.name": "Nabil EL MERRAHI",
            "hero.title": "Consultant in marketing strategy, B2B business development and digital performance",
            "hero.tagline": "I help SMEs define and implement marketing and sales strategies tailored to their ambitions. From positioning to digital visibility, from acquisition to retention, I combine strategic advice, creativity and concrete action to grow their business and improve performance over the long term.",
            "hero.cta.primary": "Let's discuss your project",
            "hero.cta.secondary": "Explore how I can help",
            "hero.cta.portfolio": "My portfolio",
            "challenges.eyebrow": "Your challenges",
            "challenges.heading": "The offer exists. Now it needs a system that makes it visible, desirable and effective.",
            "challenges.item1.title": "Clarify the direction",
            "challenges.item1.body": "Positioning, target segments and marketing priorities are not clear enough to guide decisions.",
            "challenges.item2.title": "Structure acquisition",
            "challenges.item2.body": "Prospecting and digital initiatives remain fragmented, with little continuity between marketing and sales.",
            "challenges.item3.title": "Manage performance",
            "challenges.item3.body": "Actions are launched without a shared dashboard or sufficiently useful indicators to guide trade-offs.",
            "services.eyebrow": "Services",
            "services.heading": "Three ways to move from scattered initiatives to a coherent strategy.",
            "services.intro": "Every engagement starts by understanding the context and is tailored to the company's goals, resources and level of autonomy.",
            "services.item1.label": "Signature service",
            "services.item1.title": "Marketing and sales diagnosis & strategy",
            "services.item1.body": "Clarify the market, positioning and priorities to create a strategy that can be put into action immediately.",
            "services.item1.point1": "Marketing and sales diagnosis",
            "services.item1.point2": "Segmentation, targeting and positioning",
            "services.item1.point3": "90-day operational action plan",
            "services.item1.point4": "KPIs and management dashboard",
            "services.item2.label": "Visibility & engagement",
            "services.item2.title": "Content & digital communication",
            "services.item2.body": "Build a consistent presence that showcases expertise, grows awareness and supports acquisition.",
            "services.item2.point1": "Editorial strategy and copywriting",
            "services.item2.point2": "Visuals, short-form video and light editing",
            "services.item2.point3": "Community management and engagement",
            "services.item2.point4": "Coordination of specialist partners",
            "services.item3.label": "Delivery & measurement",
            "services.item3.title": "Support & targeted execution",
            "services.item3.body": "Turn recommendations into action, support teams and adjust levers based on results.",
            "services.item3.point1": "B2B prospecting and CRM optimization",
            "services.item3.point2": "Campaign and acquisition monitoring",
            "services.item3.point3": "Retention and customer journey",
            "services.item3.point4": "Reporting and continuous optimization",
            "services.note": "One-off interventions, multi-week projects or ongoing support - remotely\u00a0or\u00a0on\u00a0site, quoted to scope.",
            "method.eyebrow": "My method",
            "method.heading": "Understand before acting. Prioritize before deploying. Measure to improve.",
            "method.step1.title": "Diagnosis",
            "method.step1.body": "Understand the market, offer, customers, resources and points of friction.",
            "method.step2.title": "Strategy",
            "method.step2.body": "Define positioning, targets, objectives and the highest-impact levers.",
            "method.step3.title": "Delivery",
            "method.step3.body": "Organize the action plan, support teams and execute targeted interventions.",
            "method.step4.title": "Performance management",
            "method.step4.body": "Track KPIs, analyze results and adjust actions pragmatically.",
            "work.eyebrow": "Case studies",
            "work.heading": "Strategy, creation, coordination and measurement in practice.",
            "work.case1.tag": "SaaS go-to-market",
            "work.case1.title": "ALGOMED - structuring launch and acquisition",
            "work.case1.body": "Designed and deployed the go-to-market strategy, digital content, marketing campaigns and performance monitoring.",
            "work.case1.result1": "73% of marketing objectives achieved",
            "work.case1.result2": "+38% prospect-to-client conversion",
            "work.case1.result3": "+85% social media engagement",
            "work.case2.tag": "Content & digital performance",
            "work.case2.title": "WeBoost Group - managing multi-client activations",
            "work.case2.body": "Editorial strategies, publishing calendars, content creation, campaign management, SEO/SEA and reporting in a multi-client environment.",
            "work.case2.result1": "Production of directly actionable deliverables",
            "work.case2.result2": "Visibility, acquisition and profitability KPI tracking",
            "work.case2.result3": "Coordination of multiple needs and timelines",
            "work.case3.tag": "B2B marketing & partner experience",
            "work.case3.title": "Renault Trucks - turning feedback into decisions",
            "work.case3.body": "Coordinated an international B2B listening program, KPI analysis, reporting and network improvement recommendations.",
            "work.case3.result1": "More than 1,500 contacts across 74 countries",
            "work.case3.result2": "+10 NPS points compared with 2023",
            "work.case3.result3": "International coordination and actionable recommendations",
            "collabs.eyebrow": "Experience & environments",
            "collabs.heading": "Different contexts, the same commitment to clarity and performance.",
            "about.eyebrow": "About",
            "about.heading": "One point of contact, from thinking to action.",
            "about.body1": "Trained in B2B marketing and sales between France and Morocco, I work at the intersection of strategy, creativity and execution. My role is to help leaders step back, select the right priorities and turn their ambitions into a realistic plan.",
            "about.body2": "Every engagement is built on listening, transparency and measurement. I use data and, when it creates real value, artificial intelligence to enrich analysis, accelerate creation and optimize actions - always under professional oversight.",
            "about.pillar1": "Tailored",
            "about.pillar2": "Close collaboration",
            "about.pillar3": "Useful innovation",
            "about.pillar4": "Measurable outcomes",
            "timeline.2025": "Master's degree in B2B Marketing & Sales",
            "timeline.2024": "Degree in Marketing & Commercial Action",
            "timeline.2023.title": "Google certification",
            "timeline.2023.body": "Professional project management",
            "testimonials.eyebrow": "Testimonials",
            "testimonials.heading": "Operational clarity, commitment and teamwork.",
            "testimonials.quote1": "“Nabil combines drive with operational clarity. Thanks to his commitment, our project exceeded our expectations.”",
            "testimonials.quote2": "“A high-potential professional, able to add value wherever rigor and commitment matter.”",
            "testimonials.quote3": "“Data-led and attentive to the team, Nabil improved our management and SaaS sales, strengthening both results and team dynamics.”",
            "contact.eyebrow": "Let's discuss your project",
            "contact.heading": "What is the next priority to structure?",
            "contact.copy": "Tell me about your context, objectives and main obstacles. A first 20- to 30-minute conversation will help assess your priorities and whether working together makes sense.",
            "contact.email": "Send an email",
            "contact.calendly": "Book a call",
            "contact.location": "Orléans, Centre-Val de Loire · In-person / remote engagements throughout Europe and France",
            "form.eyebrow": "Request a quote",
            "form.heading": "Briefly describe your needs",
            "form.name": "Full name",
            "form.company": "Company",
            "form.email": "Business email",
            "form.need": "Main need",
            "form.need.placeholder": "Select an option",
            "form.need.strategy": "Diagnosis and strategy",
            "form.need.content": "Content and digital communication",
            "form.need.execution": "Support and execution",
            "form.need.other": "Other need",
            "form.message": "Context, objectives and timeline",
            "form.submit": "Prepare my request",
            "form.note": "Your email app will open with the information entered. Nothing is sent automatically.",
            "footer.name": "Nabil EL MERRAHI · STRATEKICK",
            "footer.title": "Marketing strategy, B2B business development and digital performance consulting",
            "footer.social": "Find me",
            "footer.rights": "© 2026 - All rights reserved."
        }
    };

    const french = {};
    document.querySelectorAll("[data-i18n]").forEach(node => {
        french[node.dataset.i18n] = node.innerHTML;
    });

    const langSwitch = document.querySelector(".lang-switch");
    const navMenu = document.querySelector(".nav-links");
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.getElementById("navbar");
    const progressBar = document.querySelector(".scroll-progress__bar");

    const setLanguage = lang => {
        const map = lang === "en" ? translations.en : french;
        document.documentElement.lang = lang;
        document.querySelectorAll("[data-i18n]").forEach(node => {
            const value = map[node.dataset.i18n];
            if (value !== undefined) node.innerHTML = value;
        });
        langSwitch?.classList.toggle("is-en", lang === "en");
        langSwitch?.setAttribute("aria-pressed", String(lang === "en"));
        langSwitch?.setAttribute("aria-label", lang === "en" ? "Passer en français" : "Switch to English");
        document.title = lang === "en"
            ? "Nabil El Merrahi | B2B Marketing & Business Development Consultant"
            : "Nabil El Merrahi | Consultant marketing & développement commercial B2B";
        const description = document.querySelector('meta[name="description"]');
        if (description) {
            description.content = lang === "en"
                ? "Nabil El Merrahi helps B2B service SMEs with marketing strategy, business development, customer acquisition and digital performance."
                : "Nabil El Merrahi accompagne les TPE et PME de services B2B en stratégie marketing, développement commercial, acquisition et performance digitale, à Orléans et à distance en France.";
        }
        localStorage.setItem("preferredLang", lang);
    };

    let currentLang = localStorage.getItem("preferredLang") === "en" ? "en" : "fr";
    setLanguage(currentLang);
    langSwitch?.addEventListener("click", () => {
        currentLang = currentLang === "fr" ? "en" : "fr";
        setLanguage(currentLang);
        navMenu?.classList.remove("open");
        navToggle?.setAttribute("aria-expanded", "false");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
            navMenu?.classList.remove("open");
            navToggle?.setAttribute("aria-expanded", "false");
        });
    });

    navToggle?.addEventListener("click", () => {
        const open = navMenu?.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(Boolean(open)));
    });

    const sections = document.querySelectorAll("section[id]");
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
        });
    }, { rootMargin: "-42% 0px -45% 0px", threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(node => revealObserver.observe(node));

    const syncScroll = () => {
        navbar?.classList.toggle("scrolled", window.scrollY > 24);
        if (!progressBar) return;
        const height = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, window.scrollY / height))})`;
    };
    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });
    window.addEventListener("resize", syncScroll);

    const calendlyLink = document.getElementById("calendly-link");
    if (calendlyLink && CALENDLY_URL) {
        calendlyLink.href = CALENDLY_URL;
        calendlyLink.hidden = false;
    }

    document.getElementById("project-form")?.addEventListener("submit", event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const isEnglish = document.documentElement.lang === "en";
        const subject = isEnglish
            ? `Project enquiry - ${form.get("company")}`
            : `Demande de projet - ${form.get("company")}`;
        const lines = isEnglish
            ? [
                `Name: ${form.get("name")}`,
                `Company: ${form.get("company")}`,
                `Email: ${form.get("email")}`,
                `Main need: ${form.get("need")}`,
                "",
                "Context, objectives and timeline:",
                String(form.get("message"))
            ]
            : [
                `Nom : ${form.get("name")}`,
                `Entreprise : ${form.get("company")}`,
                `E-mail : ${form.get("email")}`,
                `Besoin principal : ${form.get("need")}`,
                "",
                "Contexte, objectifs et échéance :",
                String(form.get("message"))
            ];
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    });

    const stopAssetAction = event => event.preventDefault();
    document.querySelectorAll('img[src^="assets/"]').forEach(img => {
        img.draggable = false;
        img.addEventListener("contextmenu", stopAssetAction);
        img.addEventListener("dragstart", stopAssetAction);
    });
});
