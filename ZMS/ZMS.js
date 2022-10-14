// ids---
// contactName
// contactCompany
// contactEmailId
// contactPhone
// contactCountry
// requirements

function submit(){
    // Retrive Data
    var name=document.getElementById("contactName").value;
    var company=document.getElementById("contactCompany").value;
    var mail=document.getElementById("contactEmailId").value;
    var phone=document.getElementById("contactPhone").value;
    var country=document.getElementById("contactCountry").value;
    var requirements=document.getElementById("requirements").value;
   


   //Store Data
   var name=localStorage.setItem("name", name);
   var company=localStorage.setItem("company", company);
   var mail=localStorage.setItem("mail", mail);
   var phone=localStorage.setItem("phone", phone);
   var country=localStorage.setItem("country", country);
   var req=localStorage.setItem("requirements", requirements);

   
}