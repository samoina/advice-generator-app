//Declare constants
const mainButton = document.querySelector('.main__button'),
      adviceNum = document.querySelector('.adviceNum'),
      mainPara = document.querySelector('.main__para'),
      url = 'https://api.adviceslip.com/advice';


//add Event Listener to the button on click
mainButton.addEventListener('click', loadAdvice);

//ASYNC AWAIT
// async function loadAdvice() {
//   let res = await fetch(url);
//   let data = await res.json();

//   mainPara.textContent = data.slip.advice;
//   adviceNum.textContent = `#${data.slip.id}`;
// }

//FETCH()
function loadAdvice() {
  fetch(url)
  .then(res => res.json())
  .then(data => {
    mainPara.textContent = `"${data.slip.advice}"`;
    adviceNum.textContent = `#${data.slip.id}`;


})
}

document.onload = loadAdvice();

