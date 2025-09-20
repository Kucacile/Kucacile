function toggleReadMore(button) {
  // Find the parent div of the button that was clicked
  var contentBlock = button.parentNode;

  // Find the 'dots' and 'more' spans within this specific content block
  var dots = contentBlock.querySelector(".dots");
  var moreText = contentBlock.querySelector(".more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    button.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}