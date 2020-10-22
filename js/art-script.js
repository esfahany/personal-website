// Get the modal
var modal = document.getElementById('art_modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.art_img');
console.log(img);
var modalImg = $("#art_img_modal");
var captionText = document.getElementById("caption");
$('.art_img').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}