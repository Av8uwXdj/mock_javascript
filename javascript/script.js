//------------------------------------------------------------------------------------------
// mock2 : DOM構築後に外部Fileのonloadに代入した関数から<p>内のTextを書き換える
window.onload = function() {
    const mock2_text = document.getElementById("mock2-text");
    mock2_text.innerText = "DOM構築後に外部Fileのonloadに代入した関数から<p>内のTextを書き換える";
}

//------------------------------------------------------------------------------------------
// mock3 : ButtonのClickEventで<body>内のfontSizeを変更する
function ChangeFontSize() {
    const body = document.getElementById("body-wrap");
    body.style.fontSize = "20px";
}

//------------------------------------------------------------------------------------------
// mock4 : 1秒置きに1countしcountを表示する
function CountPerOneSec() {
    const mock4_text = document.getElementById("mock4-text");
    count++;
    mock4_text.innerText = count;
}
let count = 0;
setInterval(CountPerOneSec, 1000);

// 次どうするか
//
// ・シークバー的なもの？カウントして、ゲージが上昇するやつ
// ・ページの最上部までぐいーんと上がるやつ
// （css？）・複数の画像を切り替えられるやつ
// （css？）・ボタンとかのアニメーション
// ・お問い合わせボックスからメール送信
// ・ランダムな数字を表示する
// ・時間を表示する
// ・cookieの使用
// ・閲覧端末を表示する
//
// https://teratail.com/questions/138648
// ブログ開発を例にすればほぼ必要ない
// → nodejsはフロントエンドではないので例外

// 1
// windows.onloadの中で処理を書いた方がいい？
// > 基本DOMに依存するのなら

// 2
// onclick等への登録はhtmlで行わずにjs内でやった方がいい？
// jsをぱっと見てどんな挙動なのかわかるようになるし
