



           document.querySelector("#apply").addEventListener("click",ApplyCode);

           function ApplyCode() {

            event.preventDefault();

            //   var promo = document.querySelector("#promo");
                
              if (  document.querySelector("#promo").value === "MASAI30") {
                alert("Promo Code Successfully Applied");
               
                // document.querySelector("#payment").style.color = "red";
                
                 window.location.href = "booking.html";
              }
              else {
                // document.querySelector("body").style.color ="blue";
                alert("Promo Code invalid");

              }
           }