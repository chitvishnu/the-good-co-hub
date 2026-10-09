
// ========================================
// THE GOOD CO HUB — LOADER & FAQ
// ========================================



// ===== PAGE LOADER — FIX =====
(function () {
    function hideLoaders() {
        const loaders = document.querySelectorAll(
            "#page-loader, #siteLoader, .site-loader"
        );

        loaders.forEach(function (loader) {
            setTimeout(function () {
                loader.classList.add("hidden", "loader-hidden");
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
                loader.style.pointerEvents = "none";
                loader.style.display = "none";
            }, 1000);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", hideLoaders, {
            once: true
        });
    } else {
        hideLoaders();
    }
})();


// ===== 2. HOME PAGE FAQ =====

(function () {
    function initHomeFAQ() {
        const questions = document.querySelectorAll(".faq-question");

        questions.forEach(function (question) {
            if (question.dataset.faqBound === "true") return;
            question.dataset.faqBound = "true";

            const item = question.closest(".faq-item");
            const answer = item?.querySelector(".faq-answer");
            const icon = question.querySelector(".faq-icon");

            if (!item || !answer) {
                console.warn("Home FAQ answer or item is missing:", question);
                return;
            }

            // Set initial state
            answer.hidden = true;
            question.setAttribute("aria-expanded", "false");

            if (icon) icon.textContent = "+";

            question.addEventListener("click", function () {
                const isOpen =
                    question.getAttribute("aria-expanded") === "true";

                question.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );

                item.classList.toggle("active", !isOpen);
                answer.hidden = isOpen;

                if (icon) {
                    icon.textContent = isOpen ? "+" : "−";
                }
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initHomeFAQ, {
            once: true
        });
    } else {
        initHomeFAQ();
    }
})();


// ===== 3. FAQ PAGE =====

(function () {
    function initFAQPage() {
        const questions = document.querySelectorAll(
            ".faq-page-question"
        );

        questions.forEach(function (question) {
            if (question.dataset.faqBound === "true") return;
            question.dataset.faqBound = "true";

            const item = question.closest(".faq-page-item");
            const answer = item?.querySelector(".faq-page-answer");
            const icon = question.querySelector(".faq-page-icon");

            if (!item || !answer) {
                console.warn("FAQ page answer or item is missing:", question);
                return;
            }

            // Set initial state
            answer.hidden = true;
            question.setAttribute("aria-expanded", "false");

            if (icon) icon.textContent = "+";

            question.addEventListener("click", function () {
                const isOpen =
                    question.getAttribute("aria-expanded") === "true";

                question.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );

                item.classList.toggle("active", !isOpen);
                answer.hidden = isOpen;

                if (icon) {
                    icon.textContent = isOpen ? "+" : "−";
                }
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initFAQPage, {
            once: true
        });
    } else {
        initFAQPage();
    }
})();
// ========================================
// REGISTRATION FORM → WHATSAPP
// THE GOOD CO HUB
// ========================================

(function () {
    function initRegistrationWhatsApp() {
        const form = document.getElementById("registrationForm");

        if (!form || form.dataset.whatsappBound === "true") {
            return;
        }

        form.dataset.whatsappBound = "true";

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get values from your existing contact.html fields
            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const weekend = document.getElementById("weekend").value;
            const message = document.getElementById("message").value.trim();

            const formMessage = document.getElementById("formMessage");

            // Validate required fields
            if (!name || !phone || !email || !weekend) {
                if (formMessage) {
                    formMessage.textContent =
                        "Please complete all required fields.";
                } else {
                    alert("Please complete all required fields.");
                }
                return;
            }

            // Client's WhatsApp number, including India's country code
            const businessWhatsApp = "916302106405";

            // Create the registration message
            const whatsappMessage = [
                "Hello The Good Co Hub! 👋",
                "",
                "I'd like to register my interest in joining a party.",
                "",
                "Name: " + name,
                "Customer WhatsApp Number: " + phone,
                "Email: " + email,
                "Preferred Session: " + weekend,
                "Additional Information: " + (message || "None"),
                "",
                "Please share the next steps. Thank you!"
            ].join("\n");

            const whatsappURL =
                "https://wa.me/" +
                businessWhatsApp +
                "?text=" +
                encodeURIComponent(whatsappMessage);

            // Open WhatsApp with the customer's details prefilled
            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initRegistrationWhatsApp,
            { once: true }
        );
    } else {
        initRegistrationWhatsApp();
    }
})();