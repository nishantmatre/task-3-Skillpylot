const modal = document.getElementById("stepsModal");
document.getElementById("openSteps").addEventListener("click", () => modal.classList.remove("hidden"));
document.getElementById("closeModal").addEventListener("click", () => modal.classList.add("hidden"));
document.getElementById("reviewBtn").addEventListener("click", () => {
  modal.classList.add("hidden");
  alert("Great! You have reviewed the implementation steps.");
});
modal.addEventListener("click", event => {
  if (event.target === modal) modal.classList.add("hidden");
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") modal.classList.add("hidden");
});
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  alert("Theme demo: use the browser refresh to return to the default view.");
});