/* declare constants*/
const mainButton = document.querySelector('.main__button'),
  adviceNum = document.querySelector('.adviceNum'),
  mainPara = document.querySelector('.main__para'),
  url = 'https://api.adviceslip.com/advice';


//add Event Listener to the button on click
mainButton.addEventListener('click', loadAdvice);

/*ASYNC AWAIT*/
async function loadAdvice() {
  let res = await fetch(url);
  if(res.status>= 200 && res.status<=299){
    let data = await res.json();

    mainPara.textContent = `"${data.slip.advice}"`;
    adviceNum.textContent = `#${data.slip.id}`;
  } else {
    mainPara.textContent = `"Error ${res.status} - Oops! something went wrong"`;
  } 
}

/* FETCH()*/
/*
function loadAdvice() {
  fetch(url)
    .then(res => {
      if(res.status >=200 && res.status <=299){
        return  res.json();
      } else {
        throw Error(`${res.status} - Oops! something went wrong`)
      }
    })
    .then(data => {
      mainPara.textContent = `"${data.slip.advice}"`;
      adviceNum.textContent = `#${data.slip.id}`;
    })
    .catch(err => mainPara.textContent = `"${err}"`)
}
*/

/*XHR */
/*
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
      mainPara.textContent = `"${error}. Oops! something went wrong"`;
    }
  }
}
*/

/*PROMISES*/
/*
function loadAdvice(){
  let promise = new Promise(function(resolve, reject){
    let xhr = new XMLHttpRequest();
    
    xhr.onload = function(){
      if(this.status === 200){
        const adviceObj = JSON.parse(this.responseText)
        resolve([adviceObj.slip.id, adviceObj.slip.advice])
      } else {
        reject(new Error(`${this.status} - Oops! something went wrong`))
      }
    }

    xhr.open('GET', url, true);
    xhr.send();
  })

  promise
  .then(responseArray => {
    adviceNum.textContent = `#${responseArray[0]}`;
    mainPara.textContent = `"${responseArray[1]}"`;    
  })
  .catch(err => mainPara.textContent = `"${err}"`);
}
*/

document.onload = loadAdvice();






