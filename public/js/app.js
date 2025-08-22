let btn = document.querySelectorAll("button");

for (let b of btn) {
  b.addEventListener("click", () => {
    console.log("button is clicked");
  });
}
