$(window).ready(function () {
  let currentHeight = $(window).height();

  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    if (currentHeight - 10 <= scroll) {
      $(".site-nav").addClass("site-nav-scroll");
    } else {
      $(".site-nav").removeClass("site-nav-scroll");
    }
  });

  function setActiveNav(current) {
    $(".nav-link").removeClass("active-nav");
    $(`.nav-link[href='#${current}']`).addClass("active-nav");
  }

  (function scrollNav() {
    let currentActive = $("section[id]");
    console.log(currentActive[0]);
    currentActive.waypoint(
      function (direction) {
        if (direction == "down") {
          // id name ကို setActiveNav ထဲကို ထည့်တာပါ
          setActiveNav($(this.element).attr("id"));
          // console.log($(this.element).attr("id"));
        }
      },
      {
        offset: "150px",
      }
    );

    currentActive.waypoint(
      function (direction) {
        if (direction == "up") {
          setActiveNav($(this.element).attr("id"));
        }
      },
      {
        offset: "-10px",
      }
    );
  })();
});
