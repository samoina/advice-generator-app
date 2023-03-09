//Declare constants
const mainButton = document.querySelector('.main__button'),
  adviceNum = document.querySelector('.adviceNum'),
  mainPara = document.querySelector('.main__para'),
  url = 'https://api.adviceslip.com/advice';


//add Event Listener to the button on click
mainButton.addEventListener('click', loadAdvice);

//ASYNC AWAIT
async function loadAdvice() {
  let res = await fetch(url);
  let data = await res.json();

  mainPara.textContent = `"${data.slip.advice}"`;
  adviceNum.textContent = `#${data.slip.id}`;
}

//FETCH()
// function loadAdvice() {
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       mainPara.textContent = `"${data.slip.advice}"`;
//       adviceNum.textContent = `#${data.slip.id}`;
//     })
// }

//XHR
// function loadAdvice(){
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', url, true);
//   xhr.send();
//   xhr.onload = function(){
//     if(this.status === 200) {
//       let adviceObj = JSON.parse(this.responseText);
//       console.log(adviceObj.slip.advice);
//       console.log(adviceObj.slip.id);
//       mainPara.textContent = `"${adviceObj.slip.advice}"`;
//       adviceNum.textContent = `#${adviceObj.slip.id}`;
//     } else {
//       let error = `Error: ${this.status}`
//       mainPara.textContent = `"${error}. Page not found"`;
//     }
//   }
// }

//PROMISES
function loadAdvice(){
  let promise = new Promise(function(resolve, reject){
    let xhr = new XMLHttpRequest();
    /*I came across the 'loadend' when used as an event on the xhr object, but discovered that it works the same way as the onload function
    */
    // xhr.addEventListener('loadend', function(){
    //   if(this.status === 200){
    //     const adviceObj = JSON.parse(this.responseText)
    //     resolve([adviceObj.slip.id, adviceObj.slip.advice])
    //   } else {
    //     reject(new Error(`Error ${this.status}`))
    //   }
    // })
    
    xhr.onload = function(){
      if(this.status === 200){
        const adviceObj = JSON.parse(this.responseText)
        resolve([adviceObj.slip.id, adviceObj.slip.advice])
      } else {
        reject(new Error(`${this.status} - Page Not Found`))
      }
    }

    xhr.open('GET', url, true);
    xhr.send();
  })

  /*Consume the promise*/
  promise
  .then(responseArray => {
    adviceNum.textContent = `#${responseArray[0]}`;
    mainPara.textContent = `"${responseArray[1]}"`;    
  })
  .catch(err => mainPara.textContent = `"${err}"`);
}





document.onload = loadAdvice();






