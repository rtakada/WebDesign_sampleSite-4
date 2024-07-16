// ページトップへスクロールする関数
// #page-topをクリックした際の設定
$('#top-link').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// ページが読み込まれたときの処理
$(document).ready(function() {
    // スクロールイベントを監視し、ページトップへのリンクを表示する
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.top-link').addClass('visible');
        } else {
            $('.top-link').removeClass('visible');
        }
    });

    // ページトップへのリンクがクリックされたときの処理
    $('.top-link').click(function(event) {
        event.preventDefault(); // リンクのデフォルト動作を無効化
        scrollToTop(); // ページトップへスクロールする
        return false; // イベントの伝搬を停止し、ページトップへのスクロールが正しく実行されるようにします
    });
});
