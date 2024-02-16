//carousel
/*
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
*/
const caros = document.querySelectorAll("[data-carousell]");

autoSlide();



function autoSlide() {
    const offset = 1

    caros.forEach(caro => {
      const sllides = caro
      .querySelector("[data-sllides]")

      const indicators = caro
      .querySelector("[data-indicators]")

    const activeSllide = sllides.querySelector("[data-active]")
    const activeIndicator = indicators.querySelector("[data-active]")
    let newIndex = [...sllides.children].indexOf(activeSllide) + offset
    if (newIndex >= sllides.children.length) newIndex = 0

    sllides.children[newIndex].dataset.active = true
    indicators.children[newIndex].dataset.active = true
    delete activeIndicator.dataset.active
    delete activeSllide.dataset.active
    });
    

    setTimeout(autoSlide, 5000);
  }


//end carousel