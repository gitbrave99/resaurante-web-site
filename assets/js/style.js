window.addEventListener("load", (event) => {
    var buttonTop = document.getElementById("buttonTop");
    showTopButtonScroll(200);
    goTopButton();



    function showTopButtonScroll(screenPX) {
        //second form to get scroll event
        // window.onscroll = () => {
        // }
        //second form to get scroll event
        window.addEventListener("scroll", evt => {
            var currentPX = document.documentElement.scrollTop;

            (currentPX > screenPX) ? buttonTop.style.right = 20 + "px": buttonTop.style.right = -100 + "px"
            console.log(currentPX);
        });
    }

    function goTopButton() {
        buttonTop.addEventListener("click", (evt) => {
            console.log("behavior");
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    }
})