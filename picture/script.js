window.addEventListener("DOMContentLoaded", () => {
    // サムネイルのスライダー
    const thumbnail = new Swiper(".thumbnail", {
        freeMode: true,
        slidesPerView: 21,
        spaceBetween: 0,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    // メインのスライダー
    const slider = new Swiper(".slider", {
                thumbs: {
            swiper: thumbnail,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        //ループ
        loop:true,
        autoplay: {
            delay: 5000, // 5000ミリ秒（5秒）ごとにスライドする
            disableOnInteraction: false, // ユーザーの操作によって自動再生を停止しない
        },
    });
});
