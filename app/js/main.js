(function($) {
  var hamburger = $('.navbar__opener'),
      menu = $('.navbar__menu'),
      navText = $('.navbar__text'),
      burgerIcon = $('.navbar__burger'),
      closeIcon = $('.navbar__burger--close'),
      menuList = $('.navbar__menu__list li'),
      menuShare = $('.navbar__menu__share'),
      introHeading = $('.intro__heading'),
      introContent = $('.intro__content'),
      tlToggleMenu = new TimelineLite(),
      tlMenuList = new TimelineLite(),
      tlHeader = new TimelineLite();

  var lineWrap = $('.navbar__burger__line-wrap'),
      lineoff = $('.navbar__burger__lineoff'),
      lineoffLeft = $('.navbar__burger__lineoff--left'),
      lineoffRight = $('.navbar__burger__lineoff--right'),
      navText = $('.navbar__text'),
      tlMenu = new TimelineLite();

  /// Home Header Animation
  tlHeader
    //.from(introHeading, 0.5, {y: 50, autoAlpha: 0, ease: Power1.easeOut})
    .from(introContent, 0.5, {y: 50, autoAlpha: 0, ease: Power0.easeNone});
  
  /// Hamburger menu toggle
  hamburger.on('click', function() {
    if (menu.hasClass('navbar__menu--opened')) {
      menu.removeClass('navbar__menu--opened');
      hamburger.removeClass('navbar__opener--fixed');
      tlToggleMenu
        .to(closeIcon, 0.2, {autoAlpha: 0, ease: Power3.easeInOut})
        .to(burgerIcon, 0.2, {autoAlpha: 1, ease: Power3.easeInOut})
        .to(navText, 0.2, {autoAlpha: 1, scale: 1, ease: Power0.easeNone}, '-=0.2');
    } else {
      menu.addClass('navbar__menu--opened');
      hamburger.addClass('navbar__opener--fixed');
      tlToggleMenu
        //.to(lineWrap, 0, {opacity: 0})
        .staggerTo(lineoff, 0.3, {x: 24, ease: Power2.easeOut}, 0.1)
        .to(burgerIcon, 0.2, {autoAlpha: 0, ease: Power3.easeInOut})
        .to(navText, 0.2, {autoAlpha: 0, scale: 0, ease: Power0.easeNone}, '-=0.2')
        .to(closeIcon, 0.2, {autoAlpha: 1, ease: Power0.easeNone});
      tlMenuList
        .staggerFrom(menuList, 0.8, {y: -25, autoAlpha: 0, ease: Power1.easeOut}, 0.1)
        .from(menuShare, 0.5, {y: 25, autoAlpha: 0, ease: Power1.easeOut}, '-=0.2');
    }
  });

  ///
  hamburger.hover(function() {
    TweenLite.to(lineoffLeft, 0.5, {y: 0, ease: Power2.easeOut});
    TweenLite.to(lineoffRight, 0.5, {x: 0, ease: Power2.easeOut});
    tlMenu.staggerTo(lineoff, 0.5, {x: 0, ease: Power2.easeOut}, 0.1);
  }, function() {
    TweenLite.to(lineoffLeft, 0.5, {y: -24, ease: Power2.easeOut});
    TweenLite.to(lineoffRight, 0.5, {x: 24, ease: Power2.easeOut});
    tlMenu.staggerTo(lineoff, 0.5, {x: 24, ease: Power2.easeOut}, 0.1);
  });

  ///
  var link = $('.navbar__menu__list__link'),
      layer = $('.navbar__menu__list__layer');

  link.hover(function() {
    TweenLite.to(layer, 1, {x: 0, ease: Power3.easeInOut});
  }, function() {
    TweenLite.to(layer, 1, {x: '-100%', ease: Power3.easeInOut});
  });

link.on('click', function() {
    if (menu.hasClass('navbar__menu--opened')) {
      menu.removeClass('navbar__menu--opened');
      hamburger.removeClass('navbar__opener--fixed');
      tlToggleMenu
        .to(closeIcon, 0.2, {autoAlpha: 0, ease: Power3.easeInOut})
        .to(burgerIcon, 0.2, {autoAlpha: 1, ease: Power3.easeInOut})
        .to(navText, 0.2, {autoAlpha: 1, scale: 1, ease: Power0.easeNone}, '-=0.2');
    } else {
      menu.addClass('navbar__menu--opened');
      hamburger.addClass('navbar__opener--fixed');
      tlToggleMenu
        //.to(lineWrap, 0, {opacity: 0})
        .staggerTo(lineoff, 0.3, {x: 24, ease: Power2.easeOut}, 0.1)
        .to(burgerIcon, 0.2, {autoAlpha: 0, ease: Power3.easeInOut})
        .to(navText, 0.2, {autoAlpha: 0, scale: 0, ease: Power0.easeNone}, '-=0.2')
        .to(closeIcon, 0.2, {autoAlpha: 1, ease: Power0.easeNone});
      tlMenuList
        .staggerFrom(menuList, 0.8, {y: -25, autoAlpha: 0, ease: Power1.easeOut}, 0.1)
        .from(menuShare, 0.5, {y: 25, autoAlpha: 0, ease: Power1.easeOut}, '-=0.2');
    }
  });

  /// Portfolio Animation
  var excerpt = $('.portfolio__excerpt'),
      excerptImg = $('.bg-container img'),
      excerptTitle = $('.portfolio__excerpt__title'),
      excerptTag = $('.portfolio__excerpt__tag'),
      excerptLine = $('.portfolio__excerpt__line'),
      excerptShield = $('.info-shield');

  excerpt.hover(function() {
    TweenLite.to($(this).find(excerptImg), 0.6, {scale: 1.1, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(excerptTitle), 0.6, {autoAlpha: 0, y: 15}, {autoAlpha: 1, y: 0, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(excerptTag), 0.6, {autoAlpha: 0, y: -15}, {autoAlpha: 0.8, y: 0, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(excerptLine), 0.6, {autoAlpha: 0, scale: 0}, {autoAlpha: 0.4, scale: 1.0, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(excerptShield), 0.6, {autoAlpha: 0}, {autoAlpha: 0.4, ease: Power1.easeInOut});
  }, function() {
    TweenLite.to($(this).find(excerptImg), 0.6, {scale: 1.0, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(excerptTitle), 0.6, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 15, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(excerptTag), 0.6, {autoAlpha: 0.8, y: 0}, {autoAlpha: 0, y: -15, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(excerptLine), 1.0, {autoAlpha: 0.4, scale: 1.0}, {autoAlpha: 0, scale: 0, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(excerptShield), 0.6, {autoAlpha: 0.4}, {autoAlpha: 0, ease: Power1.easeInOut});
  });

  /// Image Grid
  var imgItem = $('.img-item'),
      imgImg = $('.img-item img'),
      imgShield = $('.info-shield'),
      imgInfo = $('.img-info');
  imgItem.hover(function() {
    TweenLite.to($(this).find(imgImg), 0.6, {scale: 1.1, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(imgShield), 0.6, {autoAlpha: 0}, {autoAlpha: 0.4, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(imgInfo), 0.6, {autoAlpha: 0, y: -15}, {autoAlpha: 1, y: 0, ease: Power1.easeInOut});
  }, function() {
    TweenLite.to($(this).find(imgImg), 0.6, {scale: 1.0, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(imgShield), 0.6, {autoAlpha: 0.4}, {autoAlpha: 0, ease: Power1.easeInOut});
    TweenLite.fromTo($(this).find(imgInfo), 0.6, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: -15, ease: Power1.easeInOut});
  });

  /// Button Hover
  var btn = $('.btn'),
      btnText = $('.btn__text:before');

  // btn.hover(function() {
  //   TweenLite.to($(this).find(btnText), 0.6, {width: 22px, autoAlpha: 1, marginRight: 12px, ease: Power1.easeInOut});
  // });









})(jQuery);