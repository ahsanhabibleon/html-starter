const navList = document.querySelector(".nav-list") as HTMLElement,
  navitem = navList.querySelectorAll("a");

Array.prototype.map.call(navitem, (item) => {
  navList.addEventListener("click", (e) => {
    item.contains(e.target)
      ? item.classList.add("active-item")
      : item.classList.remove("active-item");
  });
});

import removeSpace from "@letsgrowtogetherwithahsan/npm-package-one";

removeSpace("So much spaces!");
//=> "Somuchspace!"

removeSpace(1337);
