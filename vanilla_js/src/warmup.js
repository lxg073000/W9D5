const partyHeader = document.getElementById("party");
// debugger;
export const htmlGenerator = (string, htmlElement) => {
  let $p = document.createElement("p");
  let $node = document.createTextNode(string);
  $p = $p.appendChild($node);
  htmlElement.append($p);
};

htmlGenerator("Party Time.", partyHeader);
