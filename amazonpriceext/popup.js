document.addEventListener("DOMContentLoaded", function() {
  var checkPriceButton = document.getElementById("checkPrice");
  checkPriceButton.addEventListener("click", function() {
    var productLink = document.getElementById("productLink").value;
    var productId = extractProductId(productLink);
    if (productId) {
      fetchProductPrice(productId)
        .then(function(price) {
          var priceElement = document.getElementById("price");
          priceElement.textContent = "Price: ₹" + price.toFixed(2);
        })
        .catch(function(error) {
          var priceElement = document.getElementById("price");
          priceElement.textContent = "Error fetching price";
          console.error(error);
        });
    } else {
      var priceElement = document.getElementById("price");
      priceElement.textContent = "Invalid Amazon product link";
    }
  });

  function extractProductId(productLink) {
    var regex = /\/dp\/([A-Za-z0-9]+)/;
    var match = regex.exec(productLink);
    if (match && match[1]) {
      return match[1];
    }

    regex = /\/([A-Za-z0-9]{10})(?:\/|$|\?)/;
    match = regex.exec(productLink);
    if (match && match[1]) {
      return match[1];
    }

    return null;
  }

  function fetchProductPrice(productId) {
    var url = "https://www.amazon.in/dp/" + productId;
    return fetch(url)
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        var regex = /<span[^>]*class=["']?a-offscreen["']?[^>]*>([^<]+)/;
        var match = regex.exec(html);
        if (match && match[1]) {
          var priceString = match[1].replace("₹", "").replace(",", "");
          return parseFloat(priceString);
        }
        throw new Error("Price not found");
      });
  }
});