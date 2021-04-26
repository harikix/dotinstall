"use strict";

// const signal = "red";

// if (signal == "red") {
//   console.log("Stop!");
// } else if (signal == "yellow") {
//   console.log("Caution!");
// } else if (signal == "blue") {
//   console.log("Go!!");
// }

// switch (signal) {
//   case "red":
//     console.log("Stop!");
//     break;
//   case "yellow":
//     console.log("Caution!");
//     break;
//   case "blue":
//   case "green":
//     console.log("Go!!");
//     break;
//   default:
//     console.log("Wrong signal");
//     break;
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }
{
  // const scores = [80, 20, 40, 70];

  // const [a, b, c, d] = scores;

  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // const [a, b, ...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(others);

  // let x = 30;
  // let y = 70;

  // [x, y] = [y, x]
  // console.log(x);
  // console.log(y);

  // scores.forEach((score, index) => {
  //   console.log(`Score${index}: ${score}`);
  // });

  // const prices = [180, 190, 200];

  // const updatePrices = prices.map((prices) => prices + 20);
  // console.log(updatePrices);

  // const numbers = [1, 2, 4, 7, 9, 10];

  // const evenNumber = numbers.filter((number) => {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // const evenNumber = numbers.filter((number) => number % 2 === 0);

  // console.log(evenNumber);

  // const d = [2019, 11, 14]

  // d.join('/')
  // console.log(d.join('/'));

  // const t = '17:08:30'

  // console.log(t.split(':'));

  // const [hour, minute, second] = t.split(':');

  // console.log(hour);
  // console.log(minute);
  // console.log(second);

  // const scores = [10, 3, 9]

  // let sum = 0
  // scores.forEach((score) => {
  //   sum += score;
  // })

  // const avg = sum / scores.length;

  // console.log(sum);
  // console.log(avg);

  // console.log(Math.floor(avg));
  // console.log(Math.ceil(avg));
  // console.log(Math.round(avg));
  // console.log(avg.toFixed(3));

  // console.log(Math.random());

  // const d = new Date()
  // console.log(d);

  // let i = 0;
  // function showtime() {
  //   console.log(new Date());
  //   i++;
  //   if (i > 2) {
  //     clearInterval(intervalId);
  //   }
  // }
  // const intervalId = setInterval(showtime, 1000);

  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }
  }


  const posts = [
      new Post("JavaScriptの勉強中..."),
      new Post("プログラミング楽しい！")
  ]

  posts[0].show();
  posts[1].show();
}
