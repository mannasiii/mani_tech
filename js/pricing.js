document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".pricing-tab");
    const groups = document.querySelectorAll(".pricing-group");

    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {

            const category = tab.getAttribute("data-category");

            tabs.forEach(function (item) {
                item.classList.remove("active");
            });

            groups.forEach(function (group) {
                group.classList.remove("active");
            });

            tab.classList.add("active");

            const target = document.querySelector(
                '.pricing-group[data-group="' + category + '"]'
            );

            if (target) {
                target.classList.add("active");
            }

            const section = document.querySelector(".pricing-section");

            if (section && window.innerWidth < 768) {
                setTimeout(function () {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 60);
            }
        });
    });

});
