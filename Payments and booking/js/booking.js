/** @format */

var carArray = JSON.parse(localStorage.getItem('added')) || [];
var addressArray = JSON.parse(localStorage.getItem('add')) || [];
if (carArray.length == 1) {
  carArray.map(function (ele, index) {
    document.querySelector('.h').innerHTML = ele.name;
    document.querySelector('.T').innerHTML = ele.drive;
    document.querySelector('.U').innerHTML = ele.fuel;
    document.querySelector('#payment').innerHTML = '₹' + ele.price;
    document.querySelector('.reat').innerHTML = ele.reating;
    document.querySelector('.driven').innerHTML = ele.driven + 'kms driven';
    document.querySelector('.ozxc').setAttribute('src', ele.image_url);
  });
}
dis(addressArray);
function dis(addressArray) {
  addressArray.map(function (ele, index) {
    var l = document.querySelector('#ol');
    var ll = document.querySelector('#ik');
    var la = document.querySelector('#oll');
    var laa = document.querySelector('#ikk');

    ll.append(ele.fromdate);
    l.append(ele.todate);
    laa.append(ele.addressnow);
    la.append(ele.addressnow);
  });
}

document.querySelector('#chbox').addEventListener('click', checkbox);

function checkbox() {
  document.querySelector('#btn').style.backgroundColor = '#10a310';
}

document.querySelector('#btn').addEventListener('click', checkout);

function checkout() {
  window.location.href = 'payments.html';
}
