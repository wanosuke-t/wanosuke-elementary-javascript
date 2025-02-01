// id名で取得
// console.log(document.querySelector("#js-title").outerHTML);
// console.log(document.getElementById("js-title").outerHTML);

// class名で取得
// console.log(document.querySelector(".text").outerHTML);
// const elements = document.querySelectorAll(".text");
// elements.forEach(element => {
//   console.log(element.outerHTML);
// });

// タグ名で取得
// console.log(document.querySelector("h1").outerHTML);

// 属性で取得
// console.log(document.querySelector('[href="https://www.daily-trial.com/"]').outerHTML);

// 取得した要素を操作
// document.querySelector("#js-title").innerText = "Daily Trial";

// HTML要素の追加
// const button = document.createElement("a");
// button.innerText = "ログイン";
// button.setAttribute("class", "btn");
// button.setAttribute("href", "https://tokyofreelance.jp/");
// document.querySelector("#js-btn-wrap").appendChild(button);

// ボタンの操作
// document.querySelector("#js-register").click();

// イベント監視
// window.onload = function () {
//   alert("読み込みが完了しました");
// }
// document.querySelector("#js-btn").addEventListener("click", function () {
//   alert("ボタンがクリックされました");
// });

// jQuery("主語").動詞("補語");

// document.querySelector("#js-title").innerText = "Daily Trial";

// jQuery("#js-title").text("Daily Trial");

// jQuery("#js-title").css("color", "red");
// jQuery(".text").css("color", "red");
// jQuery("h1").css("color", "red");
// jQuery("[href]").css("color", "red");
// jQuery("h1, h2").css("color", "red");
// const elements = jQuery(".text");
// elements.each(function () {
//   console.log(jQuery(this).text());
// })

// 子孫要素のPタグ取得
// jQuery("#js-section").find("p").css("color", "red");

// 子要素のPタグ取得
// jQuery("#js-section").children("p").css("color", "red");
