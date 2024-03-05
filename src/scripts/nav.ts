function onMenuToggle(e: any) {
  const navlinks = document.querySelector(".navLinks");
  e.name = e.name === "menu" ? "close" : "menu";
  if (navlinks) navlinks.classList.toggle("left-[0%]");
}

document.addEventListener("astro:page-load", () => {
  const mainHeaderMenuBtn = document.querySelector("#main-header-menu");
  if (mainHeaderMenuBtn)
    mainHeaderMenuBtn.addEventListener("click", (e) => {
      onMenuToggle(e);
    });
});
