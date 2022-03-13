let removableListeners = [];

function resetStars() {
  const stars = document.querySelectorAll(".fa");
  stars.forEach((star) => {
    star.classList.add("fa-star-o");
    star.classList.remove("fa-star");
  });
}

function fill(index) {
  resetStars();
  const stars = document.querySelectorAll(".fa");
  for (let i = 0; i <= index; i++) {
    stars[i].classList.remove("fa-star-o");
    stars[i].classList.add("fa-star");
  }
}

function handleMouseOver(index) {
  const fn = (e) => {
    fill(index);
  };
  removableListeners[index] = fn;
  return fn;
}

const resetCallback = () => resetStars();

function handleClick(index, callback, el) {
  return (e) => {
    document
      .querySelector(el)
      .childNodes.forEach((star, i) =>
        star.removeEventListener("mouseover", removableListeners[i])
      );
    document.querySelector(el).removeEventListener("mouseout", resetCallback);
    fill(index);
    callback(index + 1);
  };
}

function Star(el, count, callback) {
  const starContainer = document.querySelector(el);
  starContainer.addEventListener("mouseout", resetCallback);
  for (let i = 0; i < count; i++) {
    const starIcon = document.createElement("i");
    starIcon.addEventListener("mouseover", handleMouseOver(i));
    starIcon.addEventListener("click", handleClick(i, callback, el));
    starIcon.classList.add("fa");
    starIcon.classList.add("fa-star-o");
    starContainer.appendChild(starIcon);
  }
}
