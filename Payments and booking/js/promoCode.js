/** @format */

var carArray = JSON.parse(localStorage.getItem('added')) || [];
var addressArray = JSON.parse(localStorage.getItem('add')) || [];
// if (carArray.length == 1) {
//   carArray.map(function (ele, index) {
//     document.querySelector('.h').innerHTML = ele.name;
//     document.querySelector('.T').innerHTML = ele.drive;
//     document.querySelector('.U').innerHTML = ele.fuel;
//     document.querySelector('#payment').innerHTML = '₹' + ele.price;
//     document.querySelector('.reat').innerHTML = ele.reating;
//     document.querySelector('.driven').innerHTML = ele.driven + 'kms driven';
//     document.querySelector('.ozxc').setAttribute('src', ele.image_url);
//   });
// }
document.querySelector('#apply').addEventListener('click', ApplyCode);

function ApplyCode() {
  event.preventDefault();

  //   var promo = document.querySelector("#promo");

  if (document.querySelector('#promo').value === 'MASAI30') {
    alert('Promo Code Successfully Applied');
    carArray.map(function (ele, index) {
      var u = Number(ele.price);
      ele.price = (u * 30) / 100;

      localStorage.setItem('added', JSON.stringify(carArray));
    });
    // document.querySelector("#payment").style.color = "red";

    window.location.href = 'booking.html';
  } else {
    // document.querySelector("body").style.color ="blue";
    alert('Promo Code invalid');
  }
}
