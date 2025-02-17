

    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");

        // فتح وإغلاق القائمة عند الضغط على زر القائمة
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // إغلاق القائمة عند الضغط على أي رابط داخلها
        document.querySelectorAll(".nav-links li a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });

        // تأثير التمرير البطيء عند ظهور العناصر
        const elements = document.querySelectorAll(".slow-motion");
        const scrollHandler = () => {
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    element.style.opacity = "1";
                    element.style.transform = "translateY(0)";
                }
            });
        };

        document.addEventListener("scroll", scrollHandler);
        scrollHandler(); // تشغيل التأثير فور التحميل
    });
