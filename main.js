//javascriptの機能の入った自己紹介を作る
//コピペとかは禁止、自分で理解して書けるコードをかこう！
//jQueryだかは今回なし！

const memoInputFamily = document.getElementById("memo_family");
const memoInputFirst = document.getElementById("memo_first");
const addButtonFamily = document.getElementById("family_button");
const addButtonFirst = document.getElementById("first_button");

const makeButton = document.getElementById("make_name");
const FamilyContainer = document.getElementById("memo_family_container");
const FirstContainer = document.getElementById("memo_first_container");

let memosFamily = [];
let memosFirst = [];

addButtonFamily.onclick = function () {
  const text = memoInputFamily.value;
  memosFamily.push(text);
  memoInputFamily.textContent = "";
};

addButtonFirst.onclick = function () {
  const text = memoInputFirst.value;
  memosFirst.push(text);
  memoInputFirst.textContent = "";
};

const memosToCountainer = function () {
  FamilyContainer.textContent = "";
  FirstContainer.textContent = "";
  if (!memosFamily.length) {
    if (!memosFirst.length) {
      const randFamily = Math.floor(Math.random() * memosFamily.length);
      const randFirst = Math.floor(Math.random() * memosFirst.length);
      const choiseFamily = document.createElement("div");
      const choiseFirst = document.createElement("div");
      choiseFamily.textContent = memosFamily[randFamily];
      choiseFirst.textContent = memosFirst[randFirst];
      FamilyContainer.append(choiseFamily);
      FirstContainer.append(choiseFirst);
    }
  }
};
