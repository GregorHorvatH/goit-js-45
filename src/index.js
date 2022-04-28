console.log('Module 7.2');

// if (window._?.throttle) {
//   console.log('throttle is connected');
// } else {
//   console.log('we need to load throttle');
// }

function throttle(callback, delay) {
  let id;

  return function () {
    if (id) return;

    id = setTimeout(() => {
      callback();
      id = undefined;
    }, delay);
  };
}

// function debounce(callback, delay) {
//   let id;

//   return function () {
//     if (id) {
//       clearTimeout(id);
//     }

//     id = setTimeout(() => {
//       callback();
//       id = undefined;
//     }, delay);
//   };
// }

const output = document.querySelector('.output');
let scrollEventCounter = 0;

const handleScroll = () => {
  scrollEventCounter += 1;
  output.textContent = scrollEventCounter;
};

document.addEventListener('click', _.throttle(handleScroll, 300));
// document.addEventListener('click', throttle(handleScroll, 300)); // 1000 ms === 1 s
// document.addEventListener('scroll', debounce(handleScroll, 300)); // 1000 ms === 1 s

let i = 0;

const clicker = () => {
  // console.log(++i, Date.now());
  output.click();
};

const timerId = setInterval(clicker, 10);

setTimeout(() => {
  clearInterval(timerId);
}, 1000);
