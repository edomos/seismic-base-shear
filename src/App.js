import './App.css';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import { useEffect } from 'react';

let lat = 33.76672;
let lng = -118.1924;
let riskCategory = 'I';
let siteClass = 'D-default';
let title = 'Long Beach';

const apiKey = process.env.REACT_APP_API_KEY;
let addressToLatLong_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=324+south+ave+long+beach+ca&key=${apiKey}`;
let latLongToAddress_URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
let designGroundMotion_URL = `https://earthquake.usgs.gov/ws/designmaps/asce7-16.json?latitude=${lat}&longitude=${lng}&riskCategory=${riskCategory}&siteClass=${siteClass}&title=${title}`;

function App() {
  //Fetch USGS Info (Mainly Ss, S1)
  useEffect(() => {
    fetch(designGroundMotion_URL)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [designGroundMotion_URL]);

  //Google Map Stuff
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_API_KEY, //Cant figure out why process.env removes waterlogo, works fine if api key is hardcoded?
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <div className="input__address--container">
        <input type="text" className="address" placeholder="address" className="input__address"/>
      </div>
      <div className="input__latlng--container">
        <input type="text" className="input__lat" placeholder="latitude" className="input__latlng" />
        <input type="text" className="input__lng" placeholder="longitude" className="input__latlng"/>
      </div>
      <div className="map__container">
        <GoogleMap
          center={{ lat: 33.82, lng: -118.17 }}
          zoom={10}
          mapContainerStyle={{ width: '100%', height: '100%' }}
        >
        </GoogleMap>
      </div>
    </div>
  );
}

export default App;
