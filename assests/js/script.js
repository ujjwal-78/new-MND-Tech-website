$(document).ready(function () {

    // sidemenu stARTS
    $(".sidemenu-toggler").click(function () {
      $(".sidemenu").addClass("active");
    });
    $(".close").click(function () {
      $(".sidemenu").removeClass("active");
    });
    //sidemenu ends

    // customer-logos sTARTs
    $(".customer-logos").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    // customer-logos eNDs
});
