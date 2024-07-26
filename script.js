let btn = document.querySelector(".create-notes");
let notesContainer = document.querySelector(".write-notes");
let notes = document.querySelectorAll(".write-note");
let input;
let deleteEl;

btn.addEventListener("click", () => {
  input = document.createElement("p");
  deleteEl = document.createElement("img");
  input.classList.add("write-note");
  input.setAttribute("contentEditable", "true");
  deleteEl.src = "img/delete.png";
  notesContainer.appendChild(input).appendChild(deleteEl);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});

// let btn = document.querySelector(".create-notes");
// let notesContainer = document.querySelector(".write-notes");
// let notes = document.querySelectorAll(".write-note");
// let input;
// let deleteEl;

// function showNotes() {
//   notesContainer.innerHTML = localStorage.getItem("notes");
// }

// showNotes();

// function updateStorage() {
//   localStorage.setItem("notes", notesContainer.innerHTML);
// }

// btn.addEventListener("click", () => {
//   input = document.createElement("p");
//   deleteEl = document.createElement("img");
//   input.classList.add("write-note");
//   input.setAttribute("contentEditable", "true");
//   deleteEl.src = "img/delete.png";
//   notesContainer.appendChild(input).appendChild(deleteEl);
// });

// notesContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//     e.target.parentElement.remove();
//     updateStorage();
//   } else if (e.target.tagName === "p") {
//     notes = document.querySelectorAll(".write-note");
//     notes.forEach(nt => {
//       nt.onkeyup = function () {
//         updateStorage();
//       };
//     });
//   }
// });

// document.addEventListener("keydown", event => {
//   if (event.key === "Enter") {
//     document.execCommand("insertLineBreak");
//     event.preventDefault();
//   }
// });
