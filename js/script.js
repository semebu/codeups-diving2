jQuery(function ($) {
// ============================
// ✅ ページトップボタン
// ============================
// document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.querySelector(".pagetop");
  if (topBtn) {
    topBtn.style.display = "none";

    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    });

    topBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ============================
  // ✅ ローディングアニメーション
  // ============================
  window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading");
    const leftImage = document.querySelector(".image-half.left");
    const rightImage = document.querySelector(".image-half.right");
    const heading = document.querySelector(".heading");

    if (loadingScreen) loadingScreen.style.display = "block";

    setTimeout(() => heading?.classList.add("show"), 800);
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
});
