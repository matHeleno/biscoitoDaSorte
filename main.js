const boxOne = document.querySelector(".boxOne")
const boxTwo = document.querySelector(".boxTwo")

const luckCokkie = document.querySelector("#luckCookie")
const reset = document.querySelector("#reset")

const toggleHide = () => {
  boxOne.classList.toggle("hide");
  boxTwo.classList.toggle("hide");
}

luckCokkie.addEventListener("click", toggleHide)
reset.addEventListener("click", toggleHide)


