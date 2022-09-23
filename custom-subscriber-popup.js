const newsletter__modal = document.getElementById("customNewsletter");

const newsletter__close = document.getElementById("customNewsletter__close");

newsletter__close.addEventListener("click", () => {
  newsletter__modal.style.display = "none";
});
