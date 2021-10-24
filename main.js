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

let memosFamily = ["田中", "吉田", "藤原", "佐藤", "木村", "小笠原", "山田"];
let memosFirst = ["勇気", "恵美", "健人", "瞳", "敦", "花子", "太郎"];

addButtonFamily.onclick = function () {
  if (memoInputFamily.value !== "") {
    let notSame = true;
    for (let i = 0; i < memosFamily.length; i++) {
      if (memoInputFamily.value === memosFamily[i]) {
        notSame = false;
      }
    }
    if (notSame) {
      const text = memoInputFamily.value;
      memosFamily.push(text);
      memoInputFamily.value = "";
      console.log(memosFamily);
    }
  }
};

addButtonFirst.onclick = function () {
  if (memoInputFirst.value !== "") {
    let notSame = true;
    for (let i = 0; i < memosFirst.length; i++) {
      if (memoInputFirst.value === memosFirst[i]) {
        notSame = false;
      }
    }
    if (notSame) {
      const text = memoInputFirst.value;
      memosFirst.push(text);
      memoInputFirst.value = "";
      console.log(memosFirst);
    }
  }
};

makeButton.onclick = function () {
  FamilyContainer.textContent = "";
  FirstContainer.textContent = "";
  if (memosFamily.length !== 0) {
    if (memosFirst.length !== 0) {
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
