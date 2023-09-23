
let lastModified =  document.lastModified;

let currentDate = new Date();

let year = currentDate.getFullYear();

let footer = document.querySelector("footer");

let firstP = footer.firstElementChild;

firstP.innerHTML = `&copy; ${year} | Angel Orozco | ${lastModified}`
