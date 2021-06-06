import React, { useState } from 'react';
import Header from "./Header";
import SearchDisplay from "./SearchDisplay";
import Map from "./Map"

function App() {

  const api_url = "https://geo.ipify.org/api/v1?apiKey=at_mypl9PF26wwqAcR8xJi6FfXfE4f12&ipAddress="
  // const version = "v1"
  const [ipInput, setipInput] = useState("8.8.8.8")
  let url;

  const [info, setInfo] = useState({
    ipAddress: "8.8.8.8",
    city: "Mountain View",
    region: "Califonia",
    postalCode: "94035",
    lat: 37.38605,
    lng: -122.08385,
    timeZone: "-07:00",
    isp: "Google LLC"
  })

  function handleInput(e) {
    console.log("handlerUserInput called", e.target.value)
    setipInput(e.target.value)
  }

  function fetchData() {
    url = api_url + ipInput;
    console.log("url in handle Click", url, typeof (url))
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result, "result")
          setInfo({
            ipAddress: result.ip,
            city: result.location.city,
            region: result.location.region,
            postalCode: result.location.postalCode,
            lat: result.location.lat,
            lng: result.location.lng,
            timeZone: result.location.timezone,
            isp: result.isp,
          })
        },
        (error) => {
          console.log(error, "error")
        }
      )
  }



  return <div>
    <Header />
    <SearchDisplay handleInput={handleInput} handleClick={fetchData} displayInfo={info} />
    <Map mapLocation={info} />
  </div>;
}

export default App;
