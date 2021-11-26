function myFunction() {
    let element = document.getElementsByClassName("burger")[0];
    element.classList.toggle("active");

    let menu_tog = document.getElementsByClassName("nav-menu")[0];
    menu_tog.classList.toggle("menu-toggler");

    //not mine

    let nav_link_toggle = document.querySelectorAll(".nav-link");
    console.log(nav_link_toggle);

    nav_link_toggle.forEach(n=>n.addEventListener("click",closemenu));

    function closemenu(){
        element.classList.remove("active");
        menu_tog.classList.remove("menu-toggler");   
    }
}
