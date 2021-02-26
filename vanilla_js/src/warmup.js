const partyHeader = document.getElementById("party");
// debugger;
export const htmlGenerator = (string, htmlElement) => {
  let p = document.createElement("p");
  // let $node = document.createTextNode(string);
  // p = p.appendChild($node);
  p.innerHTML = string; // here we changed the function from createTextNode and appendChild to simply ".innerHTML"
  //this is because innerHTML adds the pext into the HTML element where as createTextNode adds text
  // outside of the HTML element

  // const $children = Array.from(htmlElement.children);
  // if ($children.length > 1) {
  //   console.log("inside conditional");
  //   htmlElement.append($children[$children.length - 1])
  // } else {htmlElement.append($p)};

  //now before we append we need to make some revisions to the if statement so that we delete
  // the previous child (previous time) and replace with the new child(the current time)

  let child = htmlElement.lastElementChild;
  while (child) {
    // need a while statement so can remove all children
    htmlElement.removeChild(child); //this is logically the same as we made it except i added a removechild.
    child = htmlElement.lastElementChild; //easy function that i found that grabs last child
  }
  htmlElement.append(p);
};

htmlGenerator(" Party Time.", partyHeader);
