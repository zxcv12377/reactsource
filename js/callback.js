// 비동기
// 콜백함수 : 나중에 호출되는 함수
// fetch().then().then().catch();
// console.log("start");
// setTimeout(() => {
//   console.log("2초가 지났습니다");
// }, 2000);
// console.log("end");

// ajax 예전 방식(jQuery 이용)

//   return result;
// }
// getData((data) => console.log(data));

function getData1(callbackFunc) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => callbackFunc(data));
}

function getData2(callbackFunc) {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
    .then((data) => callbackFunc(data));
}

getData1((data1) => {
  console.log(data1);

  getData2((data2) => console.log(data2));
});
