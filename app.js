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
// function loadAdvice() {
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       mainPara.textContent = `"${data.slip.advice}"`;
//       adviceNum.textContent = `#${data.slip.id}`;
//     })
// }

// CALLBACKS & XHR
function loadAdvice(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.send();
  xhr.onload = function(){
    if(this.status === 200) {
      let adviceObj = JSON.parse(this.responseText);
      console.log(adviceObj.slip.advice);
      console.log(adviceObj.slip.id);
      mainPara.textContent = `"${adviceObj.slip.advice}"`;
      adviceNum.textContent = `#${adviceObj.slip.id}`;
    } else {
      let error = `Error: ${this.status}`
      mainPara.textContent = `"${error}. Page not found"`;
    }
  }
}



document.onload = loadAdvice();




