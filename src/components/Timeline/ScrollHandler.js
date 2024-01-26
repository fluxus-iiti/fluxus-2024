let isScrolling = false;

export const handleScroll = () => {
  if (document.documentElement.scrollTop > 20) {
    document.querySelector("nav").classList.add("sticky");
  } else {
    document.querySelector("nav").classList.remove("sticky");
  }
};

export const setupScrollListeners = () => {
  window.onscroll = function () {
    handleScroll();
  };

  const scrollContainer = document.getElementById("scroll_container");
  const bar = document.getElementById("bar");
  if (bar) {
    bar.addEventListener("mouseover", () => {
      isScrolling = false;
    },
    {
      passive:true
    }
    );
  }
  if (scrollContainer) {

    scrollContainer.addEventListener("wheel", function (e) {
      if (!isScrolling && e.deltaY !== 0) {
        e.preventDefault();
        isScrolling = true;
        scrollContainer.scrollLeft = scrollContainer.scrollLeft + e.deltaY * 2;
      }
    },
    {
      passive:true
    }
    );

    scrollContainer.addEventListener("scroll", function () {
      isScrolling = false;
      // console.log("Scroll completed");
    });
  }
};
