async function getData() {
  const request = await fetch('/api/meals');
  const data = await request.json();
  return data;
}

async function getRestaurants() {
  const restaurantData = getData();
  restaurantData.data.forEach((restaurant) => {
    const appendItem = document.createElement('div');
    appendItem.classList.add('tile', 'has-text-centered', 'is-parent', 'is-3');
    appendItem.innerHTML = `
      <article class = "tile is-child box has-background-link-dark ">
      <span class = "subtitle has-text-light has-text-weight-bold">
      ${restaurant.hall_name}</span>
      <br />
      <span class = "has-text-light">
      ${restaurant.hall_address.split(',')[0]}
      </span>
      <br />
      <span class = "has-text-light">
      ${restaurant.hall_address.split(',')[1]}
      </span>
    </article>`;
    targetBox.append(appendItem);
  });
}

async function setData(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

async function windowActions() {
  console.log('window loaded');
  const data = await getData();
  console.table(data);

  setData(data);
  const meals = localStorage.getItem('data');
  const mealsData = JSON.parse(meals);
  console.log(meals);
  console.log(mealsData);
}

window.onload = windowActions;