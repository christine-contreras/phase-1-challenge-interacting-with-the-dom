window.addEventListener('DOMContentLoaded', (event) => {
//As a user, I should see the timer increment every second once the page has loaded.
const counter = document.getElementById('counter');
let seconds = 0;

 function counterIntervalFunction() {
    return setInterval(function(){ //runs repeatedly every 1000 milliseconds or 1 sec
        seconds += 1;
        counter.innerText = seconds;
    }, 1000);
}

const counterInterval = counterIntervalFunction();


// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
const minus = document.getElementById('minus'),
      plus = document.getElementById('plus');

plus.addEventListener('click', () => {
    seconds += 1;
    counter.innerText = seconds;
});

minus.addEventListener('click', () => {
    seconds -= 1;
    counter.innerText = seconds;
});


//As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.
const heart = document.getElementById('heart');


heart.addEventListener('click', () => {
    //  //grab counter value at click
     const counterValue = parseInt(counter.innerText);
     console.log(counterValue);
    //store likes list
    const likesList = document.querySelector('.likes');
    // create list item
    const likeItem = document.createElement('li');
    //set data num value to countervalue
    // likeItem.setAttribute("data-num",counterValue);
    likeItem.dataset.num = counterValue;
   //check if list item already exists
    let checkList = likesList.querySelector(`li[data-num='${counterValue}']`);
    

    if(!checkList) {   
    // if it doesn't exist
    //create inner html of li
    likeItem.innerHTML = `${counterValue} has been liked <span class="heart-likes">1 time</span>`;
    //append to parent
    likesList.appendChild(likeItem);

    } else {
        //if list item already exists then change innerhtml of span
        const heartLikesSpan = checkList.querySelector('.heart-likes');
        let numLikes = parseInt(heartLikesSpan.innerText);

        //add value as heart likes
        heartLikesSpan.innerText = `${numLikes + 1} times`;
        
    }


    });
          

    // heart.addEventListener("click",function(){
//     var a=document.getElementById("counter"),
//     b=parseInt(a.innerText),
//     c=document.querySelector(".likes"),
//     d=void 0;
    
//     if([].concat(_toConsumableArray(c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b)){d=document.querySelector('[data-num="'+b+'"]');
//     var e=parseInt(d.children[0].innerText);d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"
// }else(
//     d=document.createElement("li")).setAttribute("data-num",b),d.innerHTML=b+" has been liked <span>1</span> time",c.appendChild(d)




// As a user, I can pause the counter, disable all buttons except the pause button, switch the label on the button from "pause" to "resume"
const pause = document.getElementById('pause');
let timer = true;

pause.addEventListener('click', function() {
    const buttons = document.querySelectorAll('button');
    const buttonsArray = Array.from(buttons);
    // console.log(this);


    if(timer) {
        this.textContent = 'resume';
        timer = false;
        clearTimeout(counterInterval);

        buttonsArray.forEach(button => {
            if (button.id !== 'pause') {
                button.disabled = true;
            }
        });

    } else {
        //As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.
        this.textContent = 'pause';
        timer = true;
        seconds = parseInt(counter.innerText);
        seconds += 1;
        // console.log(seconds);
        counterInterval();

        buttonsArray.forEach(button => {
            button.disabled = false;
        });

    }


}); //pause event listener





//As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
const form = document.getElementById('comment-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputValue = e.target.querySelector('#comment-input').value;
    
    const commentContainer = document.getElementById('list');
    const commentPara = document.createElement('p');
    commentPara.textContent = inputValue;
    commentContainer.appendChild(commentPara);
});



});
