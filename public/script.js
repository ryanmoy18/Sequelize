async function getData() {
  const request = await fetch('/api/dining');
  const restaurant = await request.json();
  const arrayDining = restaurant.data;
  const diningTable = document.querySelector('.table');
  console.table(diningTable);

  arrayDining.forEach((index) => {
    const appendItem = document.createElement('tr');
    appendItem.innerHTML = `
      <td>${index.hall_id}</td>
      <td>${index.hall_name}</td>
      <td>${index.hall_address}</td>
    `;
    diningTable.append(appendItem);
  });
}


async function windowActions() {
  const data = await getData();
}

window.onload = windowActions;