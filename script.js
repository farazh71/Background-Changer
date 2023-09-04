function change_bg(clr) {
  document.body.style.background = clr;
  let elm = document.getElementsByClassName("one");
  if (clr == "#000000") {
    for (let e of elm) e.style.color = "white";
  } else {
    for (let e of elm) e.style.color = "black";
  }
}
