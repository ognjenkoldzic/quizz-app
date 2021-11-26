let buttonAnswer = document.querySelectorAll('.button1')
let answerPara = document.querySelectorAll('.card__answer')


buttonAnswer.forEach((element, index) => {
element.addEventListener('click', () => {
    
    answerPara[index].classList.toggle('hidden') 
    if (element.innerHTML === "Show Answer") {
        element.innerHTML = "Hide Answer"
    } else {
        element.innerHTML = "Show Answer"
    }   
   })
})


//answerPara.forEach(elem)
//console.log("hey")
/*let bookmark = document.querySelector('.card__bookmark')
bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('fas')
})*/




//element.innerText.togg = "Hide Answer"








let bookmark = document.querySelectorAll('.card__bookmark')
bookmark.forEach((bookmarkfull) => {
    bookmarkfull.addEventListener('click', () => {
        bookmarkfull.classList.toggle('fas')  
    })
})
