jQuery(function ($) {
// ============================
// ✅ ページトップボタン
// ============================
  // const topBtn = document.querySelector(".pagetop");
  // if (topBtn) {
  //   topBtn.style.display = "none";

  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 70) {
  //       topBtn.style.display = "block";
  //     } else {
  //       topBtn.style.display = "none";
  //     }
  //   });

  //   topBtn.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   });
  // }
  const pageTop = jQuery('#js-pagetop-button');
  jQuery(window).on("scroll",function() {
    if(jQuery(window).scrollTop() > 300) {
      pageTop.fadeIn();
  } else {
    pageTop.fadeOut();
  }
});
pageTop.on("click",function() {
  jQuery('html, body').animate({
    scrollTop: 0
  }, 2500);
});


  // ============================
  // ✅ ローディングアニメーション
  // ============================
  window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading");
    const leftImage = document.querySelector(".image-half.left");
    const rightImage = document.querySelector(".image-half.right");
    const heading = document.querySelector(".heading");

    if (loadingScreen) loadingScreen.style.display = "block";

    //headingがある場合だけ　showをつける
    if(heading) {
    setTimeout(() => heading?.classList.add("show"), 800);
    }

    setTimeout(() => leftImage?.classList.add("js-slide-out-left"), 1800);
    setTimeout(() => rightImage?.classList.add("js-slide-out-right"), 2600);
    setTimeout(() => {
      if (loadingScreen) loadingScreen.style.display = "none";
    }, 5500);
  });

  // ============================
  // ✅ ハンバーガーメニュー
  // ============================
  const drawerIcon = document.querySelector(".drawer-icon");
  const drawer = document.querySelector(".drawer");
  const drawerNavItem = document.querySelectorAll('.drawer__body a[href^="#"]');
  const header = document.querySelector("header");
  const headerHeight = header ? header.offsetHeight : 0;
  const breakpoint = 768;
  let isMenuOpen = false;
  let isMenuOpenAtBreakpoint = false;

  const openMenu = () => {
    drawer?.classList.add("js-show");
    drawerIcon?.classList.add("js-show");
  };

  const closeMenu = () => {
    drawer?.classList.remove("js-show");
    drawerIcon?.classList.remove("js-show");
    isMenuOpen = false;
  };

  const toggleMenu = () => {
    if (drawer?.classList.contains("js-show")) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  drawerIcon?.addEventListener("click", toggleMenu);

  window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > breakpoint && isMenuOpenAtBreakpoint) {
      closeMenu();
    } else if (windowWidth <= breakpoint && drawer?.classList.contains("js-show")) {
      isMenuOpenAtBreakpoint = true;
    }
  });

  document.addEventListener("click", (e) => {
    if (drawer?.classList.contains("js-show") && !drawer.contains(e.target)) {
      if (isMenuOpen) {
        closeMenu();
      } else {
        isMenuOpen = true;
      }
    }
  });

  drawerNavItem.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      closeMenu();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  });

  // ============================
  // ✅ スムーススクロール
  // ============================
  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.hash);
      if (!target) return;
      e.preventDefault();
      const offsetTop = target.offsetTop - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
  });

  // ============================
  // ✅ ファーストビュースワイパー
  // ============================
  const mvSwiper = new Swiper('.mv__swiper', { // swiperの名前
  // 切り替えのモーション
  speed: 100000, // 表示切り替えのスピード
  effect: "fade", // 切り替えのmotion (※1)
  fadeEffect: {
        crossFade: true
    },
  allowTouchMove: false, // スワイプで表示の切り替えを無効に

  // 最後→最初に戻るループ再生を有効に
  loop: true,

  // 自動スライドについて
  autoplay: { 
    delay: 3000, // 何秒ごとにスライドを動かすか
    stopOnLastSlide: false, // 最後のスライドで自動再生を終了させるか
    disableOnInteraction: false, // ユーザーの操作時に止めない
    reverseDirection: false, // 自動再生を逆向きにする
  },
  
  // 表示について
  centeredSlides: true, // 中央寄せにする
  slidesPerView: "auto",
  spaceBetween: 30,
});

/* ===================================================
※1 effectについて
slide：左から次のスライドが流れてくる
fade：次のスライドがふわっと表示
■ fadeの場合は下記を記述
    fadeEffect: {
        crossFade: true
    },
cube：スライドが立方体になり、3D回転を繰り返す
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：カードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します

=======================================================
※2 paginationのタイプ
bullets：スライド枚数と同じ数のドットが表示
fraction：分数で表示（例：1 / 3）
progressbar：スライドの進捗に応じてプログレスバーが伸びる
custom：自由にカスタマイズ

=====================================================*/

// ============================
// ✅ キャンペーンスワイパー
// ============================

const campaignSwiper = new Swiper(".campaign-swiper", {
  loop: true,
  // loop: false,
  spaceBetween: 24,
  // slidesPerView: 1.2,
  slidesPerView: "auto",
  // slidesPerView: 1.5273,
  // centeredSlides: true,
  centeredSlides: false,
  slidesPerGroup: 1,
  keyboard: true,

  navigation: {
    nextEl: "#js-campaign-next",
    prevEl: "#js-campaign-prev",
  },
  breakpoints: {
    768: {
      // slidesPerView: 3.7,
      spaceBetween: 40,
    },
  //   // 600: {
  //   //   slidesPerView: 2,
  //   //   centeredSlides: true,
  //   // },
  //   // 900: {
  //   //   slidesPerView: 2.2,
  //   //   centeredSlides: false,
  //   // },
  //   // 1200: {
  //   //   slidesPerView: 3.2234,
  //   //   spaceBetween: 32,
  //   //   centeredSlides: false,
  //   // },
  },
});

/* ===================================================
※1 effectについて
slide：左から次のスライドが流れてくる
fade：次のスライドがふわっと表示
■ fadeの場合は下記を記述
    fadeEffect: {
        crossFade: true
    },
cube：スライドが立方体になり、3D回転を繰り返す
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：カードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します

=======================================================
※2 paginationのタイプ
bullets：スライド枚数と同じ数のドットが表示
fraction：分数で表示（例：1 / 3）
progressbar：スライドの進捗に応じてプログレスバーが伸びる
custom：自由にカスタマイズ

=====================================================*/

// ============================
// ✅colorbox (画像のアニメーション)
// ============================

$(function () {
  var box = $('.colorbox'),
      speed = 700;

  box.each(function () {
    $(this).prepend('<div class="color"></div>');
    var color = $(this).find('.color'),
        image = $(this).find('img');
    var counter = 0;


    // 初期状態
    image.css('opacity', '0');
    color.css({
      width: '100%',
      left: '100%',
      right: 'auto',
    });

    $(this).on('inview', function (event,isInView) {
      if (isInView && counter === 0) {
        color.animate({left: '0%'}, speed, function () {
          image.css('opacity', '1');
          color.animate({width: '0%'}, speed);
        });
        counter = 1;
      }
    });
  });
});
});
// });
