const changeMode = (size, weight, transform, background, color) =>
  function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  const p = document.createElement("p");
  p.textContent = "Welcome Holberton!";
  document.body.append(p);
  const btnSpooky = document.createElement("button");
  btnSpooky.textContent = "Spooky";
  const btnDark = document.createElement("button");
  btnDark.textContent = "Dark mode";
  const btnScream = document.createElement("button");
  btnScream.textContent = "Scream mode";

  document.body.append(btnSpooky);
  document.body.append(btnDark);
  document.body.append(btnScream);

  btnSpooky.addEventListener("click", spooky);
  btnDark.addEventListener("click", darkMode);
  btnScream.addEventListener("click", screamMode);
}

main();
