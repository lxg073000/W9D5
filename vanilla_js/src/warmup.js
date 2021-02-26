const partyHeader = document.getElementById("party");
// debugger;
export const htmlGenerator = (string, htmlElement) => {
  let $p = document.createElement("p");
  let $node = document.createTextNode(string);
  $p = $p.appendChild($node);
  
  const $children = Array.from(htmlElement.children);
  if ($children.length > 1) {
    console.log("inside conditional");
    htmlElement.append($children[$children.length - 1])
  } else {htmlElement.append($p)};
};

htmlGenerator(" Party Time.", partyHeader);
