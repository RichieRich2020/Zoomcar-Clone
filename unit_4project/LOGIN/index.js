/** @format */

var addressArray = JSON.parse(localStorage.getItem('add')) || [];
var details = JSON.parse(localStorage.getItem('Alltails')) || [];
if (details.length == 1) {
  details.map(function (ele, index) {
    document.querySelector('#loginNsignup').innerHTML = ele.Name;
    document.querySelector('.material-symbols-outlined').style.color =
      '#b9b6b6';
  });
}
// Air Round Trip
document.querySelector('#findCars').addEventListener('click', hjk);
function hjk() {
  window.open('PRO.HTML', '_blank');
}
document.querySelector('#airporttrip').addEventListener('click', funAirport);
function funAirport(event) {
  event.stopImmediatePropagation();
  document.querySelector('#airporttrip').style.border = '2px solid green';
  document.querySelector('#airporttrip').style.color = 'green';
  document.querySelector('#header').style.backgroundImage =
    "url('https://github.com/RichieRich2020/PROJECT_CLONE_ZOOMCAR/blob/Dev_Anup/banner_airport.png?raw=true')";
  document.querySelector('#btnroundTrip').style.color = 'black';
  document.querySelector('#btnroundTrip').style.border = 'none';
}

// Round Trip
document.querySelector('#btnroundTrip').addEventListener('click', funRoundtrip);
function funRoundtrip(event) {
  // event.stopImmediatePropagation();
  document.querySelector('#btnroundTrip').style.border = '2px solid green';
  document.querySelector('#btnroundTrip').style.color = 'green';
  document.querySelector('#header').style.backgroundImage =
    "url('https://zoomcar-assets.zoomcar.com/images/original/a121667db0d5e435e48884b015120bc180a4ad2f.jpg')";
  document.querySelector('#airporttrip').style.color = 'black';
  document.querySelector('#airporttrip').style.border = 'none';
}

// menu side bar
document.querySelector('#menuclick').addEventListener('click', funSidebar);
function funSidebar() {
  event.preventDefault();
  document.querySelector('#left').style.width = '25%';
  document.querySelector('#left').style.background = 'white';
  document.querySelector('#left').style.zIndex = '500';
  document.querySelector('#left').style.height = '3000%';
  document.querySelector('#left').style.position = 'absolute';
  document.querySelector('#left').style.marginTop = '-5px';
  document.querySelector('#menuclick').style.visibility = 'hidden';
  // document.querySelector("body").style.filter="blur(1px)";
  document.querySelector('#header').style.opacity = '85%';
  document.querySelector('#twoBox').style.opacity = '85%';
  document.querySelector('#backgroundColor').style.opacity = '85%';

  document.querySelector('#left').innerHTML = `<div class="container">

        <div> 
            <span id="colour">
            <img 
                src=" data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAApACIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAQFBgf/xAAmEAABBAIBAwMFAAAAAAAAAAABAAIDBAURBgcSUSExYSJBUnGh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AOuIij5G9WxtKW5dlEUEQ25x9f591plIRVPHeR47kVd82Pe/cZ1JHI3Tm+Nj5+FbICIiAs5za1gjipMfnL7awsAdoaC54IOw7tAJ1seNLRrL8g4Li8/kXX7k9xkrmhpET2huh+2lUU/TyTjOKkmq0c223cskfVJC6EED2a0O9z6+V0BYiDphhIJ45mWsgXRuDgDIzWwd/gtuhBERQEREBERAREQf/9k= " alt="error">
                <a href="login_signup.html"> ${'Login or Signup'} </a> 
            </span>
        </div>
    
        <div>
            <img  
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4XyzpYt3mJeKvf-rD1ZzBrGTzwsmF3-pfJrtBA4UBOETtmNXe " alt="error">
                <a href=""> Change City </a> 
        </div>
    
        <div>
                <img  
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAjACQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAUGBwQD/8QAKxAAAgEEAAUCBQUAAAAAAAAAAQMCAAQFEQYSITFBE2EUIlGRoRdUk9HS/8QAFwEBAQEBAAAAAAAAAAAAAAAABAADAv/EAB8RAAICAgMAAwAAAAAAAAAAAAECAAMEERIhQTEyYf/aAAwDAQACEQMRAD8A3E9Bs1HyzuHiSJZWwBHcG5h/dd04RZCUJxEoSGpRkNgj6Gqllscy0Y5ysJw4qxX19W4X1A+p1H8VlazKNiY3OyDayxqy2NaprVZC0mtQ2ycHRIgPc76V0Icq4VFyGQaqY3GcJAgj2IrGs7mWZhq7DGWq0WgmORFsrkDZ9uYxHk+B4rS+C8M/CYSNvdT5nTmWTiDsLJA+Ufb7k1jTkm1yoHQ9h8fLN1hUDoeyepSlLjp53L12tu24fLlUqBnOR8ADZrMOI+IrXiZ6rVc8hBPMBBC0xPqS8E/N1PtWoPUu4SxLoia2RMJxPYgjRFVuy4HxdjG4+GbdQa4GIcJx51RPcROum+2++qNkJY+lX49g8qu2zSr9fZV8Ne8OcKZOUGfE3d2ByyeIxMUnzEaPfwSN+1aTZ3SL22Xc2rIsSwc0Jx7EVUv02w37m/8A5If4qw4HDowdibO1a9iuczHrSBI3roNAdOn5Nc46WoeLAATnES6s8WUBfySVKUpcdFKUqlFKUqlFKUqlP//Z" alt="error">
                <a href=""> Become a Host </a> </div>
    
        <div>
                <img 
                 src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqr8C1DDDQjIrpjqk2OLr9ds4LDx67DMz9-d2oVbRn_4b7oD7p" alt="error">
                 <a class="anchor" href="policies.html"> Zoomcar Fleet Vehicles Policies </a>
                  </div>
    
        <div>
                <img 
                 src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqr8C1DDDQjIrpjqk2OLr9ds4LDx67DMz9-d2oVbRn_4b7oD7p" alt="error">
                <a href=""> Zoomcar Host Vehicles Policies </a>
        </div>
    
        <div> 
            <img 
             src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDQ21MNtEwwAUGee9voNE0i8IlAiHyvOu_Q&usqp=CAU" alt="error">
             <a class="anchor" href="helpSup.html">  Help & Support </a>
         </div>   
         <!--  -->   
    </div>`;
}

// sidebar hide
document.querySelector('#roundTrip').addEventListener('click', funHide);
function funHide() {
  event.preventDefault();
  location.href = 'index.html';
}

// find cars
document.querySelector('#findCars').addEventListener('click', funFindcars);
function funFindcars() {
  var address = document.querySelector('#address').value;
  var from = document.querySelector('#from').value;
  var to = document.querySelector('#to').value;
  var addObj = {};
  addObj.addressnow = address;
  addObj.fromdate = from;
  addObj.todate = to;
  addressArray.splice(0, addressArray.length);
  addressArray.push(addObj);
  localStorage.setItem('add', JSON.stringify(addressArray));
}
