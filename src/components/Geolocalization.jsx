// import React, { useState, useEffect } from 'react'

// const Geolocalization = () => {

//         var output = document.getElementById("out");
      
//         if (!navigator.geolocation){
//           output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
//           return;
//         }
      
//         function success(position) {
//           var latitude  = position.coords.latitude;
//           var longitude = position.coords.longitude;
      
//           output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
      
//           var img = new Image();
//           img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
      
//           output.appendChild(img);
//         };
      
//         function error() {
//           output.innerHTML = "Unable to retrieve your location";
//         };
      
//         output.innerHTML = "<p>Locating…</p>";
      
//         navigator.geolocation.getCurrentPosition(success, error);




// const [ works, setWorks ] = useState([]);

// useEffect(() => {
//     // 👍 No vamos a romper la primera regla nunca más.
//     if (!navigator.geolocation) {
//       localStorage.setItem('formData', name);
//     }
//   });


//   // ------------------------------------------------
//     useEffect(() => {
//         getData()
//     }, [])

//     const getData = async () => {
//         const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/Portfolio-react/master/src/json/Projects.json')
//         const infoProjects = await data.json()
//         // console.log(infoProjects)
//         setWorks(infoProjects)
//     }
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Geolocalization
