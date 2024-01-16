document.addEventListener("DOMContentLoaded", function() {
  console.log("app.js загружен!");
});

document.getElementById('openSearch').addEventListener('click', function () {
  var searchPopup = document.getElementById('searchPopup');
  searchPopup.style.display = 'block';
  setTimeout(function () {
    searchPopup.classList.add('open');
  }, 50);
});

document.getElementById('closeSearch').addEventListener('click', function () {
  var searchPopup = document.getElementById('searchPopup');
  searchPopup.classList.remove('open');
  setTimeout(function () {
    searchPopup.style.display = 'none';
  }, 300);
});

// Close popup if clicked outside the popup content
window.addEventListener('click', function (event) {
  var searchPopup = document.getElementById('searchPopup');
  if (event.target === searchPopup) {
    searchPopup.classList.remove('open');
    setTimeout(function () {
      searchPopup.style.display = 'none';
    }, 300);
  }
});

// Change image
document.addEventListener("DOMContentLoaded", function () {
  var mainImage = document.querySelector('.item-container-img--main img');
  var itemImages = document.querySelectorAll('.item-container-img-list .item-img');

  itemImages.forEach(function (itemImage) {
    itemImage.addEventListener('click', function () {
      // Убираем класс 'selected' у всех изображений
      itemImages.forEach(function (img) {
        img.classList.remove('selected');
      });

      // Добавляем класс 'selected' к выбранному изображению
      itemImage.classList.add('selected');

      // Меняем главное изображение на выбранное
      var newSrc = itemImage.src;
      mainImage.src = newSrc;
    });
  });
});


function toggleDropdown() {
  var dropdownContent = document.getElementById("sizeDropdown").getElementsByClassName("dropdown-content")[0];
  var icon = document.getElementById("toggleIcon");

  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    document.querySelector('.selected-size').classList.remove('open');
  } else {
    dropdownContent.style.display = "block";
    document.querySelector('.selected-size').classList.add('open');
  }
}

function selectSize(size) {
  var selectedSizeText = document.getElementById("selectedSizeText");
  selectedSizeText.innerHTML = size;
  toggleDropdown();
}

