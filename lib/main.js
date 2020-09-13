$(document).ready(function () {
  $(".hamburger-wrapper").on("click", function () {
    $(".hamburger-menu").toggleClass("animate");
    $(".nav-container").slideToggle(500);
  });
});