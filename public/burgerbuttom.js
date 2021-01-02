function myFunction(x) {
  x.classList.toggle("change");
}

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});



$(".click1").on("click", function() {
  $(".deleteproduct1, .col-11").addClass("hidden");
});
