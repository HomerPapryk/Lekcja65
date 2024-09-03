document.getElementById("searchKitty").addEventListener("click", function () {
  const apiUrl = "https://api.thecatapi.com/v1/images/search";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        const firstItem = data[0];
        const imgUrl = firstItem.url;

        const imgElement = document.createElement("img");
        imgElement.src = imgUrl;
        imgElement.setAttribute("data-test", "img-kitty");

        const kittyContainer = document.getElementById("kittyContainer");
        kittyContainer.innerHTML = "";
        kittyContainer.appendChild(imgElement);
      } else {
        console.error("API zwróciło nieoczekiwane dane");
      }
    })
    .catch((error) => {
      console.error("Wystąpił błąd podczas pobierania danych:", error);
    });
});
