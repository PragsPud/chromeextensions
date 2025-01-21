document.getElementById("fileInput").addEventListener("change", function (event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function (event) {
    var imageContainer = document.getElementById("imageContainer");
    var image = new Image();
    image.src = event.target.result;

    image.onload = function () {
      imageContainer.innerHTML = "";
      imageContainer.appendChild(image);
    };
  };

  reader.readAsDataURL(file);
});
