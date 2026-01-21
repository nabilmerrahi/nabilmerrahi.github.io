// Smooth scroll, active link highlighting, mobile nav, reveal animations, and i18n toggle
document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        fr: {
            "nav.presentation": "Pr\u00e9sentation",
            "nav.about": "\u00c0 propos",
            "nav.collabs": "Collaborations",
            "nav.work": "Projets",
            "nav.contact": "Contact",
            "hero.name": "Nabil EL MERRAHI",
            "hero.title": "Marketing et communication 360\u00b0",
            "hero.tagline": "Je con\u00e7ois et pilote des strat\u00e9gies marketing data-driven, en B2B comme en B2C, combinant marketing direct et digital. De la strat\u00e9gie \u00e0 l'ex\u00e9cution, je transforme les insights en leviers de croissance mesurables et durables.",
            "hero.cta.primary": "Prenons contact !",
            "hero.cta.portfolio": "Consulter mon portfolio",
            "about.eyebrow": "\u00c0 propos",
            "about.heading": "Derri\u00e8re le Marketeur",
            "about.body1": "Derri\u00e8re les strat\u00e9gies et les chiffres, il y a un humain, \u00e0 l'esprit cr\u00e9atif, anim\u00e9 par l'exigence et la performance. Form\u00e9 au marketing, entre la France et le Maroc, j'ai d\u00e9velopp\u00e9 une vision \u00e0 la fois strat\u00e9gique et profond\u00e9ment ancr\u00e9e dans la r\u00e9alit\u00e9 du terrain, notamment dans des environnements internationaux.",
            "about.body2": "Personnellement, je crois que le marketing n'a de valeur que s'il est \u00e0 l'\u00e9coute du march\u00e9, connect\u00e9 aux \u00e9quipes terrain et r\u00e9solument orient\u00e9 r\u00e9sultats.",
            "timeline.2025.title": "IAE Lyon - France",
            "timeline.2025.body": "Master 2 en Marketing et Vente B2B.",
            "timeline.2024.title": "ENCG F\u00e8s - Maroc",
            "timeline.2024.body": "Dipl\u00f4me des \u00c9coles Nationales de Commerce et de Gestion,<br>option Marketing et Action Commerciale",
            "timeline.2023.title": "Certifi\u00e9 Google",
            "timeline.2023.body": "Manager de projet professionnel",
            "collabs.eyebrow": "Collaborations & r\u00e9f\u00e9rences",
            "collabs.heading": "Marques et \u00e9quipes engag\u00e9es dans la performance :",
            "work.eyebrow": "Projets",
            "work.heading": "Campagnes et projets o\u00f9 strat\u00e9gie, cr\u00e9ativit\u00e9 et ROI se rencontrent.",
            "work.card1.title": "Chef de projet marketing B2B",
            "work.card1.subtitle": "Renault Trucks - Group VOLVO",
            "work.card1.body": "Optimisation de la performance et de la satisfaction client du r\u00e9seau \u00e0 travers le pilotage de la \"Dealer Survey\" men\u00e9e dans 70 pays aupr\u00e8s de 1 500 contacts.",
            "work.card1.result1": "+40 % de taux de r\u00e9ponse (vs 2023)",
            "work.card1.result2": "+10 points de NPS",
            "work.card1.result3": "Am\u00e9lioration sur 5/6 des th\u00e8mes strat\u00e9giques de satisfaction",
            "work.card2.title": "Coordinateur marketing et commercial",
            "work.card2.subtitle": "Devalt Sphere ESN",
            "work.card2.body": "D\u00e9veloppement d'une strat\u00e9gie marketing globale pour le lancement d'ALGOMED, service SaaS de gestion m\u00e9dicale :",
            "work.card2.result1": "+38 % de conversion prospects/clients",
            "work.card2.result2": "+85 % d'engagement sur les r\u00e9seaux sociaux",
            "work.card2.result3": "73 % des objectifs marketing atteints",
            "work.card3.title": "Marketeur digital",
            "work.card3.subtitle": "WeBoost Group - Agence digitale",
            "work.card3.body": "\u00c9laboration et pilotage de campagnes publicitaires payantes (Meta Ads, Google Ads, SM) et de strat\u00e9gies digitales pour plus de 15 clients.",
            "work.card3.result1": "Optimisation de l'e-r\u00e9putation de WeBoost et de ses clients via Google My Business.",
            "work.card3.result2": "Suivi des KPIs cl\u00e9s (ROAS, CPA, AOV...)",
            "work.card3.result3": "Pilotage de la performance marketing orient\u00e9 ROI et rentabilit\u00e9.",
            "work.card4.title": "Gestionnaire de boutique e-commerce",
            "work.card4.subtitle": "Merch by Amazon - Print-on-Demand",
            "work.card4.body": "De l'\u00e9tude de march\u00e9 \u00e0 l'activation marketing, avec un focus sur la cr\u00e9ation produit, l'optimisation SEO et la performance des campagnes publicitaires.",
            "work.card4.result1": "+1 200 unit\u00e9s vendues sur les march\u00e9s europ\u00e9en et nord-am\u00e9ricain",
            "work.card4.result2": "Budget publicitaire pilot\u00e9 : ~2 500 \u20ac",
            "work.card4.result3": "ROAS moyen estim\u00e9 \u00e0 3,2",
            "work.card5.title": "Expert IA - Analytique, G\u00e9n\u00e9rative",
            "work.card5.subtitle": "Outlier AI",
            "work.card5.body": "\u00c9valuation et am\u00e9lioration de mod\u00e8les d'intelligence artificielle, incluant des mod\u00e8les analytiques, g\u00e9n\u00e9ratifs et des LLM, dans des contextes multilingues.",
            "work.card5.result1": "6 projets IA et LLM (FR / EN)",
            "work.card5.result2": "\u00c9valuation, am\u00e9lioration et tutorat des mod\u00e8les",
            "work.card5.result3": "Analyse NLP, texte et image",
            "work.card6.title": "Manager de site web & Copywriter",
            "work.card6.subtitle": "Episteme Passion",
            "work.card6.body": "Gestion d'un blog informatif, avec une approche orient\u00e9e contenu, SEO et mon\u00e9tisation.",
            "work.card6.result1": "+100 contenus \u00e9ditoriaux r\u00e9dig\u00e9s et optimis\u00e9s SEO",
            "work.card6.result2": "Mon\u00e9tisation AdSense organique atteinte en 3 mois",
            "work.card6.result3": "+1 700 lecteurs actifs mensuels",
            "expertise.eyebrow": "Expertises",
            "expertise.heading": "Strat\u00e9gie, performance et storytelling au service d'une croissance durable.",
            "expertise.item1.title": "Strat\u00e9gie marketing & positionnement",
            "expertise.item1.body": "Structuration de strat\u00e9gies marketing B2B et B2C align\u00e9es sur les enjeux business, int\u00e9grant \u00e9tudes de march\u00e9 et veille concurrentielle.",
            "expertise.item2.title": "Branding & pr\u00e9sence digitale",
            "expertise.item2.body": "D\u00e9veloppement de l'image de marque \u00e0 travers la gestion des r\u00e9seaux sociaux, la cr\u00e9ation de contenus audiovisuels et le community management.",
            "expertise.item3.title": "Marketing digital & activation",
            "expertise.item3.body": "Pilotage de dispositifs digitaux (paid, owned, earned), structuration de plans d'activation multicanaux et optimisation des parcours clients.",
            "expertise.item4.title": "Pilotage de la performance & data marketing",
            "expertise.item4.body": "Analyse de la performance marketing et commerciale via des KPIs, tableaux de bord et recommandations actionnables.",
            "expertise.item5.title": "Gestion de projets & coordination d'\u00e9quipes",
            "expertise.item5.body": "Pilotage de projets marketing et coordination d'\u00e9quipes transverses.",
            "expertise.item6.title": "CRM, exp\u00e9rience & fid\u00e9lisation",
            "expertise.item6.body": "Optimisation de la relation client et partenaire pour une croissance durable.",
            "testimonials.eyebrow": "T\u00e9moignages",
            "testimonials.heading": "Pragmatique, strat\u00e9gique et collaboratif.",
            "testimonials.quote1": "\"Nabil allie dynamisme et clart\u00e9 op\u00e9rationnelle. Gr\u00e2ce \u00e0 son implication, notre projet a d\u00e9pass\u00e9 nos attentes.\"",
            "testimonials.person1": "Val\u00e9rie Lyonnet - Dir. Exp\u00e9rience client, Renault Trucks",
            "testimonials.quote2": "\"Un profil \u00e0 fort potentiel, capable d'apporter de la valeur partout o\u00f9 l'exigence et l'engagement comptent.\"",
            "testimonials.person2": "Youssef EL HASSANI - PhD en Marketing, ENCGF-USMBA",
            "testimonials.quote3": "\"Orient\u00e9 data et \u00e0 l'\u00e9coute de l'\u00e9quipe, Nabil a optimis\u00e9 notre management et nos ventes SaaS, am\u00e9liorant r\u00e9sultats et moral.\"",
            "testimonials.person3": "Lahcen D. - CEO, Quanta Edge",
            "contact.eyebrow": "Contact",
            "contact.heading": "Envie d'\u00e9changer ?",
            "contact.copy": "Parlez-moi de vos objectifs et je vous expliquerai comment nous pouvons \u00e9laborer un plan performant. Remplissez le formulaire ou envoyez-moi un email directement.",
            "footer.name": "Nabil EL MERRAHI",
            "footer.title": "Marketing & communication 360\u00b0",
            "footer.social": "Trouvez-moi sur",
            "footer.rights": "\u00a9 2026 - Tous droits r\u00e9serv\u00e9s."
        },
        en: {
            "nav.presentation": "Presentation",
            "nav.about": "About",
            "nav.collabs": "Collaborations",
            "nav.work": "Projects",
            "nav.contact": "Contact",
            "hero.name": "Nabil EL MERRAHI",
            "hero.title": "Marketing and 360 Communication",
            "hero.tagline": "I design and lead data-driven marketing strategies, in B2B and B2C, blending direct and digital marketing. From strategy to execution, I turn insights into measurable, durable growth levers.",
            "hero.cta.primary": "Let's connect!",
            "hero.cta.portfolio": "View my portfolio",
            "about.eyebrow": "About",
            "about.heading": "Behind the Marketer",
            "about.body1": "Behind the strategies and the numbers is a human with a creative mindset, driven by rigor and performance. Trained in marketing between France and Morocco, I've developed a strategic vision that is deeply rooted in real-world execution, especially in international environments.",
            "about.body2": "I believe marketing only has value when it listens to the market, stays connected to field teams, and stays relentlessly results-driven.",
            "timeline.2025.title": "IAE Lyon - France",
            "timeline.2025.body": "Master's in Marketing and B2B Sales.",
            "timeline.2024.title": "ENCG F\u00e8s - Morocco",
            "timeline.2024.body": "National School of Commerce and Management diploma,<br>Marketing and Commercial Action track",
            "timeline.2023.title": "Certified by Google",
            "timeline.2023.body": "Professional project manager",
            "collabs.eyebrow": "Collaborations & references",
            "collabs.heading": "Brands and teams committed to performance:",
            "work.eyebrow": "Projects",
            "work.heading": "Campaigns and projects where strategy, creativity, and ROI meet.",
            "work.card1.title": "B2B Marketing Project Lead",
            "work.card1.subtitle": "Renault Trucks - Group VOLVO",
            "work.card1.body": "Performance and customer satisfaction optimization across the network by leading the \"Dealer Survey\" in 70 countries with 1,500 contacts.",
            "work.card1.result1": "+40% response rate (vs 2023)",
            "work.card1.result2": "+10 NPS points",
            "work.card1.result3": "Improved scores on 5/6 strategic satisfaction themes",
            "work.card2.title": "Marketing & Sales Coordinator",
            "work.card2.subtitle": "Devalt Sphere ESN",
            "work.card2.body": "Built a global marketing strategy for launching ALGOMED, a medical SaaS platform:",
            "work.card2.result1": "+38% prospect-to-client conversion",
            "work.card2.result2": "+85% social engagement",
            "work.card2.result3": "73% of marketing goals achieved",
            "work.card3.title": "Digital Marketer",
            "work.card3.subtitle": "WeBoost Group - Digital Agency",
            "work.card3.body": "Designed and ran paid campaigns (Meta Ads, Google Ads, SM) and digital strategies for 15+ clients.",
            "work.card3.result1": "Improved e-reputation for WeBoost and clients via Google My Business.",
            "work.card3.result2": "Tracked key KPIs (ROAS, CPA, AOV...)",
            "work.card3.result3": "ROI-focused marketing performance management.",
            "work.card4.title": "E-commerce Store Manager",
            "work.card4.subtitle": "Merch by Amazon - Print-on-Demand",
            "work.card4.body": "From market research to marketing activation, with focus on product creation, SEO, and paid campaign performance.",
            "work.card4.result1": "1,200+ units sold in European and North American markets",
            "work.card4.result2": "Managed ad budget: ~\u20ac2,500",
            "work.card4.result3": "Average ROAS estimated at 3.2",
            "work.card5.title": "AI Expert - Analytics, Generative",
            "work.card5.subtitle": "Outlier AI",
            "work.card5.body": "Evaluated and improved AI models, including analytical, generative, and LLM systems, in multilingual contexts.",
            "work.card5.result1": "6 AI and LLM projects (FR / EN)",
            "work.card5.result2": "Model evaluation, improvement, and tutoring",
            "work.card5.result3": "NLP, text, and image analysis",
            "work.card6.title": "Website Manager & Copywriter",
            "work.card6.subtitle": "Episteme Passion",
            "work.card6.body": "Managed an informational blog with a content-, SEO-, and monetization-driven approach.",
            "work.card6.result1": "100+ editorial pieces written and SEO-optimized",
            "work.card6.result2": "Organic AdSense monetization reached in 3 months",
            "work.card6.result3": "1,700+ monthly active readers",
            "expertise.eyebrow": "Expertise",
            "expertise.heading": "Strategy, performance, and storytelling that fuel sustainable growth.",
            "expertise.item1.title": "Marketing strategy & positioning",
            "expertise.item1.body": "Building B2B and B2C marketing strategies aligned to business goals, including market research and competitive intelligence.",
            "expertise.item2.title": "Branding & digital presence",
            "expertise.item2.body": "Brand development through social media management, audiovisual content creation, and community management.",
            "expertise.item3.title": "Digital marketing & activation",
            "expertise.item3.body": "Running digital programs (paid, owned, earned), crafting multichannel activation plans, and optimizing customer journeys.",
            "expertise.item4.title": "Performance management & data marketing",
            "expertise.item4.body": "Analyzing marketing and sales performance through KPIs, dashboards, and actionable recommendations.",
            "expertise.item5.title": "Project management & team coordination",
            "expertise.item5.body": "Leading marketing projects and coordinating cross-functional teams.",
            "expertise.item6.title": "CRM, experience & loyalty",
            "expertise.item6.body": "Optimizing customer and partner relationships for durable growth.",
            "testimonials.eyebrow": "Testimonials",
            "testimonials.heading": "Pragmatic, strategic, and collaborative.",
            "testimonials.quote1": "\"Nabil combines drive with operational clarity. Thanks to his commitment, our project exceeded expectations.\"",
            "testimonials.person1": "Val\u00e9rie Lyonnet - Director, Customer Experience, Renault Trucks",
            "testimonials.quote2": "\"A high-potential profile, able to add value anywhere rigor and commitment matter.\"",
            "testimonials.person2": "Youssef EL HASSANI - PhD in Marketing, ENCGF-USMBA",
            "testimonials.quote3": "\"Data-led and empathetic with the team, Nabil optimized our management and SaaS sales, improving both results and morale.\"",
            "testimonials.person3": "Lahcen D. - CEO, Quanta Edge",
            "contact.eyebrow": "Contact",
            "contact.heading": "Ready to talk?",
            "contact.copy": "Tell me about your goals and I'll map how we can build a high-performing plan. Fill out the form or email me directly.",
            "footer.name": "Nabil EL MERRAHI",
            "footer.title": "Marketing & Communication 360\u00b0",
            "footer.social": "Find me on",
            "footer.rights": "\u00a9 2026 - All rights reserved."
        }
    };

    const navLinks = document.querySelectorAll(".nav-link");
    const nav = document.getElementById("navbar");
    const toggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-links");
    const langSwitches = document.querySelectorAll(".lang-switch");
    const blockEvent = event => event.preventDefault();
    let currentLang = "en";
    const autoCacheKey = "i18nAutoCache";
    const autoCache = (() => {
        try {
            return JSON.parse(localStorage.getItem(autoCacheKey) || "{}");
        } catch {
            return {};
        }
    })();
    const pendingTranslations = {};

    const getDefaultLanguage = () => {
        const stored = localStorage.getItem("preferredLang");
        if (stored && translations[stored]) return stored;
        return "fr";
    };
    currentLang = getDefaultLanguage();

    const persistAutoCache = () => {
        try {
            localStorage.setItem(autoCacheKey, JSON.stringify(autoCache));
        } catch {
            /* noop */
        }
    };

    const translateToEnglish = key => {
        if (translations.en[key]) return Promise.resolve(translations.en[key]);
        if (autoCache[key]) {
            translations.en[key] = autoCache[key];
            return Promise.resolve(autoCache[key]);
        }
        if (pendingTranslations[key]) return pendingTranslations[key];

        const source = translations.fr[key];
        if (!source) return Promise.resolve(null);

        const payload = {
            q: source,
            source: "fr",
            target: "en",
            format: source.includes("<br") ? "html" : "text"
        };

        const promise = fetch("https://libretranslate.de/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
            .then(res => (res.ok ? res.json() : null))
            .then(data => {
                if (data && data.translatedText) {
                    translations.en[key] = data.translatedText;
                    autoCache[key] = data.translatedText;
                    persistAutoCache();
                    return data.translatedText;
                }
                return null;
            })
            .catch(() => null)
            .finally(() => {
                delete pendingTranslations[key];
            });

        pendingTranslations[key] = promise;
        return promise;
    };

    const updateLangSwitch = lang => {
        const isEn = lang === "en";
        langSwitches.forEach(btn => {
            btn.classList.toggle("is-en", isEn);
            btn.setAttribute("aria-pressed", String(isEn));
            btn.setAttribute("aria-label", isEn ? "Switch to French" : "Passer en anglais");
        });
    };

    const applyTranslations = lang => {
        const map = translations[lang];
        if (!map) return;
        document.documentElement.setAttribute("lang", lang);
        document.querySelectorAll("[data-i18n]").forEach(node => {
            const key = node.dataset.i18n;
            if (!key) return;
            const value = map[key];
            if (value === undefined) {
                if (lang === "en") {
                    const fallback = translations.fr[key];
                    if (fallback) {
                        if (node.dataset.i18nHtml === "true") node.innerHTML = fallback;
                        else node.textContent = fallback;
                        translateToEnglish(key).then(translated => {
                            if (!translated) return;
                            if (document.documentElement.getAttribute("lang") !== "en") return;
                            if (node.dataset.i18nHtml === "true") node.innerHTML = translated;
                            else node.textContent = translated;
                        });
                    }
                }
                return;
            }
            if (node.dataset.i18nHtml === "true") {
                node.innerHTML = value;
            } else {
                node.textContent = value;
            }
        });
        updateLangSwitch(lang);
    };

    const setLanguage = lang => {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem("preferredLang", lang);
        applyTranslations(lang);
    };

    langSwitches.forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(currentLang === "en" ? "fr" : "en");
            if (navMenu && navMenu.classList.contains("open")) {
                navMenu.classList.remove("open");
                if (toggle) toggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) return;
            target.scrollIntoView({ behavior: "smooth" });
            if (navMenu) navMenu.classList.remove("open");
            if (toggle) toggle.setAttribute("aria-expanded", "false");
        });
    });

    // Mobile nav toggle
    if (toggle && navMenu) {
        toggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

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
    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) nav.classList.add("scrolled");
            else nav.classList.remove("scrolled");
        });
    }

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

                applyTranslations(currentLang);
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

    applyTranslations(currentLang);
});
