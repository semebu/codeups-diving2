
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ページトップボタン処理
  var topBtn = $('.pagetop');
  topBtn.hide();

  //スクロールでページトップボタン表示
  $(window).scroll(function () {
    if($(this).scrollTop()> 70) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });



  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ========================================
  // ✅ ローディングアニメーション
  // ========================================
  window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading');
    const leftImage = document.querySelector('.image-half.left');
    console.log('leftImage', leftImage);
    const rightImage = document.querySelector('.image-half.right');
    const heading = document.querySelector('.heading');

    // ローディングをまず表示させる(display:block;)
    loadingScreen.style.display = "block";

    // ③ テキストフェードイン
      setTimeout(() => {
        heading.classList.add('show');
      }, 800);//テキストは2.２秒後

    // アニメーションスタート(左→右の順にクラス付与)
    // まずは　①　左スライド
    setTimeout(() => {
      leftImage.classList.add('js-slide-out-left');
    }, 1800);

      // 次に　②　右スライド（さらに遅らせる）
    setTimeout(() => {
      rightImage.classList.add('js-slide-out-right');
    }, 2600);

  

      // ④ 最終的にローディング自体を非表示に(全て終了後)
      setTimeout(()=> {
        loadingScreen.style.display = "none";
      }, 5500);//全体終了後に非表示に
    });

    // }, loadingEndTime);
  // });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });


  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });




  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // mvスワイパー
  const mvSwiper = new Swiper('.mv__swiper', { // swiperの名前
  // 切り替えのモーション
  // speed: 1000, // 表示切り替えのスピード
  effect: "fade", // 切り替えのmotion (※1)　フェードする
   fadeEffect: {
        crossFade: true　//前後のスライドをクロスフェード
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

  // ページネーション
  // pagination: {
  //   el: ".swiper-pagination", // paginationのclass
  //   clickable: true, // クリックでの切り替えを有効に
  //   type: "bullets" // paginationのタイプ (※2)
  // },

  // ナビゲーション
  // navigation: {
  //   prevEl: ".swiper-button-prev", // 戻るボタンのclass
  //   nextEl: ".swiper-button-next" // 進むボタンのclass
  // },

  // スクロールバー
  scrollbar: { // スクロールバーを表示したいとき
    el: ".swiper-scrollbar", // スクロールバーのclass
    hide: true, // 操作時のときのみ表示
    draggable: true // スクロールバーを直接表示できるようにする
  },

  // ブレイクポイントによって変える
  // breakpoints: {
  //     768: {
  //         slidesPerView: 1.2,
  //         spaceBetween: 15,
  //     },
  //     1500: {
  //         slidesPerView: 3,
  //         spaceBetween: 40,
  //     },
  // }
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


});
