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

  function changeMobileMenuIcon() {
    if ($(".navbar-toggler").hasClass("collapsed")) {
      $(".mobile-menu-btn .mobile-menu-icon")
        .removeClass("fa-xmark")
        .addClass("fa-bars");
    } else {
      $(".mobile-menu-btn .mobile-menu-icon")
        .addClass("fa-xmark")
        .removeClass("fa-bars");
    }
  }

  $(".mobile-menu-btn").click(function () {
    changeMobileMenuIcon();
  });

  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
    changeMobileMenuIcon();
  });

  function setActiveNav(current) {
    $(".nav-link").removeClass("active-nav");
    $(`.nav-link[href='#${current}']`).addClass("active-nav");
  }

  (function scrollNav() {
    let currentActive = $("section[id]");

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
