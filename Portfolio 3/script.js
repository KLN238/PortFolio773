document.addEventListener("DOMContentLoaded", function () {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Mise à jour immédiate
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("1tkgaPdIZxjW5F8dz"); // Remplace avec ta clé publique

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche la soumission classique

        // Récupération des valeurs du formulaire
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const responseMessage = document.getElementById("response-message");

        // Vérifier si tous les champs sont remplis
        if (!name || !email || !message) {
            responseMessage.innerHTML = "⚠️ Tous les champs doivent être remplis.";
            return;
        }

        // Envoi des données via EmailJS
        emailjs.send("service_Portfolio", "template_portfolio", {
            user_name: name,
            user_email: email,
            message: message
        })
        .then(() => {
            responseMessage.innerHTML = "✅ Message envoyé avec succès !";
            document.getElementById("contact-form").reset();
        }, (error) => {
            responseMessage.innerHTML = "❌ Erreur lors de l'envoi. Réessayez plus tard.";
            console.error("EmailJS Error:", error);
        });
    });
});
// ===============================
// 🌠 Étoiles Filantes Dynamiques
// ===============================
const starsContainer = document.querySelector(".stars");

function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // Position aléatoire
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;

    // Taille et durée aléatoires
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;

    starsContainer.appendChild(star);

    // Supprimer après animation
    setTimeout(() => {
        star.remove();
    }, 3000);
}

// Générer des étoiles en continu
setInterval(createStar, 700);


// ===============================
// 🎯 Effet de Texte Machine à Écrire
// ===============================
const typingText = document.querySelector(".typing-text");
const textToType = "Bienvenue sur mon Portfolio 🚀"; // Remplace avec ton texte
let index = 0;

function typeEffect() {
    if (index < textToType.length) {
        typingText.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

// Lancer l'effet après chargement
window.onload = () => {
    typeEffect();
};


// ===============================
// 🏗️ Effet d'Apparition en Scroll
// ===============================
const sections = document.querySelectorAll(".section");

function revealSections() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 50) {
            section.classList.add("visible");
        }
    });
}

// Lancer au scroll
window.addEventListener("scroll", revealSections);


// ===============================
// 🎨 Effet de Survol sur les Cartes Projets
// ===============================
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05) rotate(1deg)";
        card.style.boxShadow = "0 8px 16px rgba(255, 46, 99, 0.5)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });
});


// ===============================
// 📌 Effet de Secousse sur le Bouton de Contact
// ===============================
const contactButton = document.querySelector(".contact-table button");

function shakeButton() {
    contactButton.style.transform = "translateX(5px)";
    setTimeout(() => contactButton.style.transform = "translateX(-5px)", 100);
    setTimeout(() => contactButton.style.transform = "translateX(5px)", 200);
    setTimeout(() => contactButton.style.transform = "translateX(0)", 300);
}

// Animer toutes les 5 secondes
setInterval(shakeButton, 5000);
