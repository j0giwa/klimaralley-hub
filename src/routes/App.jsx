import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";


/**
 * Landing Page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @author Alexander Golüke
 * @version 0.5.0
 */
function App() {

  const markers = [
    {
      geocode: [52.0277, 8.9019],
      popUp: "Hier befindet sich...1"
    },
    {
      geocode: [52.019, 8.889],
      popUp: "Hier befindet sich...2"
    },
    {
      geocode: [52.023, 8.905],
      popUp: "Hier befindet sich...3"
    },

  ]
  const customIcon = new Icon ({
    iconUrl: "https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/pin-location-icon.png",
    iconSize: [28,38]
  })
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-row container bg-base-100 p-4 mb-auto">
        Hier könnte ihre website stehen.
        <MapContainer center={[52.0267, 8.9019]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markers.map(marker => (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))
          }
        </MapContainer>
        <CookieConsent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;
