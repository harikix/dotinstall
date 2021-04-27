"use strict";
{
  // document.querySelector("button").addEventListener("click", () => {
    // 要素の追加
    // const item2 = document.createElement('li');
    // item2.textContent = 'item 2';
    // const ul = document.querySelector('ul');
    // ul.appendChild(item2)

    // 要素の複製、及び挿入
    // const item0 = document.querySelectorAll('li')[0];
    // const copy = item0.cloneNode(true);
    // const ul = document.querySelector('ul');
    // const item2 = document.querySelectorAll('li')[2];
    // ul.insertBefore(copy, item2);

    // 要素の削除
    // const item1 = document.querySelectorAll('li')[1];
    // １部の古いブラウザでは対象外↓
    // item1.remove();
    // 親Node.removeChild(削除するNode)↓
    // document.querySelector('ul').removeChild(item1);

    // inputで入力した文字をリストに表示させる
    // const li = document.createElement('li');
    // const text = document.querySelector('input');
    // li.textContent = text.value;
    // document.querySelector('ul').appendChild(li);

    // text.value = '';
    // text.focus();

    // セレクトボックスでも同様の処理
    // const li = document.createElement('li');
    // const color = document.querySelector('select');
    
    // li.textContent = `${color.value} - ${color.selectedIndex}`;
    // document.querySelector('ul').appendChild(li);

    // ラジオボタンでも同様の処理
    // const colors = document.querySelectorAll('input');
    // let selectedColor;

    // colors.forEach(color => {
    //   if (color.checked === true) {
    //     selectedColor = color.value;
    //   }
    // });

    // const li = document.createElement('li');
    // li.textContent = selectedColor;

    // document.querySelector('ul').appendChild(li);

    // チェックボックスでも同様の処理
    // const colors = document.querySelectorAll('input');
    // const selectedColors = [];

    // colors.forEach(color => {
    //   if (color.checked === true) {
    //     selectedColors.push(color.value)
    //   }
    // })
    // const li = document.createElement('li');
    // カンマ区切りならジョインはなくても良い
    // li.textContent = selectedColors.join(',');

    // document.querySelector('ul').appendChild(li);
  // });

  // さまざまなイベント
  // document.querySelector('button').addEventListener('dblclick', () => {
  //   console.log("double clicked!!");
  // })
  // document.addEventListener('mousemove', e => {
  //   console.log(e.clientX, e.clientY);
  // })
  // document.addEventListener('keydown', e => {
  //   console.log(e.key);
  // })

  // const text = document.querySelector('textarea');

  // text.addEventListener('focus', () => {
  //   console.log("focus!");
  // })
  // text.addEventListener('blur', () => {
  //   console.log("blur!");
  // })
  // text.addEventListener('input', () => {
  //   console.log(text.value.length);
  // })
  // text.addEventListener('change', () => {
  //   console.log("change!");
  // })


  // 普通にクリックイベントでもいい気がするが、formタグを使うことでenterキーで送信が可能
  // また、ボタンがなく、type="text"が１つだけの場合もenterキーで送信が可能
  // document.querySelector('form').addEventListener('submit', e => {
  //   e.preventDefault();
  //   console.log("submit");
  // })




}
