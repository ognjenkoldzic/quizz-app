let buttonAnswer = document.querySelectorAll('.button1')
let answerPara = document.querySelectorAll('.card__answer')


buttonAnswer.forEach((element, index) => {
element.addEventListener('click', () => {
    element.innerText.togg = "Hide Answer"
    answerPara[index].classList.toggle('hidden')      
   })
})


//answerPara.forEach(elem)
//console.log("hey")
/*let bookmark = document.querySelector('.card__bookmark')
bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('fas')
})*/













let bookmark = document.querySelectorAll('.card__bookmark')
bookmark.forEach((bookmarkfull) => {
    bookmarkfull.addEventListener('click', () => {
        bookmarkfull.classList.toggle('fas')  
    })
})
