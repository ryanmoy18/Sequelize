async function getData() {
  const request = await fetch("/api/dining");
  const restaurant = await request.json();
  const arrayDining = restaurant.data;
  const diningTable = document.querySelector(".table");
  //console.table(diningTable);

  arrayDining.forEach((index) => {
    const appendItem = document.createElement("tr");
    appendItem.innerHTML = `
      <td>${index.hall_id}</td>
      <td>${index.hall_name}</td>
      <td>${index.hall_address}</td>
    `;
    diningTable.append(appendItem);
  });
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

async function getMeals() {
  const diningRequest = await fetch("api/wholeMeals");
  const diningData = await diningRequest.json();
  return diningData;
}

async function windowActions() {
  const diningData = await getData();
  const meals = await getMeals();
  const mealsData = meals.data;

  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selected = mealArray.map((element) => {
    const random = getRandomIntInclusive(0, mealsData.length - 1);
    return mealsData[random];
  });

  let chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Meal Macros",
    },
    axisX: {
      title: "Meals",
      prefix: "#",
    },
    axisY: {
      title: "Macros",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries,
    },
    data: [
      {
        type: "stackedBar",
        name: "Calories",
        showInLegend: "true",
        dataPoints: [
          {label: selected[0].meal_name, y: selected[0].calories},
          {label: selected[1].meal_name, y: selected[1].calories},
          {label: selected[2].meal_name, y: selected[2].calories},
          {label: selected[3].meal_name, y: selected[3].calories},
          {label: selected[4].meal_name, y: selected[4].calories},
          {label: selected[5].meal_name, y: selected[5].calories},
          {label: selected[6].meal_name, y: selected[6].calories},
          {label: selected[7].meal_name, y: selected[7].calories},
          {label: selected[8].meal_name, y: selected[8].calories},
          {label: selected[9].meal_name, y: selected[9].calories},
        ],
      },
      {
        type: "stackedBar",
        name: "Serving Size",
        showInLegend: "true",
        yValueFormatString: "#",
        dataPoints: [
          { x: new Date(2017, 0, 30), y: 86 },
          { x: new Date(2017, 0, 31), y: 95 },
          { x: new Date(2017, 1, 1), y: 71 },
          { x: new Date(2017, 1, 2), y: 58 },
          { x: new Date(2017, 1, 3), y: 60 },
          { x: new Date(2017, 1, 4), y: 65 },
          { x: new Date(2017, 1, 5), y: 89 },
        ],
      },
      {
        type: "stackedBar",
        name: "Cholesterol",
        showInLegend: "true",
        yValueFormatString: "#",
        dataPoints: [
          { x: new Date(2017, 0, 30), y: 48 },
          { x: new Date(2017, 0, 31), y: 45 },
          { x: new Date(2017, 1, 1), y: 41 },
          { x: new Date(2017, 1, 2), y: 55 },
          { x: new Date(2017, 1, 3), y: 80 },
          { x: new Date(2017, 1, 4), y: 85 },
          { x: new Date(2017, 1, 5), y: 83 },
        ],
      },
      {
        type: "stackedBar",
        name: "Sodium",
        showInLegend: "true",
        yValueFormatString: "#",
        dataPoints: [
          { x: new Date(2017, 0, 30), y: 61 },
          { x: new Date(2017, 0, 31), y: 55 },
          { x: new Date(2017, 1, 1), y: 61 },
          { x: new Date(2017, 1, 2), y: 75 },
          { x: new Date(2017, 1, 3), y: 80 },
          { x: new Date(2017, 1, 4), y: 85 },
          { x: new Date(2017, 1, 5), y: 105 },
        ],
      },
      {
        type: "stackedBar",
        name: "Carbs",
        showInLegend: "true",
        yValueFormatString: "#",
        dataPoints: [
          { x: new Date(2017, 0, 30), y: 61 },
          { x: new Date(2017, 0, 31), y: 55 },
          { x: new Date(2017, 1, 1), y: 61 },
          { x: new Date(2017, 1, 2), y: 75 },
          { x: new Date(2017, 1, 3), y: 80 },
          { x: new Date(2017, 1, 4), y: 85 },
          { x: new Date(2017, 1, 5), y: 105 },
        ],
      },
      {
        type: "stackedBar",
        name: "Protein",
        showInLegend: "true",
        yValueFormatString: "#",
        dataPoints: [
          { x: new Date(2017, 0, 30), y: 61 },
          { x: new Date(2017, 0, 31), y: 55 },
          { x: new Date(2017, 1, 1), y: 61 },
          { x: new Date(2017, 1, 2), y: 75 },
          { x: new Date(2017, 1, 3), y: 80 },
          { x: new Date(2017, 1, 4), y: 85 },
          { x: new Date(2017, 1, 5), y: 105 },
        ],
      },
      {
        type: "stackedBar",
        name: "Fat",
        showInLegend: "true",
        yValueFormatString: "#",
        dataPoints: [
          { x: new Date(2017, 0, 30), y: 52 },
          { x: new Date(2017, 0, 31), y: 55 },
          { x: new Date(2017, 1, 1), y: 20 },
          { x: new Date(2017, 1, 2), y: 35 },
          { x: new Date(2017, 1, 3), y: 30 },
          { x: new Date(2017, 1, 4), y: 45 },
          { x: new Date(2017, 1, 5), y: 25 },
        ],
      },
    ],
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }

  console.table(selected);

}

window.onload = windowActions;
