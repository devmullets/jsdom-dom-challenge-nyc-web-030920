let intervalId
let paused = false

document.addEventListener("DOMContentLoaded", function(){
    // start counter, 1000ms = 1s
    intervalId = setInterval(incrementOne, 1000)    
})

let counterHeading = document.getElementById('counter')

const ul = document.getElementsByClassName('likes')[0]

const incrementBtn = document.getElementById('plus')
    incrementBtn.addEventListener('click', incrementOne)

const decrementBtn = document.getElementById('minus')
    decrementBtn.addEventListener('click', decrementOne)

const pauseBtn = document.getElementById('pause')
    pauseBtn.addEventListener('click', function(event){

        if (paused === true) {
            resumeTimer()
            paused = false
            console.log(paused)
        } else if (paused === false) {
            pauseTimer()
            paused = true
            console.log(paused)
        }

    })

const heartBtn = document.getElementById('heart')
    heartBtn.addEventListener('click', function(event){ 

        // let allLi = document.querySelectorAll('li')
        // allLi.forEach(function(eachLi) {
        //     let countText = counterHeading.innerText
        //     let count = parseInt(countText)
            
        //     if (count in eachLi.dataset.num ) {
        //         console.log('yoyoyoyoyo')
        //     }
        // })

        let li = document.createElement('li')

        li.innerHTML = `${counterHeading.innerText} has been liked <span>1</span> time`
        li.setAttribute('data-num', counterHeading.innerText)
        
        console.log(li.dataset.num)
        ul.appendChild(li)

    })

const comments = document.getElementById('list')

const form = document.getElementById('comment-form')
    form.addEventListener('submit', function(event){
        event.preventDefault();

        let comment = document.createElement('p')
        comment.innerText = form.comment.value

        event.target.reset()

        comments.appendChild(comment)

    })


function resumeTimer () {
    // make sure resume is set to same instance of setInterval
    intervalId = setInterval(incrementOne, 1000)
    pauseBtn.innerText = "pause"
    incrementBtn.disabled = false
    decrementBtn.disabled = false
    heartBtn.disabled = false
}

function pauseTimer () {
    clearTimeout(intervalId);
    pauseBtn.innerText = "resume"
    incrementBtn.disabled = true
    decrementBtn.disabled = true
    heartBtn.disabled = true
}


function incrementOne () {  
    let countText = counterHeading.innerText
    let count = parseInt(countText)
    count += 1

    counterHeading.innerHTML = count
}

function decrementOne () {
    let countText = counterHeading.innerText
    let count = parseInt(countText)
    count -= 1

    counterHeading.innerHTML = count
}

