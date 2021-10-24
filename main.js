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
const FamilyContainer2 = document.getElementById("memo_family_container2");
const FirstContainer2 = document.getElementById("memo_first_container2");

let memosFamily = [];
let memosFirst = [];

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
      memosToContainer(FamilyContainer2, memosFamily);
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
