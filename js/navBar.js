const clickToggle = (() => {
  let clickedBtn = false;
  const mobileLinksNav = document.querySelector(".mobileLinksNav");

  return (clicked = (btn) => {
    if (!clickedBtn) {
      clickedBtn = true;
      setTimeout(() => {
        // console.log("block");
        mobileLinksNav.style.display = "block";
        mobileLinksNav.style.animationName = "navAnimateUpToDown";
      }, 0);
    } else {
      clickedBtn = false;
      mobileLinksNav.style.animationName = "navAnimateDownToUp";
      setTimeout(() => {
        // console.log("none");
        mobileLinksNav.style.display = "none";
      }, 1000);
    }
  });
})();
