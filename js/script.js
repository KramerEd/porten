(function () {
    const header = document.querySelector(".header__nav");
    window.onscroll = () => {
        if (window.pageYOffset > 30) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    };
})();
