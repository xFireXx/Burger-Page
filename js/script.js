document.querySelector(".bar").addEventListener("click", (e) => {
    e.preventDefault();
    const bar = document.querySelector(".barMenu");
    bar.classList.toggle("barMenuActive");
})

document.querySelector(".nextImg").addEventListener("click", (e) => {
    e.preventDefault();
    const changeImg = document.querySelector(".bgc");
    changeImg.classList.toggle("bgcActive");
})

document.querySelector(".nextImg2").addEventListener("click", (e) => {
    e.preventDefault();
    const changeImg = document.querySelector(".bgc");
    changeImg.classList.toggle("bgcActive");
})



    // const changeReview = document.querySelector(".changeReview");
    // const images = ['images/rev1.PNG', 'images/rev2.PNG', "images/rev3.PNG"];
    // let activeElement = 0;
    // const timeChange = 3000;
    // function changeImg() {
    //     activeElement++;
    //     if(activeElement == images.length) {
    //         activeElement = 0;
    //     }
    //     changeImg.src = images[activeElement];
    // }
    // setInterval(changeImages, timeChange)
