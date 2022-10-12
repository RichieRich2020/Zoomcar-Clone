    // Air Round Trip
    document.querySelector("#airporttrip").addEventListener("click",funAirport);
    function funAirport()
    {
        event.preventDefault();
        document.querySelector("#airporttrip").style.border="2px solid green";
        document.querySelector("#airporttrip").style.color="green";
        document.querySelector("#header").style.backgroundImage="url('https://github.com/RichieRich2020/PROJECT_CLONE_ZOOMCAR/blob/Dev_Anup/banner_airport.png?raw=true')";       
        document.querySelector("#btnroundTrip").style.color="black";
        document.querySelector("#btnroundTrip").style.border="none";
    }
    
    // Round Trip
    document.querySelector("#btnroundTrip").addEventListener("click",funRoundtrip);
    function funRoundtrip()
    {
        event.preventDefault();
        document.querySelector("#btnroundTrip").style.border="2px solid green";
        document.querySelector("#btnroundTrip").style.color="green";
        document.querySelector("#header").style.backgroundImage="url('https://zoomcar-assets.zoomcar.com/images/original/a121667db0d5e435e48884b015120bc180a4ad2f.jpg')";       
        document.querySelector("#airporttrip").style.color="black";
        document.querySelector("#airporttrip").style.border="none";
    }

