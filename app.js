const h1 = document.querySelector("#title");

function handleTitleClick() {
  /*const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }*/
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
const h2 = document;
console.log(h2);
