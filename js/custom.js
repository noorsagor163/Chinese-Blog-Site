$(function() {


  //==================Sticky Menu Start==================

  $(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling >= 180) {
        $(".navbar").addClass("sticky");
    } else {
        $(".navbar").removeClass("sticky");
    }
});

//==================Sticky Menu End==================

    $('.header-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        fade:true,
        dots:true,
      });

      $('.banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
      });

      $('.blog-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow:".left",
        nextArrow:".right",
        dots:true,
      });

});