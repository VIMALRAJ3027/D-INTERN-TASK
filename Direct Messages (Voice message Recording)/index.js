document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.querySelector(".side-bar");
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", function () {
        sidebarToggle.classList.toggle("active");
      });
    }
  
    const profileDropdown = document.querySelector(".profile");
    if (profileDropdown) {
      profileDropdown.addEventListener("click", function () {
        profileDropdown.classList.toggle("dropdown-active");
      });
    }
  
    const searchInput = document.querySelector(".search input");
    const searchResults = document.querySelector(".search-results");
    if (searchInput && searchResults) {
      searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const items = searchResults.querySelectorAll(".result-item");
        items.forEach((item) => {
          const text = item.textContent.toLowerCase();
          if (text.includes(query)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    }

  });
  