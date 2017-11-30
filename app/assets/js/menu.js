/**
 * Created by rodin on 7/16/17.
 */

var navbar_initialized,
  backgroundOrange = false,
  toggle_initialized = false;

$(document).ready(function() {

  $(window).trigger("resize");
  init_fullscreen_menu();
});


$(window).resize(function(){
  if( $(window).width() < 992 ){
    // nowuiKit.initRightMenu();
  }
});

var fm_menu_wrap = $("#fullscreen-menu");
var fm_menu_button = $(".navbar-toggler");

function init_fullscreen_menu(){

  fm_menu_button.click(function(){

    if ($(this).hasClass("animation-process")){
      return false;
    }
    else{
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").css("z-index", "2001").addClass("animation-process");;

        fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function(){
          fm_menu_wrap.fadeOut(function(){
            fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
            fm_menu_button.css("z-index", "1030").removeClass("animation-process");

          });
        });

        if ($(".owl-carousel").lenth) {
          $(".owl-carousel").data("owlCarousel").play();
        }

      }
      else {
        if ($(".owl-carousel").lenth) {
          $(".owl-carousel").data("owlCarousel").stop();
        }
        $(this).addClass("active").css("z-index", "2001").addClass("animation-process");

        fm_menu_wrap.fadeIn(function(){
          fm_menu_wrap.find(".fm-wrapper-sub").addClass("js-active");
          fm_menu_button.removeClass("animation-process");
        });
      }

      return false;
    }

  });

  $("#fullscreen-menu").find("a:not(.fm-has-sub)").click(function(){

    if (fm_menu_button.hasClass("animation-process")){
      return false;
    }
    else {
      fm_menu_button.removeClass("active").css("z-index", "2001").addClass("animation-process");

      fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function(){
        fm_menu_wrap.fadeOut(function(){
          fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
          fm_menu_button.css("z-index", "1030").removeClass("animation-process");

        });
      });

      if ($(".owl-carousel").lenth) {
        $(".owl-carousel").data("owlCarousel").play();
      }
    }
  });

  // Sub menu

  var fmHasSub = $(".fm-has-sub");
  var fmThisLi;

  fmHasSub.click(function(){

    fmThisLi = $(this).parent("li:first");
    if (fmThisLi.hasClass("js-opened")) {
      fmThisLi.find(".fm-sub:first").slideUp(function(){
        fmThisLi.removeClass("js-opened");
        fmThisLi.find(".fm-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
      });
    }
    else {
      $(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
      fmThisLi.addClass("js-opened");
      fmThisLi.find(".fm-sub:first").slideDown();
    }

    return false;

  });

}
