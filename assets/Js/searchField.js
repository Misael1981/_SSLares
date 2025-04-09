export function searchField() {
  document.addEventListener("DOMContentLoaded", function () {
    const inputSearch = document.getElementById("searchInput");
    const ul = document.getElementById("productSearch");
    const li = ul.getElementsByTagName("li");

    inputSearch.onkeyup = function () {
      const filter = inputSearch.value.toLowerCase();
      ul.style.visibility = filter ? "visible" : "hidden";

      for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];
        const txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    };
  });
}
