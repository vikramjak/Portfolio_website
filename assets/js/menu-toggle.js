document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".site-header");

    document.addEventListener("mousemove", function (event) {
        if (event.clientY < 50) {
            // If the cursor is at the top 50px of the screen, show the menu
            header.classList.add("show-menu");
        } else {
            // Otherwise, hide the menu
            header.classList.remove("show-menu");
        }
    });
});
