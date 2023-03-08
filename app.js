//Declare constants
const mainButton = document.querySelector('.main__button'),
      adviceNum = document.querySelector('.adviceNum'),
      mainPara = document.querySelector('.main__para'),
      url = 'https://api.adviceslip.com/advice';


//add Event Listener to the button on click
mainButton.addEventListener('click', loadAdvice);

async function loadAdvice() {
  let res = await fetch(url);
  let data = await res.json();

  mainPara.textContent = data.slip.advice;
  adviceNum.textContent = `#${data.slip.id}`;
}


