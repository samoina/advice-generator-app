# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
We took up this challenge as one of the tasks to practice HTML & CSS within the [Space Ya Tech - SYT](https://spaceyatech.com/) mentorship sessions. SYT is the fastest growing Africa Open-Source Community Looking To Change The Way Young Africans Get Started In Technology. One way SYT does this is through its mentorship, and I am excited to be a part of the current cohort (as of February 2023).

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Github Repo Link](https://github.com/samoina/advice-generator-app)
- Live Site URL: [Netlify Link](https://samoina-advice-generator.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla Javascript
- Flexbox
- BEM Naming Convention
- Mobile-first workflow

### What I learned
#### Centering on CSS
I had some trouble figuring out how to center the main section of my app. Found an incredible resource on [CSS Tricks](https://css-tricks.com/centering-css-complete-guide/) that showed how to center an element of unknown width and height. It uses the transform property and a negative translate of 50% in both directions. This works because it is based on the element's width and height to be centered as below:

```css
.main {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); 
}
```

#### Asynchronous Javascript

My approach to this task was to practise what I have been learning in asyncgronous Javascript. So I used the XHR Object, JS Promises, Fetch() and async await.

The challenge was to incorporate a callback function when using the XHR Object. I need to find out if adding the Boolean 'true' to show that it is an asynchronous function is sufficient without needing a callback function. (This was included in the [Advice API](https://api.adviceslip.com/) under the Parameters for Random Advice)

Secondly, I was initially confused over how many arguments the Resolve function takes when using Javascript Promises. A quick look at the MDN Documentation reminded me that this function only takes one argument. For this challenge I needed two values, so I put them in an array, which I would then use when consuming the promise using the .then() method handler. 

```javascript
...
 xhr.onload = function(){
      if(this.status === 200){
        const adviceObj = JSON.parse(this.responseText)
        resolve([adviceObj.slip.id, adviceObj.slip.advice])
      } else {
        reject(new Error(`${this.status} - Oops! something went wrong`))
      }
    }
...
```

Thirdly, I had handled errors with the XHR object and promises, but not with fetch() and Async Await. This was my reminder that fetch() only rejects on network failure - and not on HTTP error statuses so I needed to capture this as below. I used if..else... for this error handling. 

```js
...
  if(res.status>= 200 && res.status<=299){
    let data = await res.json();

    mainPara.textContent = `"${data.slip.advice}"`;
    adviceNum.textContent = `#${data.slip.id}`;
  } else {
    mainPara.textContent = `"Error ${res.status} - Oops! something went wrong"`;
  }
...
```

Lastly, I came across the 'loadend' when used as an event on the xhr object, but discovered that it works the same way as the onload function.

```javascript
  xhr.addEventListener('loadend', function(){
      if(this.status === 200){
        const adviceObj = JSON.parse(this.responseText)
        resolve([adviceObj.slip.id, adviceObj.slip.advice])
      } else {
        reject(new Error(`Error ${this.status}`))
      }
    })
```

#### Fetch advice onload instead of hardcoding it.
I had hardcoded the initial joke that shows on the page, and only when the user clicked would it change. During the SYT mentorship session, I learned that to fetch new advice as soon as the page loads, I would need to call the function immeadiately the document loads as below. 

```javascript
document.onload = loadAdvice();
```

### Useful resources

- [CSS Tricks](https://css-tricks.com/centering-css-complete-guide/) - This is an excellent resource if you need a better understanding of how to center elements in different scenarios.

## Author

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [@samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [@samoina](https://www.twitter.com/samoina)

## Acknowledgments
Special thanks to the Space Ya Tech mentors for providing some insight and encouragement to getting this task done. 


