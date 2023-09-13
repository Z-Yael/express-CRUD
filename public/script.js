const containerDiv = document.querySelector(".container");
const url = "http://localhost:5000";

const showUI = (data) => {
  for (let i = 0; i < data.length; i++) {
    const appDiv = document.createElement("div");
    appDiv.innerHTML = `<div class="menuCard">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4L9MgtPVRa2EZRsaGSATjqHfgw3vIVjurw-hxvhaBEg&s"
    alt=""
  />
  <div class="menuContent">
    <span class="name">${data[i].name}</span>
    <span class="price">${data[i].price}</span>
    <span class="description">${data[i].description}</span>
  </div>
</div>`;
    containerDiv.append(appDiv);
  }
};

const getMenu = async () => {
  const response = await fetch(`${url}/menu`); //default method GET --> return promise
  const data = await response.json();
  console.log(data);
  showUI(data);
};
