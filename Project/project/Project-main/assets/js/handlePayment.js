let myLatitude, myLongitude;

const btnRent_1 = document.getElementById("btn-rent-1");
const btnRent_2 = document.getElementById("btn-rent-2");
const btnRent_3 = document.getElementById("btn-rent-3");
const btnRent_4 = document.getElementById("btn-rent-4");
const btnRent_5 = document.getElementById("btn-rent-5");
const btnRent_6 = document.getElementById("btn-rent-6");

const btnAddress = document.getElementById("add-address");

const mapArea = document.getElementById("address-map");
const addressCard = document.getElementById("address-card");
addressCard.style.display = "none";
const paymentContainer = document.getElementById("payment-container");
paymentContainer.style.display = "none";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      myLatitude = position.coords.latitude;
      myLongitude = position.coords.longitude;
      mapArea.innerHTML = `
      <iframe width="100%" height="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=${myLongitude},${myLatitude}&;layer=mapnik" ></iframe>
      `;
    },
    (error) => {
      console.log(`error ${error}`);
    }
  );
}

const selectDay = document.getElementById("select-day");
const selectMonth = document.getElementById("select-month");
const selectYear = document.getElementById("select-year");

const openPaymentView = () => {
  containerCards.style.display = "flex";
  paymentContainer.style.display = "flex";
  selectDay.innerHTML += generateDay();
  selectMonth.innerHTML += generateMonth();
  selectYear.innerHTML += generateYear();
};

const openAddressCard = () => {
  paymentContainer.style.width =
    paymentContainer.style.width === "670px" ? "400px" : "670px";
  addressCard.style.display =
    addressCard.style.display === "none" ? "block" : "none";
};

btnRent_1.addEventListener("click", openPaymentView);
btnRent_2.addEventListener("click", openPaymentView);
btnRent_3.addEventListener("click", openPaymentView);
btnRent_4.addEventListener("click", openPaymentView);
btnRent_5.addEventListener("click", openPaymentView);
btnRent_6.addEventListener("click", openPaymentView);

btnAddress.addEventListener("click", openAddressCard);

const closeBtn = document.querySelector("#close-payment-card");

closeBtn.addEventListener("click", () => {
  containerCards.style.display = "none";
  paymentContainer.style.display = "none";
  addressCard.style.display = "none";
  paymentContainer.style.width = "400px";
});

const generateDay = () => {
  let dayOption = '';
  for (let i = 1; i <= 7; i++) {
    dayOption += `<option value="${i}">${i}</option>`;
  }
  return dayOption;
};
const generateMonth = () => {
  let monthOption ='';
  for (let i = 1; i <= 12; i++) {
    monthOption += `<option value="${i}">${i}</option>`;
  }
  return monthOption;
};
const generateYear = () => {
  let yearOption ='';
  for (let i = 1; i <= 10; i++) {
    yearOption += `<option value="${2022 + i}">${2022 + i}</option>`;
  }
  return yearOption;
};
