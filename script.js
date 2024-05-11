const totalPriceElement = document.getElementById('totalPrice');
const parentListElement=document.getElementById('list');
let totalPrice=0;

function addItem(form){
  const itemname = form.itemname.value;
  const itemprice = form.itemprice.value;

  //console.log(itemname, itemprice)
  totalPrice+=parseInt(itemprice)
  totalPriceElement.innerText = `Total Price: $${totalPrice}`

  const ListElement = document.createElement("li");
  const textNode = document.createTextNode(`${itemname} - $${itemprice}`);
  ListElement.appendChild(textNode);
  parentListElement.appendChild(ListElement);
  ListElement.classList.add("list-group-item", "d-flex", "justify-content-between");

  const deleteButton = document.createElement("button");
  const deleteTextNode = document.createTextNode("delete");
  deleteButton.appendChild(deleteTextNode);
  deleteButton.classList.add("btn", "btn-danger");
  ListElement.appendChild(deleteButton);

  deleteButton.addEventListener("click", () =>{
    ListElement.remove();
    totalPrice-=parseInt(itemprice);
    totalPriceElement.innerText = `Total Price: $${totalPrice}`
  });
  return false;
}