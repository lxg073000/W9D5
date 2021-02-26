const dogs = {
  Corgi: "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  Affenpinscher: "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier":
    "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  Tosa: "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/",
};

export const dogLinkCreator = function () {
  const dogsArr = [];
  Object.keys(dogs).forEach((dog) => {
    let dogLink = document.createElement("a");
    dogLink.innerHTML = dog;
    dogLink.href = dogs[dog];
    let dogLI = document.createElement("li");
    dogLI.append(dogLink);
    dogsArr.push(dogLI);
  });
  return dogsArr;
};

export const attachDogLinks = function () {
  const dogLinks = dogLinkCreator();

  dogLinks.forEach((dogLink) => {
    const ul = document.getElementsByClassName("drop-down-dog-list")[0];
    ul.append(dogLink);
  });
};

// export const handleEnter = function() {
    let dogEnter = document.getElementById("some-dogs")
    dogEnter.addEventListener("mouseover", () => {
      // debugger
      let dogsUl = document.getElementsByClassName("drop-down-dog-list")[0];
      dogsUl.classList.toggle('hidden');
    })
// };

// export const handleExit = function() {
  let dogExit = document.getElementById("some-dogs");
  // debugger
  dogExit.addEventListener("mouseout", () => {
    // debugger

    let dogsUl = document.getElementsByClassName("drop-down-dog-list")[0];
    dogsUl.classList.toggle('hidden');
  })
// };

attachDogLinks();
// debugger;
