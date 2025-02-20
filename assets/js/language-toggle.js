document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            home: "Home",
            about: "About",
            service: "Service",
            portfolio: "Portfolio",
            contact: "Contact",
            hireMe: "Hire me",
            exploreMore: "Explore more",
            title: "Machine Learning Engineer",
            aboutMe: "Hi, I'm Vikram – a Machine Learning Engineer. I build intelligent vision systems using computer vision, deep learning, 3D vision, and AI. Passionate about object detection, synthetic data, and robotics perception, I turn complex data into actionable insights. Let’s create something innovative together!",
            downloadCV: "Download my CV",
            skills: "My Skills",
            whatIDo: "What I Do",
            message: "Message",
            experience: "Year Experience",
            projects: "Projects Delivered",
            contactMe: "Contact",
            send: "Hire Me",
            lang: "Language",
            info: "More Information",
            work: "My Recent Works",
            second: "Seconds on this site!<br>What are you waiting for?",
        },
        de: {
            home: "Startseite",
            about: "Über mich",
            service: "Dienstleistungen",
            portfolio: "Portfolio",
            contact: "Kontakt",
            hireMe: "Stellen Sie mich ein",
            exploreMore: "Mehr entdecken",
            title: "Maschinelles Lernen Ingineur",
            aboutMe: "Hallo, ich bin Vikram – ein maschinelles lernen Ingenieur. Ich entwickle intelligente Bildverarbeitungssysteme mit computer vision, Deep Learning, 3D-Vision und KI. Leidenschaftlich interessiert an Objekterkennung, synthetischen Daten und Robotik-Wahrnehmung, verwandle ich komplexe Daten in umsetzbare Erkenntnisse. Lassen Sie uns gemeinsam etwas Innovatives schaffen!",
            downloadCV: "Lade meinen Lebenslauf herunter",
            skills: "Meine Fähigkeiten",
            whatIDo: "Was ich biete",
            message: "Nachricht",
            experience: "Jahre Erfahrung",
            projects: "Projekte geliefert",
            contactMe: "Kontakt",
            send: "Senden",
            lang: "Sprache",
            info: "Mehr Information",
            work: "Meine neusten Arbeiten",
            second: "Sekunden auf dieser Seite!<br>Worauf warten Sie?"
        }
    };

    let currentLang = "en"; // Default language
    const langToggle = document.getElementById("lang-toggle");
    const langOptions = document.querySelectorAll(".lang-option");

    function updateContent(lang) {
        document.getElementById("nav-home").textContent = translations[lang].home;
        document.getElementById("nav-about").textContent = translations[lang].about;
        document.getElementById("nav-service").textContent = translations[lang].service;
        document.getElementById("nav-portfolio").textContent = translations[lang].portfolio;
        document.getElementById("nav-contact").textContent = translations[lang].contact;
        document.getElementById("nav-hireme").textContent = translations[lang].hireMe;
        document.getElementById("nav-exploremore").textContent = translations[lang].exploreMore;
        document.getElementById("nav-title").textContent = translations[lang].title;
        document.getElementById("heading-about").textContent = translations[lang].about;
        document.getElementById("nav-downloadcv").textContent = translations[lang].downloadCV;
        document.getElementById("nav-aboutme").textContent = translations[lang].aboutMe;
        document.getElementById("nav-skills").textContent = translations[lang].skills;
        document.getElementById("nav-whatido").textContent = translations[lang].whatIDo;
        document.getElementById("nav-experience").textContent = translations[lang].experience;
        document.getElementById("nav-project").textContent = translations[lang].projects;
        document.getElementById("nav-second").innerHTML = translations[lang].second;
        document.getElementById("nav-contactme").textContent = translations[lang].contactMe;
        document.getElementById("nav-message").placeholder = translations[lang].message;
        document.getElementById("nav-send").textContent = translations[lang].send;
        document.getElementById("nav-work").textContent = translations[lang].work;
        document.getElementById("info").textContent = translations[lang].info;
        langToggle.textContent = translations[lang].lang + " ▼"; // Update dropdown text
    }

    langOptions.forEach(option => {
        option.addEventListener("click", function () {
            currentLang = this.getAttribute("data-lang");
            updateContent(currentLang);
        });
    });

    // Initialize language on page load
    updateContent(currentLang);
});
