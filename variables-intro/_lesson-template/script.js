'use strict'
// Please don't delete the 'use strict' line above

// 例
const school = "Waffle College";
console.log(school); // "Waffle College" を表示
let week = 1;
console.log(week); // "1" を表示

// 以下、問題です

// ここにあなたのコードを書いてください
const name = "Aika";
console.log(name); // あなたの名前を表示

// ここにあなたのコードを書いてください
let age = 21;
console.log(age); // あなたの年齢を表示

// ここにあなたのコードを書いてください
const isProgrammer = "true";
console.log(isProgrammer); // "true" を表示

// ここにあなたのコードを書いてください
let currentTask = 1;
console.log(currentTask); // "1" を表示

// ここにあなたのコードを書いてください
currentTask=2;
console.log(currentTask); // "2" を表示

// 正方形の面積を計算して保存
const squareSideLength = 2;
// ここにあなたのコードを書いてください
const squareArea = squareSideLength * squareSideLength;
console.log(squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
// ここにあなたのコードを書いてください
const rectangleArea = rectangleBaseLength * rectangleHeightLength;
console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
// ここにあなたのコードを書いてください
const triangleArea = (triangleBaseLength*triangleHeightLength)/2;
console.log(triangleArea); // "10" を表示

// 例
const variableString = "I am a string";
console.log(typeof variableString); // "string"と表示されましたか？

// 問題1
const variableNumber = 3;         // "number"と表示させるにはどんな値を代入すればいいでしょう？ "？？？"に値を入れてみてください。
console.log(typeof variableNumber); // "number"と表示されましたか？

// 問題2
// ここにコードを書いて、"boolean"と表示されるようにしてください。
const variableBoolean = true;
console.log(typeof variableBoolean);

// 問題3
//ここにコードを書いて、"undefined"と表示されるようにしてください。
const variableUndefined =undefined;
console.log(typeof variableUndefined);

const numberA = 10;
const numberB = 20;

const average = (numberA+numberB)/2;
console.log(average); // numberA と numberB の平均が表示される。

// 円の円周と面積を計算して保存する
const circleDiameter = 10;
// ここにあなたのコードを書いてください
const circleCircumference = circleDiameter*Math.PI;
const circleArea = (circleDiameter/2)**2*Math.PI;

console.log(circleCircumference); // "31.41592653589793" に近い値を表示
console.log(circleArea); // "78.53981633974483" に近い値を表示

let a = "B";
let b = "A";

// ここにあなたのコードを書いてください
let c = " ";
c=a;
a=b;
b=c;

console.log(a); // "A" を表示
console.log(b); // "B" を表示

//国語の点数70点と数学の点数50点の合計は？
let kokugo = 70;
const suugaku = 50;
let sum = kokugo +suugaku;
console.log(sum);//答えは120点

//国語の採点が間違っていて実際の点数は65点だった。その時の合計は？
kokugo = 65;
sum = kokugo +suugaku;
console.log(sum);//答えは115点