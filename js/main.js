  var menuButton = document.querySelector(".navbar-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".navbar-mobile").toggleAttribute("hidden");
    document.querySelector(".navbar-button").toggleAttribute("hidden");
  });
  var closeButton = document.querySelector(".navbar-mobile__close");
   closeButton.addEventListener("click", function () {
    document.querySelector(".navbar-mobile").toggleAttribute("hidden");
    document.querySelector(".navbar-button").toggleAttribute("hidden");
  });

