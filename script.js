// 1
let bgColorPage = prompt(`Введіть колір фону сторінки`);
document.body.style.backgroundColor = `${bgColorPage}`;

// 2
let fontFamily = prompt(`Введіть тип шрифта на сторінці`);
document.body.style.fontFamily = `${fontFamily}`;

// 3
let h1Align = prompt(`Введіть тип вирівнювання для заголовка h1`);
document.querySelector(`h1`).style.textAlign= `${h1Align}`;

// // 4
let bgColorParag = prompt (`Введіть колір для параграфу`);
document.querySelector(`p`).style.backgroundColor=(`${bgColorParag}`);

// 5
let parag = document.querySelector(`p`);
let textColorParag = prompt (`Введіть колір тексту для параграфу`);
parag.style.color = (`${textColorParag}`);

// // 6
let textColorLink = prompt (`Введіть колір тексту для посилань`);
for (const elem of parag.children) {
    elem.style.color=(`${textColorLink}`);
}

// 7,8,9
let textColorDiv = prompt(`Введіть колір тексту для елементів div`);
let fontSizeDiv = prompt(`Введіть розмір тексту для елементів div`);
let fontWeightDiv = prompt(`Введіть товщину тексту для елементів div`);
let divStyle=document.querySelector(`div`);
divStyle.style.cssText =`color:${textColorDiv};font-size:${fontSizeDiv};font-weight:${fontWeightDiv}`;

// 10
let typeLi = prompt(`Введіть тип маркування для елементів списку`);
let ul = document.querySelector(`ul`);
console.log(ul)
for (const elem of ul.children) {
elem.style.listStyleType=(`${typeLi}`);
}

// Додаткове
let links = document.querySelector(`p`).children;
for (let i = 0; i < links.length; i++) {
    let Link = prompt(`Введіть посилання на улюблений сайт (google.com)`);
   
    links[i].textContent = `${Link}`;
    links[i].href = `http://www.`;
    links[i].target = '_blank';
}







































// Task 1 ===========================================================================================

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3, [10, 20]];

// function arrCopy(array) {
//     return array.map(value => Array.isArray(value) ? arrCopy(value) : value)
// }

// const res1 = arrCopy(arr1);
// const res2 = arrCopy(arr2);
// console.log(res1);
// console.log(res2);
// arr2[3][0] = 12;
// console.log(res2);
// console.log(arr2);


// Task 2 ==========================================================================================

// const arr1 = [1, 2, 3];
// const arr2 = [10, 200, 3333];

// function arrToString(arr) {
//     return arr.map(value => value.toString())
// }

// console.log(arrToString(arr1));
// console.log(arrToString(arr2));



// Task 3 ===========================================================================================

// const arr1 = ['Ivan','Pavlo','Ira'];
// const arr2 = ['Oleksiy','Andriana'];
// function  getLength(array) {
//     return array.map(value => value.length)
// }

// console.log(getLength(arr1));
// console.log(getLength(arr2));


// Task 4 ==========================================================================================

// const arr1 = ['html', 'css', 'html', 'js'];
// const arr2 = ['html', 'css', 'html', 'js', 'Html', 'phyton', 'html', 'js'];

// function removeDuplicates(array) {
//     let resultArray = [];
//     for (const iterator of array) {
//         if (resultArray.includes(iterator.toLowerCase())) { }
//         else { resultArray.push(iterator.toLowerCase()) }
//     }
//     return resultArray;
// }

// console.log(removeDuplicates(arr1));
// console.log(removeDuplicates(arr2));

