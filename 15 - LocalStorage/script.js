const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const btns = document.querySelector(".buttons");

const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(event) {
  event.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));

  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((item, index) => {
      return `
              <li>
                <input type="checkbox" data-index=${index} id="item${index}" 
                ${item.done ? "checked" : ""} />
                <label for="item${index}">${item.text}</label>
              </li>
             `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;

  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;

  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function toggleCheckAll(e) {
  if (e.target.matches(".check-all")) {
    items.forEach((item) => {
      item.done = true;
    });

    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
  } else if (e.target.matches(".clear-all")) {
    items.forEach((item) => {
      item.done = false;
    });

    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
  }
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
btns.addEventListener("click", toggleCheckAll);

populateList(items, itemsList);
