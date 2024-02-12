//carousel
const buttons = document.querySelectorAll("[data-carousell-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carousellButton === "next" ? 1 : -1
    const sllides = button
      .closest("[data-carousell]")
      .querySelector("[data-sllides]")
    
    const indicators = button
      .closest("[data-carousell]")
      .querySelector("[data-indicators]")


    const activeSllide = sllides.querySelector("[data-active]")
    const activeIndicator = indicators.querySelector("[data-active]")
    let newIndex = [...sllides.children].indexOf(activeSllide) + offset
    if (newIndex < 0) newIndex = sllides.children.length - 1
    if (newIndex >= sllides.children.length) newIndex = 0

    sllides.children[newIndex].dataset.active = true
    indicators.children[newIndex].dataset.active = true
    delete activeIndicator.dataset.active
    delete activeSllide.dataset.active
  })
})

//const btnAuto = document.querySelectorAll(".imgCaro>.carousell-button");
/*
autoSlide();



function autoSlide() {
    const offset = 1
    const sllides = btnAuto[0].closest("[data-carousell]")
      .querySelector("[data-sllides]")

    const activeSllide = sllides.querySelector("[data-active]")
    let newIndex = [...sllides.children].indexOf(activeSllide) + offset
    if (newIndex >= sllides.children.length) newIndex = 0

    sllides.children[newIndex].dataset.active = true
    delete activeSllide.dataset.active

    setTimeout(autoSlide, 5000);
  }

const btnVid = document.querySelectorAll(".vidCaro>.carousell-button");

btnVid.forEach(button => {
  button.addEventListener("click", () => {
    const sllides = button.closest("[data-carousell]")
      .querySelector("[data-sllides]")

    const offset = button.dataset.carousellButton === "next" ? -1 : 1

    const activeSllide = sllides.querySelector("[data-active]")
    let index = [...sllides.children].indexOf(activeSllide)

    let vids = document.querySelectorAll(".vidCaro video")
    if((index+offset)<0||(index+offset)>sllides.children.length - 1){
    vids[0].pause()
    vids[sllides.children.length - 1].pause()
    }
    else{
    vids[index+offset].pause()
    }
    vids[index].play()
  })
})*/
//end carousel