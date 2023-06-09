document.addEventListener("DOMContentLoaded", function() {
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
  var image = document.getElementById("image");

  button1.addEventListener("click", function() {
    image.src = "img1.jpg";
  });

  button2.addEventListener("click", function() {
    image.src = "img2.jpg";
  });

  button3.addEventListener("click", function() {
    image.src = "img3.jpg";
  });
});
