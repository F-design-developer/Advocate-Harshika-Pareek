document.addEventListener("DOMContentLoaded", async () => {

    try {

        /* ==========================
           HEADER LOAD
        ========================== */

        const header = document.getElementById("header");

        if (header) {

            const headerResponse = await fetch("./components/header.html");
            header.innerHTML = await headerResponse.text();

            /* ==========================
               DISCLAIMER AFTER 5 SEC
            ========================== */

            setTimeout(() => {

                const disclaimerModal =
                    document.getElementById("disclaimerModal");

                if (!disclaimerModal) {
                    console.log("Disclaimer Modal Not Found");
                    return;
                }

                disclaimerModal.classList.add("show");
                disclaimerModal.style.display = "block";
                disclaimerModal.removeAttribute("aria-hidden");

                document.body.classList.add("modal-open");

                const backdrop = document.createElement("div");
                backdrop.className = "modal-backdrop fade show";
                backdrop.id = "customModalBackdrop";

                document.body.appendChild(backdrop);

            }, 2000);

            /* ==========================
               MODAL BUTTONS
            ========================== */

            document.addEventListener("click", function (e) {

                if (e.target.id === "disclaimerAgree") {

                    const modal =
                        document.getElementById("disclaimerModal");

                    if (modal) {
                        modal.classList.remove("show");
                        modal.style.display = "none";
                    }

                    document.body.classList.remove("modal-open");

                    const backdrop =
                        document.getElementById("customModalBackdrop");

                    if (backdrop) backdrop.remove();
                }

                if (e.target.id === "disclaimerExit") {

                    window.location.href =
                        "https://www.google.com";
                }

            });
        }

        /* ==========================
           FOOTER LOAD
        ========================== */

        const footer = document.getElementById("footer");

        if (footer) {

            const footerResponse =
                await fetch("./components/footer.html");

            footer.innerHTML =
                await footerResponse.text();
        }

        /* ==========================
           ACTIVE MENU
        ========================== */

        const currentPage =
            window.location.pathname.split("/").pop() ||
            "index.html";

        document.querySelectorAll(".nav-link").forEach(link => {

            const href = link.getAttribute("href");

            if (href === currentPage) {
                link.classList.add("active");
            }
        });

        /* ==========================
           AOS INIT
        ========================== */

        if (typeof AOS !== "undefined") {

            AOS.init({
                duration: 800,
                once: true
            });

            AOS.refresh();
        }

    } catch (err) {

        console.error("Includes Error:", err);
    }

});