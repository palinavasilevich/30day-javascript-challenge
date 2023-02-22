const root = document.documentElement;
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  root.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach((input) => {
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
});
