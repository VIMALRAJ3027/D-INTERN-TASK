document.addEventListener("DOMContentLoaded", () => {
    const toggleSidebar = () => {
      const sidebar = document.querySelector(".side-bar");
      sidebar.classList.toggle("active");
    };
  
    const toggleProfileDropdown = () => {
      const dropdown = document.querySelector(".profile .arrow-down-icon");
      dropdown.classList.toggle("active");
    };
  
    const handleSearch = () => {
      const searchInput = document.querySelector(".search2").textContent.toLowerCase();
      const items = document.querySelectorAll(".name b");
  
      items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchInput)) {
          item.closest(".name").style.display = "";
        } else {
          item.closest(".name").style.display = "none";
        }
      });
    };
  
    document.querySelector(".search1").addEventListener("click", handleSearch);
    document.querySelector(".profile-icon").addEventListener("click", toggleProfileDropdown);
    document.querySelector(".side-bar-child").addEventListener("click", toggleSidebar);
  
    const followButtons = document.querySelectorAll(".follow");
    followButtons.forEach(button => {
      button.addEventListener("click", () => {
        button.textContent = button.textContent === "Follow" ? "Following" : "Follow";
        button.classList.toggle("following");
      });
    });
  
    const tipsButtons = document.querySelectorAll(".tips");
    tipsButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Thank you for your support!");
      });
    });
  });
  