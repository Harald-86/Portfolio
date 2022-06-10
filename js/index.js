const links = document.querySelectorAll(".nav-link");
const collapse = document.querySelector("#navbarSupportedContent");
console.log(collapse);
console.log(links);

links.forEach((clickLink) => {
  clickLink.onclick = function (event) {
    console.log(event);
    collapse.style.display = "hide";
  };
});
