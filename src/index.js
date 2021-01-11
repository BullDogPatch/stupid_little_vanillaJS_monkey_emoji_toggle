const closedMonkeyFace = document.querySelector(".closed");
const openMonkeyface = document.querySelector(".open");
// console.log(openMonkeyface)

// event listener

closedMonkeyFace.addEventListener("click", () => {
  if (openMonkeyface.classList.contains("open")) {
    openMonkeyface.classList.add("active");
    closedMonkeyFace.classList.remove("active");
    // console.log("clicked");
  }
});

openMonkeyface.addEventListener("click", () => {
  if (closedMonkeyFace.classList.contains("closed")) {
    closedMonkeyFace.classList.add("active");
    openMonkeyface.classList.remove("active");
  }
});
