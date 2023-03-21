function displayMobileNav() {
    var x = document.getElementById("mobileItemsID");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}