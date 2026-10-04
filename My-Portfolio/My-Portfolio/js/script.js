const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

const themeToggle = document.querySelector("#themeToggle");

const backToTop = document.querySelector("#backToTop");


/* ================= MOBILE MENU ================= */

if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("open");

        if (nav.classList.contains("open")) {

            menu.textContent = "✕";

        } else {

            menu.textContent = "☰";

        }

    });


    document.querySelectorAll("#nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menu.textContent = "☰";

        });

    });

}


/* ================= DARK / LIGHT MODE ================= */

if (themeToggle) {

    const savedTheme =
        localStorage.getItem("portfolio-theme");


    if (savedTheme === "light") {

        document.body.classList.add("light");

        themeToggle.textContent = "☾";

    }


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");


        const isLight =
            document.body.classList.contains("light");


        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );


        themeToggle.textContent =
            isLight ? "☾" : "☀";

    });

}


/* ================= BACK TO TOP ================= */

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/* ================= CURRENT YEAR ================= */

const year = document.querySelector("#year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}